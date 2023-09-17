'use server'

import prisma from "../../../modules/bin/prisma"

export async function funGetHome() {
    return await prisma.home.findUnique({ where: { id: "1" } })
}