import { Product } from "@/app/types";

export function safeProduct(p): Product {
  return {
    id: p.id,
    title: p.title,
    description: p.description,
    price: p.price,
    image: p.image,
    createdAt: p.createdAt,
  }
}