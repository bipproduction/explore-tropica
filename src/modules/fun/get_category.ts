import prisma from "../../../modules/bin/prisma";

export async function funGetCategoryById({ id }: { id: string }) {
    return await prisma.category.findMany({
        where: {
            id
        }
    })
}