'use client'
import { Button, Group, Stack, Title } from "@mantine/core";
import { funDeletePost } from "../fun/delete";
import { useRouter } from "next/navigation";

export default function ViewDeletePost({ id }: { id: string }) {
    const router = useRouter()
    async function onDelete() {
        const del = await funDeletePost({ id })
        router.back()
    }
    return <>
        <Group>
            <Stack>
                <Title>{id}</Title>
                <Button onClick={onDelete}>DELETE</Button>
            </Stack>
        </Group>

    </>
}