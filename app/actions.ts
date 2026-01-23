'use server'


import {CartSchema, CartWithProducts} from "@/app/types";

export async function readCartSafely(raw?: string) {
  if (!raw) return [];

  const parsed =
    await CartSchema.safeParse(JSON.parse(raw));
  return parsed.success ? parsed.data : [];
}
export async function getTotal(cart: CartWithProducts[]) {
  const total = cart.reduce((sum, item) =>{
    return sum + item.price * item.qty
  }, 0).toFixed(2);

}
// export async function readCartSafely(raw: string | undefined): Promise<CartItem[]> {
//   if (!raw) return [];
//   try {
//     const data = await JSON.parse(raw);
//     if (!Array.isArray(data)) return [];
//     return data.filter((item): item is CartItem =>
//       typeof item === 'object' &&
//       typeof item.productId === 'number' &&
//       typeof item.qty === 'number' &&
//       item.qty > 0
//     );
//   } catch (e) {
//     console.error(e);
//     return [];
//   }
// }

// export async function getProductsByIds(ids: number[]) {
//   const cart = await getCart();
//   async function pushProduct(item) {
//     return await getProduct(item.productId);
//   }
//   return await Promise.all(cart.map(pushProduct))
// }

// export async function getItemQuantity(productId: number) {
//   const cart = await getCart();
//   const item = cart.find(i => i.productId === productId);
//   if (item) return item.qty
// }


//let products = [];
// for (let i = 0; i < items.length; i++) {
//   //console.log('Items[i]:', items[i], 'Items[i].id:', items[i]?.productId);
//   const product = await getProduct(items[i].productId);
//   console.log('Product :', product);
//   //console.log('Product ID', product.id);
//   //console.log('Product 2:', await getProduct(product.id));
//   if (product) {
//     products.push(product);
//   }
//   console.log('Products', products)
// }

// cartCookies.map((i) => {
//   const product = await getProduct(i.productId);
//   console.log('ACTIONS 1', i, i.productId);
//   console.log('ACTIONS 2', getProduct(i.productId))
//   products.push(getProduct(i.productId));
//   console.log('ACTIONS 3', products)
// })

// export async function addToCart(productId: number) {
//   const existing = await prisma.cartItem.findFirst({
//     where: { productId },
//   })
//   if (existing) {
//     await prisma.cartItem.update({
//       where: { id: existing.id},
//       data: { quantity: { increment: 1 }},
//     })
//   } else {
//     await prisma.cartItem.create({
//       data: { productId }
//     })
//   }
// }

// export async function deleteFromCart(productId: number) {
//   await prisma.cartItem.delete({
//     where: { id: productId },
//   })
// }
//
// export async function incrementItem(productId: number) {
//   await prisma.cartItem.update({
//     where: { id: productId},
//     data: { quantity: { increment: 1 }}
//   })
// }
//
// export async function decrementItem(productId: number) {
//   const item = await prisma.cartItem.findFirst({
//     where: { id: productId }
//   })
//   if (item.quantity === 1) {
//     await prisma.cartItem.delete({
//       where: { id: item.id}
//     })
//   } else {
//     await prisma.cartItem.update({
//       where: { id: item.id },
//       data: { quantity: { decrement: 1 }}
//     })
//   }
// }