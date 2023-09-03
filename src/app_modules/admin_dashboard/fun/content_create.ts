'use server'
import prisma from "@/app_modules/bin/prisma";

export async function funContentCreate(params: any) {
    try {
        const data = await prisma.content.create({
            data: {
                title: params.title,
                des: params.content,
                img: params.img ?? null
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
            message: JSON.stringify(error ?? ""),
            data: null
        }
    }


}