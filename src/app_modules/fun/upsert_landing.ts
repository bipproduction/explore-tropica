'use server'
import prisma from "../bin/prisma";

export async function funUpsertLanding(data: any) {
    try {
        const up = await prisma.landingPage.upsert({
            where: {
                id: "1"
            },
            create: {
                id: "1",
                ...data
            },
            update: { ...data }
        })

        return {
            success: true,
            message: "success",
            data: up
        }
    } catch (error: any) {
        return {
            success: false,
            message: "error",
            data: error
        }
    }

}