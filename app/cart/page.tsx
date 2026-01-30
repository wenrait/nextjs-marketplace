import { getCart } from "@/app/cart/actions";
import { getProductsByIds } from "@/app/admin/actions";
import { QuantityButtons } from "@/app/components/QuantityButtons";
import { DeleteFromCartButton } from "@/app/components/DeleteFromCartButton";
import { CartItem } from "@/app/types";
import { safeProduct } from "@/app/utils/utils";

export default async function CartPage() {
  const cookies = await getCart();
  const db = await getProductsByIds(cookies);
  const products = db.map((p) => (
    safeProduct(p)
  ));

  const cart: CartItem[] = cookies.map((i) => {
    const product = products.find((p) => p.id === i.productId);
    if (!product) {
      throw new Error(`Product ${i.productId} not found`)
    }
    return {
      product,
      qty: i.qty,
    }
  })

  const total = cart.reduce((sum, item) =>{
      return sum + item.product.price * item.qty
    }, 0);

  return (
    <main className={'flex'}>
      <h1>Cart</h1>
      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
        {cart.map((i) => {
          return (
            <li key={ i.product.id } style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              {i.product.title} — {i.qty} шт —{' '}
              {i.product.price * i.qty} ₽
              <QuantityButtons productId={i.product.id} qty={i.qty} />
              <DeleteFromCartButton productId={i.product.id} />
            </li>
          )
        })}
      </ul>
      <p>Total: {total} ₽</p>
    </main>
  )
}