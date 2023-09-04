'use server'
import prisma from "@/app_modules/bin/prisma";

export async function funContentUpdate({ data }: { data: any }) {
    const up = await prisma.content.update({
        where: {
            id: data.id
        },
        data: {
            title: data.title,
            des: data.content,
            img: data.img
        }
    })
    return true
}