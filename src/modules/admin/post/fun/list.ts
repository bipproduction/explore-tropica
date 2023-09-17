'use server'

import prisma from "../../../../../modules/bin/prisma"

export async function funListPost() {
    const d = await prisma.category.findMany({
        where: {
            active: true
        },
        select: {
            id: true,
            title: true,
            img: true,
            Post: {
                where: {
                    active: true
                }
            }
        }
    })
    return d
}