'use client'

import { ActionIcon, Box, Image, Stack, Text, Title } from "@mantine/core"
import { useRouter } from "next/navigation"
import { MdArrowBackIos } from "react-icons/md"
import parser from 'html-react-parser'

export default function ViewDetail({ data }: { data: any }) {
    const router = useRouter()
    return <Stack p={"md"} bg={"gray.0"}>
        <ActionIcon onClick={() => router.back()} >
            <MdArrowBackIos size={32} />
        </ActionIcon>
        <Stack>
            <Title>{data.title}</Title>
            {data.img && <Box pos={"relative"} maw={300}>
                <Image width={"100%"} src={data.img} alt="" />
            </Box>}
            <Text>
                {parser(data.des)}
            </Text>
        </Stack>
    </Stack>
}