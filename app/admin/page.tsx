import {getProducts} from "@/app/admin/actions";
import {TableRow} from "@/app/admin/components/TableRow";

export default async function AdminPage() {
  const products = await getProducts();
  const tHeadData = {
    id: 'ID',
    title: 'Title',
    description: 'Description',
    price: 'Price',
    image: "Image",
    createdAt: 'Created At',
    actions: 'Actions',
  }

  return (
    <main className={'p-[16px]'}>
      <div className={'py-[16px] rounded-lg shadow-lg mt-[16px]'}>
        <table>
          <thead className={'text-center bg-[#282828]'}>
          <TableRow row={tHeadData} />
          </thead>
          <tbody className={'bg-[#484848]'}>
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