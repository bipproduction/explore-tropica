'use server'
import { Category } from "@prisma/client";
import prisma from "../../../../../modules/bin/prisma";

export async function funCreateCategory(data: Category) {
    try {
        const c = await prisma.category.create({
            data: {
                ...data
            }
        })
        return {
            success: true,
            message: "success",
            data: c
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "error",
            data: error
        }
    }
}