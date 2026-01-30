'use client';

import {TableData} from "@/app/admin/components/TableData";
import { TableHeaderData } from "@/app/types";

type TableHeaderProps = {
  row: TableHeaderData;
}
export function TableHeader ({ row }: TableHeaderProps) {
  if (!row) return <tr><td>No row</td></tr>
  return (
    <tr>
      {Object.values(row).map((value, index) => (
          <TableData value={value?.toString()} key={`row-${index}`} />
        )
      )}
    </tr>
  )
}