import PageLogin from "@/modules/front/login";
import prisma from "../../../modules/bin/prisma";
import { cookies } from 'next/headers'
import { sealData, unsealData } from "iron-session";

export default function Page() {
    async function login({ email, password }: { email: string, password: string }) {
        'use server'

        console.log(email)
        const u = await prisma.user.findUnique({
            where: {
                email
            }
        })


        if (!u) return false

        if (u.password != password) return false

        const _t = await sealData(u.id, { password: process.env.PWD as string })
        cookies().set({
            name: "_t",
            value: _t
        })

        return true
    }
    return <>
        <PageLogin login={login} />
    </>
}