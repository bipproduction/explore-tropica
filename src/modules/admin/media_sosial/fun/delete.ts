import prisma from "../../../../../modules/bin/prisma"

export async function funDeleteMediaSosial({ id }: { id: string }) {
    return await prisma.mediaSosial.update({
        where: {
            id
        },
        data: {
            active: false
        }
    })

}