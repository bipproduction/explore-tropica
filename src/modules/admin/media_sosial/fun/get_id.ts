import prisma from "../../../../../modules/bin/prisma";

export async function funGetIdMediaSosial({ id }: { id: string }) {
    return await prisma.mediaSosial.findUnique({
        where: {
            id
        }
    })

}