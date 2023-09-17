import { useShallowEffect } from "@mantine/hooks"
import { useState } from "react"
import { funListMediaSosial } from "../fun/list_media_sosial"
import { Flex, Image, Paper, Text, UnstyledButton } from "@mantine/core"
import { useRouter } from "next/navigation"

export default function WidgetSosialMediaHorizontal() {
    const [listSosmed, setlistSosmed] = useState<any[]>([])
    const router = useRouter()
    useShallowEffect(() => {
        funListMediaSosial().then(setlistSosmed)
    }, [])
    return <>
        <Paper p={"md"}>
            {/* {JSON.stringify(listSosmed)} */}
            <Flex wrap={"wrap"} gap={"lg"}>
                {listSosmed.map((v, k) =>
                    <UnstyledButton key={k} onClick={() => router.push(v.url)}>
                        <Flex key={k} gap={"lg"} align={"center"}>
                            <Image width={50} height={50} radius={100} src={`/img/${v.img}`} alt="" />
                            <Text>{v.title}</Text>
                        </Flex>
                    </UnstyledButton>)}
            </Flex>
        </Paper>
    </>
}