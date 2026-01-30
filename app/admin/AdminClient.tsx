'use client';

import { useState } from "react";
import { Product, TableHeaderData } from "@/app/types";
import { TableHeader } from "@/app/admin/components/TableHeader";
import { TableRow } from "@/app/admin/components/TableRow";
import ProductForm from "@/app/components/ProductForm";

type Props = {
  products: Product[];
  tHeadData: TableHeaderData;
}

export const AdminClient = ({ products, tHeadData }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={'p-4'}>
      <button
        className={'absolute top-0 right-0'}
        onClick={() => setIsOpen(true)}
      >
        Add
      </button>
      {isOpen && (
        <ProductForm onClose={() => setIsOpen(false)}/>
      )}
      <div>
        <div className={'h-4 w-full bg-[#282828] rounded-t-lg'}></div>
        <table className={'bg-[#484848] rounded-lg shadow-lg p-4'}>
          <thead className={'text-center bg-[#282828] font-semibold'}>
          <TableHeader row={tHeadData} />
          </thead>
          <tbody>
          { products ? (
            products.map((p) => (
              <TableRow row={p} key={p.id}/>
            ))) : (
            <p>DB is empty</p>
          )
          }
          </tbody>
        </table>
      </div>
    </main>
  )
}