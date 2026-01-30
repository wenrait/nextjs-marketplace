'use server';
import { revalidatePath } from "next/cache";
import { CartCookieItem, Product, ProductSchema } from '@/app/types';
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
export async function getProducts() {
  return prisma.product.findMany({
    orderBy: {
      createdAt: Prisma.SortOrder.asc,
    }
  });
}
export async function getProduct(productId: number) {
  return prisma.product.findUnique({
    where: {id: productId}
  });
}
export async function getProductsByIds(items: CartCookieItem[]) {
  return prisma.product.findMany({
    where: {
      id: {
        in: items.map(i => i.productId)}
    }
  })
}

export async function deleteProduct(p: Product) {
  await prisma.product.delete({
    where: {id: p.id}
  });
  revalidatePath('/');
}