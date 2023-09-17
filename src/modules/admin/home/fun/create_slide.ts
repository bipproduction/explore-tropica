'use server'
import prisma from "../../../../../modules/bin/prisma";

export async function funCreateSlide({ data }: { data: any }) {
    return await prisma.slide.create({
        data: {
            ...data
        }
    })
}