'use server'

import prisma from "../bin/prisma"

export async function funGetLanding() {
    const data = await prisma.landingPage.findUnique({ where: { id: "1" } })
    return data;
}