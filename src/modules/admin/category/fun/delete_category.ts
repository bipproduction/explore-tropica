'use server'
import prisma from "../../../../../modules/bin/prisma";

export async function funDeleteCategory(id: string) {
    try {
        const d = await prisma.category.update({
            where: {
                id: id
            },
            data: {
                active: false
            }
        })

        return {
            success: true,
            message: "succes",
            data: d
        }
    } catch (error) {
        console.log(error)
        return {
            succes: false,
            message: "error",
            data: JSON.stringify(error)
        }
    }

}