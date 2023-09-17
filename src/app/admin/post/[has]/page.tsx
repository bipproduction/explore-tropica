import ViewCreatePost from "@/modules/admin/post/view/create"
import ViewDeletePost from "@/modules/admin/post/view/delete"
import ViewUpdatePost from "@/modules/admin/post/view/update"

export default function Page({ params, searchParams }: { params: { has: string }, searchParams: { id: string } }) {

    const ls: any = {
        "create": <ViewCreatePost />,
        "delete": <ViewDeletePost id={searchParams.id} />,
        "update": <ViewUpdatePost id={searchParams.id} />
    }

    return <>
        {ls[params.has]}
    </>
}