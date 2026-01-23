'use server'
import { cookies } from "next/headers";
import { CartItem } from "@/app/types";
import { readCartSafely } from "@/app/actions";

export async function setCart(cartItems: CartItem[]) {
  const store = await cookies();
  await store.set('cartItems' as any, JSON.stringify(cartItems) as any)
  // await store.set('cartItems', JSON.stringify(cartItems))
}
export async function getCart(): Promise<CartItem[]> {
  const store = await cookies();
  const cart = (await store).get( 'cartItems' as any);
  return readCartSafely(cart?.value)
}
export async function getCartItem(productId: number ) {
  const cart = await getCart();
  return cart.find(i => i.productId === productId);
}
export async function increaseCartItem(productId: number) {
  const cart = await getCart();
  const item = cart.find(i => i.productId === productId);
  if (item) item.qty += 1;
  await setCart(cart)
}
export async function decreaseCartItem(productId: number) {
  let cart = await getCart();
  const item = cart.find(i => i.productId === productId);
  if (item) item.qty -= 1;
  if (item && item.qty <= 0) {
    cart = cart.filter(i => i.productId !== productId);
  }
  await setCart(cart)
}
export async function addCartItem(productId: number) {
  const cart = await getCart();
  const item = cart.find(i => i.productId === productId);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ productId, qty: 1})
  }
  await setCart(cart);
}
export async function deleteCartItem(productId: number) {
  let cart = await getCart();
  cart = cart.filter(i =>i.productId !== productId);
  await setCart(cart);
}