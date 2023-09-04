'use server'

import prisma from "@/app_modules/bin/prisma"

export async function funGetListImageGalery() {
    const data = await prisma.imageGalery.findMany({
        where: {
            active: true
        },
        select: {
            id: true,
            name: true,
            ext: true
        }
    })

    return data
}