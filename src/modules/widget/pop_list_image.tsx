import { useHover, useShallowEffect } from "@mantine/hooks"
import { useState } from "react"
import { funlistImage } from "../fun/list_image"
import { ActionIcon, BackgroundImage, Box, Button, Center, Flex, Image, Loader, Overlay, Popover, Stack, Text, UnstyledButton } from "@mantine/core"
import { RichTextEditor } from "@mantine/tiptap"
import { MdImage } from "react-icons/md"

type VARIAN = "live" | "circle" | "circle-small" | "icon" | "button"

export default function WidgetPopListImage({ title, varian, onClick, isIcon, value }: { value?: string, title?: string, varian?: VARIAN, onClick: (val: any) => void, isIcon?: boolean }) {
    const [listImage, setListImage] = useState<any[] | null>(null)
    const [opened, setOpenend] = useState(false)
    const [selectedImage, setSelectedImage] = useState("default.png")

    useShallowEffect(() => {
        funlistImage().then(setListImage)
    }, [])

    return <>
        <Text>{title}</Text>
        <Popover opened={opened} withArrow trapFocus >
            <Popover.Target>
                {/* {isIcon ? <RichTextEditor.Control onClick={() => setOpenend(!opened)}>
                    <MdImage />
                </RichTextEditor.Control> : <Button onClick={() => setOpenend(!opened)}>Select Image</Button>} */}
                <Box component="a" onClick={() => setOpenend(!opened)}>
                    {!varian ?
                        <WidgetVarianLive src={value ?? selectedImage} /> :
                        varian === "live" ?
                            <WidgetVarianLive src={value ?? selectedImage} /> :
                            varian === "circle" ? <WidgetVarianCircle src={value ?? selectedImage} /> :
                                varian === "circle-small" ?
                                    <WidgetVarianCircleSmall src={value ?? selectedImage} /> : varian === "icon" ?
                                        <WidgetVarianIcon /> : <WidgetVarianButton src={value ?? selectedImage} />

                    }
                </Box>
            </Popover.Target>
            <Popover.Dropdown bg={"gray.1"}>
                <Stack pos={"relative"} w={460}>
                    {!listImage ? <Loader /> : <Flex wrap={"wrap"} gap={"md"}>
                        {listImage.map((v, k) => <UnstyledButton pos={"relative"} onClick={() => {
                            setOpenend(false)
                            onClick(`${v.id}.${v.ext}`)
                            setSelectedImage(`${v.id}.${v.ext}`)
                        }} bg={"white"} key={k}>
                            <Image width={100} height={100} src={`/img/${v.id}.${v.ext}?size=100`} alt="" />
                        </UnstyledButton>)}
                    </Flex>}
                </Stack>
            </Popover.Dropdown>
        </Popover>
    </>
}

function WidgetVarianLive({ src }: { src: string }) {
    const { hovered, ref } = useHover()
    return <BackgroundImage ref={ref} w={300} h={300} src={"/img/" + src} pos={"relative"} >
        <Overlay w={300} h={300} blur={4} style={{
            display: hovered ? "block" : "none"
        }}>
            <Center w={300} h={300}>
                <MdImage size={36} color={"white"} />
            </Center>
        </Overlay>
    </BackgroundImage>
}

function WidgetVarianCircle({ src }: { src: string }) {
    const { hovered, ref } = useHover()
    return <BackgroundImage radius={600} ref={ref} w={300} h={300} src={"/img/" + src} pos={"relative"} >
        <Overlay w={300} h={300} blur={4} style={{
            display: hovered ? "block" : "none",
            borderRadius: "600px"
        }}>
            <Center w={300} h={300}>
                <MdImage size={36} color={"white"} />
            </Center>
        </Overlay>
    </BackgroundImage>
}

function WidgetVarianIcon() {
    return <MdImage />
}

function WidgetVarianCircleSmall({ src }: { src: string }) {
    const { hovered, ref } = useHover()
    return <BackgroundImage radius={140} ref={ref} w={70} h={70} src={"/img/" + src} pos={"relative"} >
        <Overlay w={70} h={70} blur={4} style={{
            display: hovered ? "block" : "none",
            borderRadius: "600px"
        }}>
            <Center w={70} h={70}>
                <MdImage size={36} color={"white"} />
            </Center>
        </Overlay>
    </BackgroundImage>
}

function WidgetVarianButton({ src }: { src: string }) {
    return <Button>ADD IMAGE</Button>
}