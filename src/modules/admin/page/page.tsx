'use client'

import { routeAdmin } from "@/modules/route"
import BackButton from "@/modules/widget/back_button"
import { ActionIcon, Box, Button, Flex, Group, Menu, Stack, Text, Title } from "@mantine/core"
import { useShallowEffect } from "@mantine/hooks"
import { useRouter } from "next/navigation"
import { funListPage } from "./fun/list_page"
import { useState } from "react"
import { MdMoreVert } from "react-icons/md"

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
                <Button onClick={() => router.push(routeAdmin.admin_page_create)}>Create Page</Button>
            </Group>
            <Stack bg={"gray.1"} p={"md"}>
                {listPage && listPage.map((v, k) => <Box key={k}>
                    <Flex gap={"lg"}>
                        <Menu>
                            <Menu.Target>
                                <ActionIcon>
                                    <MdMoreVert />
                                </ActionIcon>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item>
                                    <Text>Update</Text>
                                </Menu.Item>
                                <Menu.Item>
                                    <Text>Delete</Text>
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <Text>{v.title}</Text>
                    </Flex>
                </Box>)}
            </Stack>
        </Stack>
    </>
}