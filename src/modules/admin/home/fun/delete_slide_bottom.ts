'use server'

import prisma from "../../../../../modules/bin/prisma"

export async function funDeleteSlideBottom({ id }: { id: string }) {
    return await prisma.slide.update({
        where: {
            id
        },
        data: {
            active: false
        }
    })
}