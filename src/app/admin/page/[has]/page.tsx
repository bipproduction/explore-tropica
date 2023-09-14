import ViewCreatePaga from "@/modules/admin/page/view/create_page"

export default function Page({ params, searchParams }: { params: { has: string }, searchParams: { id: string } }) {

    const ls: any = {
        "create": <ViewCreatePaga />,
        // "update": <ViewUpdateCategory id={searchParams.id} />,
        // "delete": <ViewDeleteCategory id={searchParams.id} />
    }
    return <>
        {ls[params.has]}
    </>
}