'use client'

import { funListCategory } from "@/modules/admin/category/fun/list_category"
import { route } from "@/modules/route"
import { ActionIcon, Box, Button, Flex, Group, Loader, Stack, Text, Title, UnstyledButton } from "@mantine/core"
import { useShallowEffect } from "@mantine/hooks"
import _ from "lodash"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdCategory, MdDelete, MdRemove } from "react-icons/md"

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
                <Button onClick={() => router.push(route.admin_category_create)}>Create Category</Button>
            </Group>
            {!listCategory ? <Group position="center">
                <Loader />
            </Group> : _.isEmpty(listCategory) ? <Group position="center">
                <Stack>
                    <Text>Empty Category</Text>
                    <Button>Create</Button>
                </Stack>
            </Group> : <Stack p={"md"} bg={"gray.0"}>
                {listCategory.map((v, k) => <Box key={k} style={{
                    borderBottom: "1px dashed gray",
                }}>
                    <Flex justify={"space-between"}>
                        <Flex gap={"lg"} align={"center"}>
                            <MdCategory />
                            <UnstyledButton onClick={() => router.push(route.admin_category_update + `?id=${v.id}`)}>{v.title}</UnstyledButton>
                        </Flex>
                        <ActionIcon onClick={() => router.push(route.admin_category_delete + `?id=${v.id}`)}>
                            <MdDelete />
                        </ActionIcon>
                    </Flex>
                </Box>)}
            </Stack>}
        </Stack>

    </>
}