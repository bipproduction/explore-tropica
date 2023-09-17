'use client'
import BackButton from '@/modules/widget/back_button'
import { Flex, Group, Image, Paper, Stack, Text, Title } from '@mantine/core'
import parser from 'html-react-parser'
import './../../style/style.css'
import WidgetSosialMediaHorizontal from '@/modules/widget/sosmed_horizontal'

export default function ViewFrontPage({ data }: { data: any }) {
    return <>
        <Stack bg={"gray.1"}>
            <Flex p={"md"}>
                <BackButton />
            </Flex>
            <Group position='center'>
                <Stack maw={720} spacing={"lg"}>
                    <Title>{data.title}</Title>
                    <Image src={`/img/${data?.img}`} alt='' />
                    <Paper p={"md"}>
                        <Text>{data.des}</Text>
                    </Paper>
                    <Paper p={"md"}>
                        {parser(data.content)}
                    </Paper>
                </Stack>
            </Group>
            <WidgetSosialMediaHorizontal />
        </Stack>
    </>
}