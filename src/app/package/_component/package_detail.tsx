'use client'
import { ActionIcon, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import { MdArrowBackIos } from "react-icons/md";
import parse from 'html-react-parser'
import { useRouter } from "next/navigation";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";

export default function ComPackageDetail({ data }: { data: any }) {
    const router = useRouter()
    const content = (data.des as string).replace('+6287765344998', '').replace('/', '').replace('reservationexploretropica@gmail.com', 'suryabisnisakun@gmail.com')
    const client = useState(false)
    useShallowEffect(() => {
        if(window) client[1](true)
    }, [])
if(!client[0]) return <></>
    return <>
        <Stack suppressHydrationWarning={true}>
            <Flex p={"md"}>
                <ActionIcon onClick={router.back}>
                    <MdArrowBackIos size={32} />
                </ActionIcon>
            </Flex>
            <Group justify="center">
                <Stack maw={720} p={"md"}>
                    <Image src={(data.img as string).replace('/img/', '/images/')} alt="" height={500} />
                    <Title>{data.title}</Title>
                    {parse(content)}
                </Stack>
            </Group>
        </Stack>
        {/* {JSON.stringify(data)} */}
    </>
}