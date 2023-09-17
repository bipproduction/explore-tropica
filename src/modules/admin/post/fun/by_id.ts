'use server'

import prisma from "../../../../../modules/bin/prisma"

export async function funGetPostById({ id }: { id: string }) {
    const data = await prisma.post.findUnique({
        where: {
            id,
        }
    })

    return data
}