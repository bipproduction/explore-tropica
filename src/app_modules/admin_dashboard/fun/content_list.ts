'use server'
import prisma from "@/app_modules/bin/prisma";

export async function funContentList() {
    const data = await prisma.content.findMany({
        where: {
            active: true
        }
    })

    return data
}