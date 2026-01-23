'use client'

import {TableData} from "@/app/admin/components/TableData";


type TableRowData = {
  id: number | string,
  title: string,
  description: string,
  price: number | string,
  image?: string,
  createdAt: Date | string;
  actions?: string,
}

type TableRowProps = {
  row: TableRowData;
  className?: string;
}
export function TableRow ({ row, className }: TableRowProps) {
  if (!row) return <tr><td>No row</td></tr>
  return (
    <tr className={className ?? ''}>
      {Object.values(row).map((value, index) => (
        <TableData value={value?.toString()} key={`row-${index}`} />
        )
      )}
    </tr>
  )
}