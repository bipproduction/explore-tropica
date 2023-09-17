'use client'

import { routeAdmin } from "@/modules/route"
import { ActionIcon, Box, Button, Flex, Image, Menu, Paper, Stack, Text } from "@mantine/core"
import { useShallowEffect } from "@mantine/hooks"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { funListPost } from "./fun/list"
import { MdEdit, MdMoreVert } from "react-icons/md"

export default function AdminPost() {
    const router = useRouter()
    const [listPost, setListPost] = useState<any[] | null>(null)

    useShallowEffect(() => {
        funListPost().then(val => setListPost(val))
    }, [])

    return <>
        <Stack >
            <Flex justify={"end"}>
                <Button onClick={() => router.push(routeAdmin.admin_post_create)} >Create</Button>
            </Flex>
            <Stack  >
                {listPost && listPost.map((v, k) => <Paper withBorder my={"lg"} key={k} >
                    <Flex gap={"lg"} p={"md"} >
                        <Image radius={200} width={100} height={100} alt="" src={`/img/${v.img}`} />
                        <Stack bg={"gray.1"} w={"100%"}>
                            <Text p={"sm"} size={24}>{v.title}</Text>
                            <Stack bg={"gray.0"} p={"md"}>
                                <Text>POST</Text>
                                {v.Post.map((v2: any, k2: any) => <Box key={k2}>
                                    <Flex gap={"lg"} align={"center"} >

                                        <Menu>
                                            <Menu.Target>
                                                <ActionIcon>
                                                    <MdMoreVert />
                                                </ActionIcon>
                                            </Menu.Target>
                                            <Menu.Dropdown>
                                                <Menu.Item onClick={() => router.push(routeAdmin.admin_post_update + `?id=${v.id}`)}>
                                                    Update
                                                </Menu.Item>
                                                <Menu.Item onClick={() => router.push(routeAdmin.admin_post_delete + `?id=${v.id}`)}>
                                                    Detete
                                                </Menu.Item>
                                            </Menu.Dropdown>
                                        </Menu>
                                        <Flex gap={"lg"} >
                                            {/* <Text>{k2 + 1}</Text> */}
                                            <Text>{v2.title}</Text>
                                        </Flex>
                                    </Flex>
                                </Box>)}
                            </Stack>
                        </Stack>
                    </Flex>
                </Paper>)}
            </Stack>
            {/* <TextEditor /> */}
        </Stack>
    </>
}


