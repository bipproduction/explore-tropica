'use server'

import prisma from "../../../modules/bin/prisma"

export async function funListPostByCategory({ categoryId }: { categoryId: string }) {
    return await prisma.post.findMany({
        where: {
            categoryId: categoryId,
            active: true
        }
    })
}