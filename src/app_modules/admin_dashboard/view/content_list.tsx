'use client'
import { ActionIcon, Box, Flex, Menu, NavLink, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import parser from 'html-react-parser'
import { MdMoreVert } from "react-icons/md";
import { useRouter } from "next/navigation";
import funContentDelete from "../fun/content_delete";
import toast from "react-simple-toasts";
import { funContentList } from "../fun/content_list";

export default function ViewContentList({ data }: { data: any }) {
    const [listContent, setListContent] = useState<any[] | null>(data)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    return <>
        <Title pb={"lg"}>Content</Title>
        <Stack pt={"lg"} p={"md"} bg={"gray.1"}>
            {listContent && listContent.map((v, k) => <Stack key={k} spacing={"lg"}>
                <Box >
                    <Flex>
                        <Menu>
                            <Menu.Target>
                                <ActionIcon loading={loading} >
                                    <MdMoreVert size={24} />
                                </ActionIcon>
                            </Menu.Target>
                            <Menu.Dropdown >
                                <Menu.Item w={200}>
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
                        <NavLink label={v.title} onClick={() => router.push(`/explore-admin/detail?id=${v.id}`)} />
                    </Flex>
                </Box>
            </Stack>)}
        </Stack>
    </>
}