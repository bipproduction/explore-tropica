'use server'
import prisma from "../../../../../modules/bin/prisma"

export async function funListGalery() {
    const d = await prisma.imageGalery.findMany({
       where: {
        active: true
       }
    })

    return d
}