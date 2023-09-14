'use server'
import prisma from "../../../../../modules/bin/prisma";

export async function funListPage() {
    const d = await prisma.page.findMany({
        where: {
            active: true
        }
    })

    return d
}