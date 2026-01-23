'use client';

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import {deleteCartItem} from "@/app/cart/actions";

type Props = {
  productId: number;
}

export const DeleteFromCartButton = ({ productId }: Props) => {
  const [isPending, startTransition] = useTransition();

  const router= useRouter();

  const handleDelete = async () => {
    await deleteCartItem(productId);
    startTransition(() => router.refresh())
  }

  return (
    <button
      onClick={handleDelete}
      style={{ background: '#c24141' }}
    >
      Удалить
    </button>
  )
}