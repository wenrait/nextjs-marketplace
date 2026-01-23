import {revalidatePath} from "next/cache";
import { CartItem, ProductSchema } from '@/app/types';
import prisma from "@/lib/prisma";
import { Prisma } from '@/app/generated/prisma/client';

export async function createProduct(formData: FormData) {
  const parsed = ProductSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    price: formData.get('price'),
    image: formData.get('image'),
  })

  if (!parsed.success) throw new Error('Invalid form data')
  await prisma.product.create({
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      price: Number(parsed.data.price),
      image: parsed.data.image,
    }
  })
  revalidatePath('/')
}
export function getProducts() {
  return prisma.product.findMany({
    orderBy: {
      createdAt: Prisma.SortOrder.asc,
    }
  });
}
export function getProduct(productId: number) {
  return prisma.product.findUnique({
    where: {id: productId}
  });
}
export function getProductsByIds(items: CartItem[]) {
  return prisma.product.findMany({
    where: {
      id: {
        in: items.map(i => i.productId)}
    }
  })
}