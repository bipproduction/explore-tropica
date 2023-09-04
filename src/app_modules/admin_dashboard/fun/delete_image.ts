'use server'

import prisma from "@/app_modules/bin/prisma"

export async function funDeleteImage({ id }: { id: string }) {
    const del = await prisma.imageGalery.update({
        where: {
            id: id
        },
        data: {
            active: false
        },
        select: {
            id: true
        }
    })

    return del.id
}