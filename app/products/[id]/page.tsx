import {getCartItem} from "@/app/cart/actions";
import {getProduct} from "@/app/admin/actions";
import {AddToCartButton} from "@/app/components/AddToCartButton";

type Props = {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props){
  const { id } = await params;
  const productId = Number(id)

  if (!Number.isInteger(productId)) return <div>Некорректный id</div>

  const product = await getProduct(productId);
  const item = await getCartItem(productId);

  if (!product) return <div>404 Product not found</div>

  const qty = item? item.qty : 0;
  return (
    <main style={{ padding: 24 }}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <AddToCartButton productId={product.id} qty={qty} />
    </main>
  )
}