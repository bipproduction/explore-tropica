'use client'

import BackButton from "@/modules/widget/back_button"
import { Box, Center, Flex, Group, Image, Paper, Stack, Text, Title } from "@mantine/core"
import parser from 'html-react-parser'
import style from 'styled-components'
import './../../style/style.css'
import WidgetSosialMediaHorizontal from "@/modules/widget/sosmed_horizontal"

const Gambar = style.image`
width: 100%
`

export default function ViewFrontPost({ data }: { data: any }) {
    return <>
        <Stack bg={"gray.1"}>
            <Flex p={"md"}>
                <BackButton />
            </Flex>
            <Group position="center">
                <Stack maw={720} spacing={"lg"} >
                    <Title>{data.title}</Title>
                    <Image src={`/img/${data.img}`} alt="" />
                    <Paper p={"md"}>
                        <Text>{data.des}</Text>
                    </Paper>
                    <Stack>
                        <Paper p={"md"} pos={"relative"} sx={{
                            overflow: "auto",

                        }}>
                            <Box >
                                {parser(data.content)}
                            </Box>
                        </Paper>
                    </Stack>
                </Stack>
            </Group>
            <WidgetSosialMediaHorizontal />
        </Stack>
    </>
}