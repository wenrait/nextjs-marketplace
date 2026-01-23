'use client'
import {Product} from "@/app/types";

type Props = {
  product: Product;
}
export const ProductCard = ({product}: Props) => {

  return (
    <div className={'p-2 flex flex-col gap-[8px] bg-[#282828] rounded-lg shadow-lg'}>
      <div className={'size-[150px] bg-white rounded-sm'}>
        {product.image ? <img src={product.image} alt={product.title} className={'rounded-sm'}/> : ''}
      </div>
      <div>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  )
}