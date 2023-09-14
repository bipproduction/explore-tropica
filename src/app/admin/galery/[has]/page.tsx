import ViewCreateGalery from "@/modules/admin/galery/view/create_galery"

export default function Page({ params, searchParams }: { params: { has: string }, searchParams: { id: string } }) {

    const ls: any = {
        "create": <ViewCreateGalery />,

    }
    return <>
        {ls[params.has]}
    </>
}