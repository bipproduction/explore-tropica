import { useShallowEffect } from "@mantine/hooks"
import { useState } from "react"
import { funlistImage } from "../fun/list_image"
import { Box, Button, Flex, Image, Loader, Popover, Stack, UnstyledButton } from "@mantine/core"

export default function WidgetPopListImage({ onClick }: { onClick: (val: any) => void }) {
    const [listImage, setListImage] = useState<any[] | null>(null)
    const [opened, setOpenend] = useState(false)

    useShallowEffect(() => {
        funlistImage().then(setListImage)
    }, [])

    return <>

        <Popover opened={opened} withArrow trapFocus >
            <Popover.Target>
                <Button onClick={() => setOpenend(!opened)}>Select Image</Button>
            </Popover.Target>
            <Popover.Dropdown bg={"gray.2"}>
                <Stack pos={"relative"} w={460}>
                    {!listImage ? <Loader /> : <Flex wrap={"wrap"} gap={"md"}>
                        {listImage.map((v, k) => <UnstyledButton onClick={() => {
                            setOpenend(false)
                            onClick(`${v.id}.${v.ext}`)
                        }} bg={"white"} w={100} h={100} key={k}>
                            <Image width={"100%"} src={`/img/${v.id}.${v.ext}?size=100`} alt="" />
                        </UnstyledButton>)}

                    </Flex>}
                </Stack>
            </Popover.Dropdown>
        </Popover>
    </>
}