'use server'
import {cookies} from 'next/headers'
import { redirect } from 'next/navigation'
export async function funLogout(){
    cookies().delete({
        name: "_t",
        maxAge: 0,
        path: '/'
    })

    return true
}