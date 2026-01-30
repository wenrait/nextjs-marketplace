import {getCartItem} from "@/app/cart/actions";
import { getProduct } from "@/app/admin/actions";
import {AddToCartButton} from "@/app/components/AddToCartButton";
import { safeProduct } from "@/app/utils/utils";

type Props = {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props){
  const { id } = await params;
  const productId = Number(id)

  if (!Number.isInteger(productId)) return <div>Некорректный id</div>

  const db = await getProduct(productId);
  const product = safeProduct(db)
  const item = await getCartItem(productId);

  if (!product) return <div>404 Product not found</div>

  const qty = item? item.qty : 0;
  return (
    <main style={{ padding: 24 }}>
      <h1>{product.title}</h1>
      <p>{product?.description}</p>
      <p>{product.price}</p>
      <AddToCartButton productId={product.id} qty={qty} />
    </main>
  )
}