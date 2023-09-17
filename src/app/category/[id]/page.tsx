import ViewCategory from "@/modules/front/category"
import { funGetCategoryById } from "@/modules/fun/get_category"
import { funListPostByCategory } from "@/modules/fun/list_post_by_category"

export default async function Page({ params, searchParams }: { params: { id: string }, searchParams: { id: string } }) {
    const data = await funListPostByCategory({ categoryId: params.id })
    return <>
        <ViewCategory data={data} />
    </>
}