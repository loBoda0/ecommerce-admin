"use client"

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { SizeColumn, columns } from "./Columns"
import { DataTable } from "@/components/ui/DataTable"
import ApiList from "@/components/ui/api-list"

interface SizesClientProps {
  data: SizeColumn[]
}

const SizesClient: React.FC<SizesClientProps> = ({
  data
}) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="mr-2 h-4 w-4"/>
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API calls for sizes"/>
      <Separator />
      <ApiList entityIdName="sizeId" entityName="sizes" />
    </>
  )
}

export default SizesClient