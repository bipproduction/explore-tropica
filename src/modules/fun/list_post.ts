'use server'

import prisma from "../../../modules/bin/prisma"

export async function funListPost() {
    return await prisma.post.findMany({
        where: {
            active: true
        }
    })
}