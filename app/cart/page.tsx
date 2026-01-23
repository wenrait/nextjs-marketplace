import {getCart} from "@/app/cart/actions";
import {Product} from "@/app/types";
import {getProductsByIds} from "@/app/admin/actions";
import {getTotal} from "@/app/actions";
import {QuantityButtons} from "@/app/components/QuantityButtons";
import {DeleteFromCartButton} from "@/app/components/DeleteFromCartButton";

export default async function CartPage() {
  const items = await getCart();
  const products: Product[] = await getProductsByIds(items);

  const cartWithProducts = products.map((product) => {
    const item = items.find((i) => i.productId === product.id);
    return {
      ...product,
      qty: item?.qty ?? 1
    }
  });

  const total = await getTotal(cartWithProducts);
  return (
    <main className={'flex'}>
      <h1>Cart</h1>
      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
        {cartWithProducts.map((item) => {
          return (
            <li key={ item.id } style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              {item.title} — {item.qty} шт —{' '}
              {item.price * item.qty} ₽
              <QuantityButtons id={item.id} qty={item.qty} />
              <DeleteFromCartButton productId={item.id} />
            </li>
          )
        })}
      </ul>
      <p>Total: {total}</p>
    </main>
  )
}