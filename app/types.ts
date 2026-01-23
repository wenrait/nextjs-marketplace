import {z} from "zod";

export type CartItem = {
  productId: number;
  qty: number;
}

export type Product = {
  id: number;
  title: string;
  description?: string;
  price: number;
  image?: string;
  createdAt: Date;
}

export type CartWithProducts = Product & Omit<CartItem, 'productId'>;

export const CartItemSchema = z.object({
  productId: z.number().int().positive(),
  qty: z.number().int().positive(),
})

export const CartSchema = z.array(CartItemSchema);

export const ProductSchema = z.object(({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  price: z.string(),
}))
