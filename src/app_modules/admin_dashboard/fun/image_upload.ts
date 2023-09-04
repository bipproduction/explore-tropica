'use server'
import prisma from '@/app_modules/bin/prisma'
import fs from 'fs'
import sharp from 'sharp'
import { v4 } from 'uuid'


export async function funImageUpload({ formData }: { formData: FormData }) {
    try {
        const file: any = formData.get('file')
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop();
        const buffer = Buffer.from(await file.arrayBuffer())

        const dataImg = await prisma.imageGalery.create({
            data: {
                name: fileName,
                ext: fileExtension
            }
        })

        const img = await sharp(buffer).resize(200).toBuffer()

        fs.writeFileSync(`./public/images/${dataImg.id}.${fileExtension}`, img)
        return {
            success: true,
            message: "success",
            data: {
                id: dataImg.id,
                name: dataImg.name,
                ext: dataImg.ext
            }
        }
    } catch (error) {
        return null
    }

}
