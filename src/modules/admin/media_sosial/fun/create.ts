'use server'
import prisma from "../../../../../modules/bin/prisma";

export async function funCreateMediaSosial({ data }: { data: any }) {
    return await prisma.mediaSosial.create({
        data: {
            ...data
        }
    })
}