import prisma from "../../../../modules/bin/prisma"
import ComPackageDetail from "../_component/package_detail"

export default async function Page({ params }: { params: { id: string } }) {
    const data = await prisma.content.findUnique({ where: { id: params.id } })
    return <>
        <ComPackageDetail data={data} />
    </>
}