'use client'
import { route } from "@/modules/route";
import { Button, Group } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function AdminGalery() {
    const router = useRouter()
    return <>
        <Group position="right">
            <Button onClick={() => router.push(route.admin_galery_create)}>Add Image</Button>
        </Group>
    </>
}