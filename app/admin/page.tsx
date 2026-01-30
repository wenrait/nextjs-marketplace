import { getProducts } from "@/app/admin/actions";
import { safeProduct } from "@/app/utils/utils";
import { AdminClient } from "@/app/admin/AdminClient";

export default async function AdminPage() {
  const db = await getProducts();
  const products = db.map((p) => (
    safeProduct(p)
  ));
  const tHeadData = {
    id: 'ID',
    title: 'Title',
    description: 'Description',
    price: 'Price',
    image: "Image",
    createdAt: 'Created At',
    actions: 'Actions',
  }

  return <AdminClient products={products} tHeadData={tHeadData} />
}