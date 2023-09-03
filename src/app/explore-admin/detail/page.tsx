import ViewDetail from "@/app_modules/admin_dashboard/view/detail";
import prisma from "@/app_modules/bin/prisma";


export default async function Page(params: { searchParams: { id: string } }) {
    const data = await prisma.content.findUnique({ where: { id: params.searchParams.id } })
    return <>
        <ViewDetail data={data} />
    </>
}