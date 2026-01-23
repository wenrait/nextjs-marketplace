'use client'



import {useTransition} from "react";
import {CartItem} from "@/app/types";
import {useRouter} from "next/navigation";
import {decreaseCartItem, increaseCartItem} from "@/app/cart/actions";

export function QuantityButtons({ productId, qty }: CartItem) {
  const [isPending, startTransition] = useTransition();
  const router= useRouter();

  const handleDec= async () => {
    await decreaseCartItem(productId)
    startTransition(() => router.refresh())
  }

  const handleInc = async () => {
    await increaseCartItem(productId)
    startTransition(() => router.refresh())
  }

  return (
    <>
      <button
      onClick={handleDec}
      style={{ background: '#6c41c2', width: 32, height: 32, fontSize: 12 }}
    >
      ─
    </button>
      {qty}
      <button
        onClick={handleInc}
        style={{ background: '#6c41c2', width: 32, height: 32, fontSize: 12 }}
      >
        ✚
      </button>
    </>

  )

}