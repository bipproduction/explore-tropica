'use client'

import { route } from "@/modules/route"
import BackButton from "@/modules/widget/back_button"
import { Button, Flex, Group, Stack, Title } from "@mantine/core"
import { useShallowEffect } from "@mantine/hooks"
import { useRouter } from "next/navigation"
import { funListPage } from "./fun/list_page"
import { useState } from "react"

export default function AdminPage() {
    const router = useRouter()
    const [listPage, setListPage] = useState<any[] | null>(null)

    useShallowEffect(() => {
        onLoad()
    }, [])

    async function onLoad() {
        const d = await funListPage()
        setListPage(d)
    }
    return <>
        <Stack>
            <Group position="right">
                <Button onClick={() => router.push(route.admin_page_create)}>Create Page</Button>
            </Group>
            <Group>
                <Stack>
                    {JSON.stringify(listPage)}
                </Stack>
            </Group>
        </Stack>
    </>
}