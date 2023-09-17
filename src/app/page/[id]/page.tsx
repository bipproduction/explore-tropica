import { ViewCreateCategory } from "@/modules/admin/category/view/create_category"
import { ViewDeleteCategory } from "@/modules/admin/category/view/delete_category"
import ViewUpdateCategory from "@/modules/admin/category/view/update_category"
import ViewFrontPage from "@/modules/front/page/page"
import { funGetPageById } from "@/modules/fun/get_page_by_id"

export default async function Page({ params, searchParams }: { params: { id: string }, searchParams: { id: string } }) {
    const p = await funGetPageById({id: params.id})
    return <>

        <ViewFrontPage data={p} />
    </>
}