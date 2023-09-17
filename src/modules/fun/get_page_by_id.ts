import prisma from "../../../modules/bin/prisma";

export async function funGetPageById({ id }: { id: string }) {
    return await prisma.page.findUnique({
        where: {
            id
        }
    })
}