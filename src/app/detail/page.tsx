import prisma from "@/app_modules/bin/prisma"
import ViewDetailContent from "@/app_modules/landing/view/detail"
import { redirect } from "next/navigation"

export default async function Page(param: { searchParams: { id: string } }) {
    if (!param.searchParams.id) return redirect('/')
    const data = await prisma.content.findUnique({ where: { id: param.searchParams.id } })
    return <>
        <ViewDetailContent data={data} />
    </>
}