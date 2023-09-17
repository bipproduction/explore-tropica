'use server'
import prisma from "../../../../../modules/bin/prisma"

export async function funDeleteGalery(id: string) {
    console.log("delete image")
    try {
        const d = await prisma.imageGalery.update({
            where: {
                id: id
            },
            data: {
                active: false
            }
        })

        return {
            success: true,
            message: "success",
            data: d
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "error",
            data: JSON.stringify(error)
        }
    }

}   