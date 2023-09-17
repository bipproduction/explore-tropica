'use server'

import prisma from "../../../modules/bin/prisma"

export async function funListSlidebottom(){
    return await prisma.slide.findMany({
        where: {
            active: true
        }
    })
}