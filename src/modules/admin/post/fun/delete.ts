'use server'
import prisma from "../../../../../modules/bin/prisma";

export async function funDeletePost({ id }: { id: string }) {
    const data = await prisma.post.update({
        where: {
            id
        },
        data: {
            active: false
        }
    })

    return data
}