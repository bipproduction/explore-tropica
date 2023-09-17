'use server'

import prisma from "../../../../../modules/bin/prisma"

export async function funCreatePost(data: any) {
    try {
        const d = await prisma.post.create({
            data: {
                ...data
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