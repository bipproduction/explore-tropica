'use server'

import prisma from "@/app_modules/bin/prisma";
import { sealData } from "iron-session";
import _ from "lodash";
import { cookies } from 'next/headers'

export async function funLogin(data: any) {
    if (!data || !data.email || !data.password || _.isEmpty(data.email) || _.isEmpty(data.password)) return {
        success: false,
        message: "uncomplete form"
    }

    const usr = await prisma.user.findUnique({ where: { email: data.email } })
    if (!usr) return {
        success: false,
        message: "register please"
    }

    const tkn = await sealData(usr.id, { password: process.env.PWD as any })
    cookies().set({
        name: "_xt",
        value: tkn
    })

    return {
        success: true,
        message: "success"
    }

}