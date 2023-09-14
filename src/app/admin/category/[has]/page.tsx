import { ViewCreateCategory } from "@/modules/admin/category/view/create_category"
import { ViewDeleteCategory } from "@/modules/admin/category/view/delete_category"
import ViewUpdateCategory from "@/modules/admin/category/view/update_category"

export default function Page({ params, searchParams }: { params: { has: string }, searchParams: { id: string } }) {

    const ls: any = {
        "create": <ViewCreateCategory />,
        "update": <ViewUpdateCategory id={searchParams.id} />,
        "delete": <ViewDeleteCategory id={searchParams.id} />
    }
    return <>
        {ls[params.has]}
    </>
}