import Link from "next/link";
import { getProducts } from "@/app/admin/actions";
import { ProductCard } from "@/app/components/ProductCard";
import { safeProduct } from "@/app/utils/utils";

export default async function Home() {
  const db = await getProducts();
  const products = db.map((p) => (
    safeProduct(p)
  ));

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className={'flex w-full max-w-full p-[16px]'}>
        <div className={'flex w-full'}>
          <h1 className={'font-bold text-2xl text-left'}>Products</h1>
        </div>
        <ul className={'flex flex-wrap gap-[8px] justify-center p-[8px]'}>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
