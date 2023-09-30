'use client'
import { ActionIcon, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import { MdArrowBackIos } from "react-icons/md";
import parse from 'html-react-parser'
import { useRouter } from "next/navigation";

export default function ComPackageDetail({ data }: { data: any }) {
    const router = useRouter()
    return <>
        <Stack >
            <Flex p={"md"}>
                <ActionIcon onClick={router.back}>
                    <MdArrowBackIos size={32} />
                </ActionIcon>
            </Flex>
            <Group justify="center">
                <Stack maw={720} p={"md"}>
                    <Image src={(data.img as string).replace('/img/', '/images/')} alt="" height={500} />
                    <Title>{data.title}</Title>
                    {parse(data.des)}
                </Stack>
            </Group>
        </Stack>
        {/* {JSON.stringify(data)} */}
    </>
}