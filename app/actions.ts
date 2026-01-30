'use server'
import { CartSchema } from "@/app/types";
export async function readCartSafely(raw?: string) {
  if (!raw) return [];

  const parsed =
    await CartSchema.safeParse(JSON.parse(raw));
  return parsed.success ? parsed.data : [];
}