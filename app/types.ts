import {z} from "zod";

// Cookies
export type CartCookieItem = {
  productId: number;
  qty: number;
}
// UI Mappings
export type Product =  {
  id: number;
  title: string;
  description?: string;
  price: number;
  image?: string;
  createdAt: Date;
}
export type CartItem = {
  product: Product;
  qty: number;
}
export type TableHeaderData = {
  id: string,
  title: string,
  description: string,
  price: string,
  image: string,
  createdAt: string;
  actions: string,
}
// Schemas parse
export const ProductSchema = z.object(({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  price: z.string(),
}))
export const CartItemSchema = z.object({
  productId: z.number().int().positive(),
  qty: z.number().int().positive(),
})
export const CartSchema = z.array(CartItemSchema);



