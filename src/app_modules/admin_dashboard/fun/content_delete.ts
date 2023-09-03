'use server'

import prisma from "@/app_modules/bin/prisma"

export default async function funContentDelete(id: string) {
    try {
        await prisma.content.update({
            where: {
                id: id
            },
            data: {
                active: false
            }
        })

        return {
            success: true,
            message: "success"
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "" + error
        }
    }
}