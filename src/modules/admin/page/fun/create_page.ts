'use server'

import prisma from "../../../../../modules/bin/prisma"

export async function funCreatePage(data: any) {
    try {
        const c = await prisma.page.create({
            data: {
                ...data
            }
        })

        return {
            success: true,
            message: "success",
            data
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