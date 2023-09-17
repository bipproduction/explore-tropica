'use client'
import { routeMediaSosial } from "@/modules/route"
import WidgetPopListImage from "@/modules/widget/pop_list_image"
import { ActionIcon, Box, Button, Flex, Group, Menu, Stack, Text, TextInput, Title } from "@mantine/core"
import { useShallowEffect } from "@mantine/hooks"
import { showNotification } from "@mantine/notifications"
import _ from "lodash"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdMoreVert } from "react-icons/md"
import { funCreateMediaSosial } from "../fun/create"
import { funListMediaSosial } from "../fun/list"
import ViewCreateMediaSosial from "./create"

export default function ViewAdminMediaSosial() {
    const [listData, setlistData] = useState<any[]>([])
    const router = useRouter()
    return <>
        <Stack p={"lg"}>
            <Flex justify={"end"}>
                <Button onClick={() => router.push(routeMediaSosial.admin_media_sosial_create)} >CREATE</Button>
            </Flex>
            <Title>Media Sosial</Title>
            <WidgetListMediaSosial />

        </Stack>
    </>
}


function WidgetListMediaSosial() {
    const [listData, setListData] = useState<any[]>([])
    const route = useRouter()
    useShallowEffect(() => {
        funListMediaSosial().then(setListData)
    }, [])
    return <>
        <Stack p={"md"} bg={"gray.1"}>
            {listData.map((v, k) => <Box key={k}>
                <Flex gap={"lg"} >
                    <Menu>
                        <Menu.Target>
                            <ActionIcon>
                                <MdMoreVert />
                            </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item onClick={() => route.push(routeMediaSosial.admin_media_sosial_update + `?id=${v.id}`)}>
                                <Text>Update</Text>
                            </Menu.Item >
                            <Menu.Item onClick={() => route.push(routeMediaSosial.admin_media_sosial_delete + `?id=${v.id}`)}>
                                <Text>Delete</Text>
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    <Text>{v?.title}</Text>
                </Flex>
            </Box>)}
        </Stack>
    </>
}

