'use client'

import { ActionIcon, Box, Center, Image, Stack, Text, Title } from "@mantine/core"
import { useRouter } from "next/navigation"
import { MdArrowBackIos, MdImage } from "react-icons/md"
import parser from 'html-react-parser'

export default function ViewDetailContent({ data }: { data: any }) {
    const router = useRouter()
    return <>
        <Stack>
            <Box p={"md"}>
                <ActionIcon onClick={router.back} >
                    <MdArrowBackIos size={64} />
                </ActionIcon>
            </Box>
            <Box h={400} pos={"relative"}>
                {!data.img ? <Center h={400} w={"100%"}>
                    <MdImage size={96} />
                </Center> : <Image height={400} src={data.img} alt="" />}
            </Box>
            <Stack p={"md"} spacing={"lg"}>
                <Title>{data.title}</Title>
                <Text>{parser(data.des)}</Text>
            </Stack>
        </Stack>
    </>
}