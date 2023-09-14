"use server"

import prisma from "../../../../../modules/bin/prisma"

export async function funUpdateCategory(data: any) {
    try {
        const u = await prisma.category.update({
            where: {
                id: data.id
            },
            data: {
                ...data
            }
        })

        return {
            success: true,
            message: "success",
            data: u
        }
    } catch (error) {
        return {
            success: false,
            message: "error",
            data: JSON.stringify(error)
        }
    }
}