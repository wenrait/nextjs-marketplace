'use client';

import {TableData} from "@/app/admin/components/TableData";
import { Product } from "@/app/types";
import { useTransition } from "react";
import { deleteProduct } from "@/app/admin/actions";
import { useRouter } from "next/navigation";


type TableRowData = {
  id: number | string,
  title: string,
  description: string,
  price: number,
  image?: string,
  createdAt: Date | string;
  actions?: string,
}

type TableRowProps = {
  row: Product;
}
export function TableRow ({ row }: TableRowProps) {
  if (!row) return <tr><td>No row</td></tr>

  const [isPending, startTransition] = useTransition();
  const router = useRouter()
  const id = Number(row.id)
  const handleDelete = async() => {
    await deleteProduct(row);
    startTransition(() => router.refresh())
  }
  return (
    <tr>
      {Object.values(row).map((value, index) => (
        <TableData value={value?.toString()} key={`row-${index}`} />
        )
      )}
      <td><button onClick={handleDelete}>del</button></td>
    </tr>
  )
}