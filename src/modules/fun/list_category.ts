'use server'

import prisma from "../../../modules/bin/prisma"

export async function funListCategory() {
    const data = await prisma.category.findMany({
        where: {
            active: true
        }
    })

    return data
}