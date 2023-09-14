'use server'
import prisma from "../../../modules/bin/prisma";

export async function funlistImage() {
    const data = await prisma.imageGalery.findMany()
    return data;
}