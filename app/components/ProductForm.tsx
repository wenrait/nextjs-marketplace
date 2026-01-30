'use client';

import {createProduct} from "@/app/admin/actions";


export default function ProductForm({ onClose }) {
  return (
    <form action={createProduct} className="absolute bottom-1 right-1 space-y-4">
      <input
        name={'title'}
        placeholder={'Title'}
        type={'text'}
        required
      />
      <input
        name={'description'}
        placeholder={'Description'}
        type={'text'}
        required
      />
      <input
        name={'price'}
        placeholder={'Price'}
        type={'text'}
        required
      />
      <input
        name={'image'}
        placeholder={'Image'}
        type={'text'}
      />
      <button type={"submit"}>Submit</button>
      <button onClick={onClose}>Close</button>
    </form>

  )
}