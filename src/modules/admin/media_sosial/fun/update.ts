import prisma from "../../../../../modules/bin/prisma";

export async function funUpdateMediaSosial({ data }: { data: any }) {
    return await prisma.mediaSosial.update({
        where: {
            id: data.id
        },
        data: {
            ...data
        }
    })
}