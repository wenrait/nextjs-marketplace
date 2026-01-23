'use client';

type TableDataProps = {
  name?: string;
  value?: number | string;
}
export function TableData({ name, value }: TableDataProps) {
  return (
    <td
      data-name={name ?? ''}
      className={'p-2  border text-sm'}
    >{value ?? ''}</td>
  )
}