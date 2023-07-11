"use client"

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { ProductColumn, columns } from "./Columns"
import { DataTable } from "@/components/ui/DataTable"
import ApiList from "@/components/ui/api-list"

interface BillboardClientProps {
  data: ProductColumn[]
}

const BillboardClient: React.FC<BillboardClientProps> = ({
  data
}) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage products in your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4"/>
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API calls for products"/>
      <Separator />
      <ApiList entityIdName="productId" entityName="products" />
    </>
  )
}

export default BillboardClient