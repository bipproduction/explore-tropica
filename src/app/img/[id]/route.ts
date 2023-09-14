import { NextRequest, NextResponse } from "next/server";
import fs from 'fs'
import sharp from 'sharp'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const def = fs.readFileSync('./public/default/default.png')
    const size = new URL(req.url).searchParams.get('size')

    const isExist = fs.existsSync(`./public/images/${params.id}`)

    if (!isExist) return new NextResponse(def, {
        headers: {
            "content-Type": "image/png"
        }
    })
    const img = fs.readFileSync(`./public/images/${params.id}`)

    if (size) return new NextResponse(await sharp(img).resize(+size).toBuffer(), {
        headers: {
            "Content-Type": "image/png"
        }
    })
    return new NextResponse(img, {
        headers: {
            "Content-type": "image/png"
        }
    })
}