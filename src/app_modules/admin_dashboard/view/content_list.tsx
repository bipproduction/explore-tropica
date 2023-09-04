'use client'
import { ActionIcon, Box, Flex, Menu, NavLink, Stack, Text, Title, Image, Center } from "@mantine/core";
import { useState } from "react";
import parser from 'html-react-parser'
import { MdMoreVert, MdRemoveRedEye } from "react-icons/md";
import { useRouter } from "next/navigation";
import funContentDelete from "../fun/content_delete";
import toast from "react-simple-toasts";
import { funContentList } from "../fun/content_list";
import { useShallowEffect } from "@mantine/hooks";

export default function ViewContentList({ data }: { data: any }) {
    const [listContent, setListContent] = useState<any[] | null>(data)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useShallowEffect(() => {
        funContentList().then((v) => setListContent(v))
    }, [])

    return <>
        <Title pb={"lg"}>Content</Title>
        <Stack pt={"lg"} p={"md"} bg={"gray.1"}>
            {listContent && listContent.map((v, k) => <Stack key={k} spacing={"lg"}>
                <Box p={"sm"} style={{
                    borderBottom: "1px dashed gray"
                }}>
                    <Flex align={"center"} gap={"md"}>
                        <Menu>
                            <Menu.Target>
                                <ActionIcon loading={loading} >
                                    <MdMoreVert size={24} />
                                </ActionIcon>
                            </Menu.Target>
                            <Menu.Dropdown >
                                <Menu.Item w={200} onClick={() => {
                                    router.push(`/explore-admin/update?id=${v.id}`)
                                }}>
                                    Edit
                                </Menu.Item>
                                <Menu.Item w={200} onClick={() => {
                                    setLoading(true)
                                    funContentDelete(v.id).then((v) => {
                                        setLoading(false)
                                        if (!v.success) return toast(v.message)
                                        funContentList().then((v) => {
                                            setLoading(false)
                                            setListContent(v)
                                        })
                                    })

                                }}>
                                    Delete
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <Center pos={"relative"} w={50} h={50} bg={"gray"}>
                            <Image src={v.img} alt="" width={"100%"} />
                        </Center>
                        <Flex justify={"space-between"} gap={"md"} w={"100%"}>
                            <Text>{v.title}</Text>
                            <ActionIcon onClick={() => router.push(`/explore-admin/detail?id=${v.id}`)}>
                                <MdRemoveRedEye size={24} />
                            </ActionIcon>
                        </Flex>
                    </Flex>
                </Box>
            </Stack>)}
        </Stack>
    </>
}