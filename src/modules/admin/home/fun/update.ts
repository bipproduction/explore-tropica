'use server'

import prisma from "../../../../../modules/bin/prisma"

export async function funUpdateHome({ data }: { data: any }) {
    return await prisma.home.upsert({
        where: {
            id: "1"
        },
        update: {
            ...data
        },
        create: {
            id: "1",
            ...data
        },
        select: {
            img: true,
            title: true
        }
    })
}