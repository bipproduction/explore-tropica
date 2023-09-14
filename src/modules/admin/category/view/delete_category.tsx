'use client'
import { funDeleteCategory } from "@/modules/admin/category/fun/delete_category";
import { ActionIcon, Button, Flex, Stack, Text, Title } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdArrowBack, MdArrowBackIos } from "react-icons/md";
export function ViewDeleteCategory({ id }: { id: string }) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    async function onDelete() {
        setLoading(true)
        const d = await funDeleteCategory(id)
        router.back()
    }
    return <>
        <Stack>
            <Flex gap={"md"} align={"center"}>
                <ActionIcon onClick={router.back} >
                    <MdArrowBackIos size={36} />
                </ActionIcon>
                <Title>Delete</Title>
            </Flex>
            <Stack p={"md"} bg={"gray.0"}>
                <Text>{id}</Text>
                <Flex gap={"md"} align={"center"}>
                    <Button onClick={router.back}>No</Button>
                    <Button onClick={onDelete} loading={loading}>YES</Button>
                </Flex>
            </Stack>
        </Stack>
    </>
}