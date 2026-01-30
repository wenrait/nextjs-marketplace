'use client';

import {useTransition} from "react";
import {useRouter} from "next/navigation";
import {addCartItem} from "@/app/cart/actions";

type Props = {
  productId: number;
  qty: number;
}

export const AddToCartButton = ({ productId, qty }: Props) => {

  const [isPending, startTransition] =
    useTransition();
  const router = useRouter();
  const handleAddToCart = async () => {
    await addCartItem(productId);
    startTransition(() => router.refresh())
  }

  return (
    <button
      onClick={handleAddToCart}
      style={{ background: '#6c41c2' }}
    >
      В корзину ({qty})
    </button>
  )
}

//const { addToCart, cart } = useCart();
//console.log('CART', cart)
//const product = cart.find(p => p.productId === productId);
//console.log('PRODUCT', product);