'use server'
import fs from 'fs'
import prisma from '../../../../../modules/bin/prisma'
import path from 'path'
export async function funCreateGalery(formData: FormData) {
    try {

        const fd: any = formData.get('file')
        const file = Buffer.from(await fd.arrayBuffer())
        const ext = path.extname(fd.name).substring(1)

        const c = await prisma.imageGalery.create({
            data: {
                name: fd.name,
                ext: ext
            }
        })

        fs.writeFileSync(`./public/images/${c.id}.${ext}`, file)

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
            data: JSON.stringify(error)
        }
    }

}