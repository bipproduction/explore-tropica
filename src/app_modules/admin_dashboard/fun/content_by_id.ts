'use server'
import prisma from "@/app_modules/bin/prisma";

export async function funContentById({ id }: { id: string }) {
    const data = await prisma.content.findUnique({ where: { id: id } })
    return data
}