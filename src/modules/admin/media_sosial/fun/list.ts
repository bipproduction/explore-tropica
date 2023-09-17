'use server'
import prisma from "../../../../../modules/bin/prisma";

export async function funListMediaSosial() {
    return await prisma.mediaSosial.findMany({
        where: {
            active: true
        }
    })

}