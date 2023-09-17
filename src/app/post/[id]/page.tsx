import { ViewCreateCategory } from "@/modules/admin/category/view/create_category"
import { ViewDeleteCategory } from "@/modules/admin/category/view/delete_category"
import ViewUpdateCategory from "@/modules/admin/category/view/update_category"
import ViewFrontPage from "@/modules/front/page/page"
import ViewFrontPost from "@/modules/front/post/post"
import prisma from "../../../../modules/bin/prisma"

export default async function Page({ params, searchParams }: { params: { id: string }, searchParams: { id: string } }) {
    const data = await prisma.post.findUnique({ where: { id: params.id } })
    return <>
        
        <ViewFrontPost data={data} />
    </>
}