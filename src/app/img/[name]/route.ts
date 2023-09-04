import { NextResponse } from "next/server";
import fs from 'fs'
import sharp from 'sharp'
import prisma from "@/app_modules/bin/prisma";

export async function GET(req: Request, { params }: any) {

    try {
        const ada = await prisma.imageGalery.findUnique({
            where: {
                id: (params.name as string).split('.')[0],
            }
        })

        if (!ada || !ada.active) {
            const data = fs.readFileSync(`./public/default/default.png`);
            return new NextResponse(data, {
                status: 200,
                headers: {
                    "Content-Type": "image/jpeg",
                },
            });
        }

        const data = fs.readFileSync(`./public/images/${params.name}`);
        return new NextResponse(data, {
            status: 200,
            headers: {
                "Content-Type": "image/jpeg",
            },
        });
    } catch (error: any) {
        console.error('Error serving image:', error);

        return NextResponse.json({ error: error.message }, { status: 500, });
    }

}