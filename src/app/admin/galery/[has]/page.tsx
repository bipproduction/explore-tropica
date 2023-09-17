import ViewCreateGalery from "@/modules/admin/galery/view/create_galery"
import ViewDeleteGalery from "@/modules/admin/galery/view/delete_galery"

export default function Page({ params, searchParams }: { params: { has: string }, searchParams: { id: string } }) {

    const ls: any = {
        "create": <ViewCreateGalery />,
        "delete": <ViewDeleteGalery id={searchParams.id} />,
    }


    return <>
        {ls[params.has]}
    </>
}