import {PrismaPg} from "@prisma/adapter-pg";
import {PrismaClient, Prisma} from "@/app/generated/prisma/client";


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const productData: Prisma.ProductCreateInput[] = [];

export async function main() {
  for (const p of productData) {
    await prisma.product.create({data: p})
  }
}