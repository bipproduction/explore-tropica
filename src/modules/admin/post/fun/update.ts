'use server'
import prisma from "../../../../../modules/bin/prisma";

export async function funUpdatePost({ data }: { data: any }) {
    const u = await prisma.post.update({
        where: {
            id: data.id
        },
        data: {
            ...data
        }
    })

    return u
}