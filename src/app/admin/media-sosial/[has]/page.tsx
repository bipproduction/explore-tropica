import ViewCreateGalery from "@/modules/admin/galery/view/create_galery"
import ViewDeleteGalery from "@/modules/admin/galery/view/delete_galery"
import ViewCreateMediaSosial from "@/modules/admin/media_sosial/view/create"

export default function Page({ params, searchParams }: { params: { has: string }, searchParams: { id: string } }) {

    const ls: any = {
        "create": <ViewCreateMediaSosial />,
        "update": <ViewCreateGalery />,
        "delete": <ViewDeleteGalery id={searchParams.id} />,
    }

    return <>
        {ls[params.has]}
    </>
}