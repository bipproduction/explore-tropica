import { redirect } from "next/navigation"
import prisma from "../../../modules/bin/prisma"

export default async function Page({ searchParams }: { searchParams: { email: string, password: string, name: string } }) {
    const email = searchParams.email
    const password = searchParams.password
    const name = searchParams.name

    if (!email || !password || !name) return <>reg not complete</>

    const cek = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (cek) return <>sudah ada</>

    const r = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    })

    if (r) return redirect('/login')

    return <>

    </>
}