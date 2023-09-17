'use client'

import { funListCategory } from "@/modules/admin/category/fun/list_category"
import { routeAdmin } from "@/modules/route"
import { ActionIcon, Box, Button, Flex, Group, Loader, Menu, Stack, Text, Title, UnstyledButton } from "@mantine/core"
import { useShallowEffect } from "@mantine/hooks"
import _ from "lodash"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdCategory, MdDelete, MdMoreVert, MdRemove } from "react-icons/md"

export default function AdminCategory() {
    const router = useRouter()
    const [listCategory, setlistCatrgory] = useState<any[] | null>(null)

    useShallowEffect(() => {
        onLoad()
    }, [])
    async function onLoad() {
        const d = await funListCategory()

        setlistCatrgory(d)
    }
    return <>
        <Stack>
            <Group position="right">
                <Button onClick={() => router.push(routeAdmin.admin_category_create)}>Create Category</Button>
            </Group>
            {!listCategory ? <Group position="center">
                <Loader />
            </Group> : _.isEmpty(listCategory) ? <Group position="center">
                <Stack>
                    <Text>Empty Category</Text>
                    <Button>Create</Button>
                </Stack>
            </Group> : <Stack p={"md"} bg={"gray.0"}>
                {listCategory.map((v, k) => <Box key={k} >
                    <Flex gap={"lg"}>
                        <Menu>
                            <Menu.Target>
                                <ActionIcon>
                                    <MdMoreVert />
                                </ActionIcon>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item onClick={() => router.push(routeAdmin.admin_category_update + `?id=${v.id}`)}>
                                    <Text >Update</Text>
                                </Menu.Item>
                                <Menu.Item onClick={() => router.push(routeAdmin.admin_category_delete + `?id=${v.id}`)}>
                                    <Text>Delete</Text>
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <Flex gap={"lg"} align={"center"}>
                            <MdCategory />
                            <Text >{v.title}</Text>
                        </Flex>
                    </Flex>
                </Box>)}
            </Stack>}
        </Stack>

    </>
}