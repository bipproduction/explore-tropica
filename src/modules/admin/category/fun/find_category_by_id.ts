'use server'
import prisma from "../../../../../modules/bin/prisma";

export async function funFindCategoryById(id: string) {
    const d = await prisma.category.findUnique({
        where: {
            id: id
        }
    })

    return d
}