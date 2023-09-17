'use client'
import { Button, Group, Stack, Title } from "@mantine/core";
import { funDeleteGalery } from "../fun/delete_image";
import { useRouter } from "next/navigation";

export default function ViewDeleteGalery({ id }: { id: string }) {
    const router = useRouter()
    async function onDelete() {
        const d = await funDeleteGalery(id)
        if (d.success) return router.back()
    }
    return <>

        <Stack>
            <Title>{id}</Title>
            <Group position="center">
                <Button onClick={onDelete}>Delete</Button>
            </Group>
        </Stack>
    </>
}