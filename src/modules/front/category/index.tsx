'use client'

import BackButton from "@/modules/widget/back_button"
import { Flex, Image, Stack, Text, UnstyledButton } from "@mantine/core"
import { useRouter } from "next/navigation"

export default function ViewCategory({ data }: { data: any[] }) {
    const router = useRouter()
    return <>
        <Stack>
            <Flex p={"md"}>
                <BackButton />
            </Flex>
            <Stack maw={720} align="center">
                <Flex gap={"lg"}>
                    {data.map((v, k) =>
                        <UnstyledButton key={k} onClick={() => router.push(`/post/${v.id}`)}>
                            <Stack key={k} align="center">
                                <Image radius={200} src={`/img/${v.img}`} alt="" width={100} height={100} />
                                <Text>{v.title}</Text>
                            </Stack>
                        </UnstyledButton>)}
                </Flex>

            </Stack>
        </Stack>
    </>
}