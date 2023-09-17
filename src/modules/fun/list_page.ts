'use server'

import prisma from "../../../modules/bin/prisma"

export async function funListPage() {
    return await prisma.page.findMany({
        where: {
            active: true
        }
    })
}