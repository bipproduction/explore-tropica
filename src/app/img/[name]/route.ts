import { NextResponse } from "next/server";
import fs from 'fs'
import sharp from 'sharp'

export function GET(req: Request, { params }: any) {
    try {
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