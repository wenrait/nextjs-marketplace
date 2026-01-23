'use client';

import {createProduct} from "../../../marketplace.old/app/admin/actions";

export default function ProductForm() {
  return (
    <form action={createProduct} className="space-y-4">
      <input
        name={'title'}
        placeholder={'Title'}
        required
      />
      <input
        name={'description'}
        placeholder={'Description'}
        required
      />
      <input
        name={'price'}
        placeholder={'Price'}
        required
      />
      <input
        name={'image'}
        placeholder={'Image'}
      />
      <button type={"submit"}>Submit</button>
    </form>

  )
}