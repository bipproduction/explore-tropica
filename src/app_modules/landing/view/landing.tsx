'use client'
import { ActionIcon, BackgroundImage, Box, Burger, Button, Center, Drawer, Flex, Grid, Group, Image, MediaQuery, Paper, Popover, SimpleGrid, Space, Stack, Text, Title, UnstyledButton } from "@mantine/core"
import ViewNavHor from "./nav_hor"
import { useState } from "react"
import { useHover, useMediaQuery, useShallowEffect } from "@mantine/hooks"
import ViewNavVer from "./nav_ver"
import { MdEdit, MdEmail, MdImage, MdWhatsapp } from "react-icons/md"
import { useRouter } from "next/navigation"
import ViewGalery from "./galery"
import { WidgetEditable } from "@/app_modules/widget"
import { funUpsertLanding } from "@/app_modules/fun/upsert_landing"
import toast from "react-simple-toasts"
import parser from 'html-react-parser'

export default function ViewLanding({ data, isEditable, landing }: { data: any, isEditable: boolean, landing: any }) {
    const [open, setOpen] = useState(false)
    const [client, setClient] = useState(false)
    const matches = useMediaQuery('(min-width: 56.25em)');
    const [listContent, setListContent] = useState<any[] | null>(data)
    const router = useRouter()
    const [landingVal, setLandingVal] = useState<any | null>(landing)

    useShallowEffect(() => {
        if (window) setClient(true)
    }, [])

    if (!client) return <></>
    return <div>
        <Stack w={"100%"} pos={"relative"}>

            <Stack spacing={0} top={0}>
                <BackgroundImage src="./images/landing.png" h={"100vh"} mih={720} >
                    <Stack spacing={0}>
                        <Flex p={"md"} pos={"sticky"} w={"100%"} top={0} style={{ zIndex: 10 }} justify={"space-between"} align={"center"} >
                            {!matches && <Burger opened={open} onClick={() => setOpen(!open)} />}
                            <WidgetEditable data={landingVal?.title ?? ""} onSave={async (text, html) => {
                                const up = await funUpsertLanding({
                                    title: text
                                })

                                console.log(up)
                                if (!up.success) return toast(`${up.data}`)
                                setLandingVal({
                                    ...landingVal,
                                    title: up.data.title
                                })
                                return toast(up.message)
                            }}>
                                {(val) => <Title>{val}</Title>}
                            </WidgetEditable>
                            <Box>
                                {matches && <ViewNavHor isEditable={isEditable} />}
                            </Box>
                        </Flex>
                        <Stack spacing={"lg"} pos={"relative"} top={200} p={"lg"}>
                            <WidgetEditable
                                option={{
                                    heading: true,
                                    alig: true,
                                    color: true,
                                    link: true,

                                }}
                                data={landingVal?.des ?? ""}
                                onSave={async (text, html) => {
                                    const up = await funUpsertLanding({
                                        des: html
                                    })
                                    if (!up.success) return toast("error")
                                    setLandingVal({
                                        ...landingVal,
                                        des: up.data.des
                                    })
                                    return toast("success")
                                }}>
                                {
                                    (val) => <Box>
                                        {parser(val)}
                                    </Box>
                                }
                            </WidgetEditable>
                            {/* <Text size={24}>Best Travel Agency</Text>
                            <Title style={{
                                overflowWrap: "break-word"
                            }} size={64}>EXPLORE TROPICA</Title>
                            <Title mah={300}>Embark on a Journey to Tropica</Title>
                            <Box pos={"relative"}>
                                <Text maw={300}>
                                    Exploring Tropica: Your Gateway to a Tropical Wonderland
                                </Text>
                            </Box> */}
                            <Group spacing={"md"}>
                                <Button>DISCOVER</Button>
                                <Button variant="outline">KNOW MORE</Button>
                            </Group>
                        </Stack>
                    </Stack>
                </BackgroundImage>
                <ViewGalery />
                <Stack p={"md"} bg={"gray.1"}>
                    <Space h={100} />
                    <Title>Package Available</Title>
                    <SimpleGrid cols={4} spacing={"md"} breakpoints={[
                        { maxWidth: '62rem', cols: 3, spacing: 'md' },
                        { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                        { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                    ]} >
                        {listContent && listContent.map((v, k) =>
                            <UnstyledButton key={k} onClick={() => router.push(`/detail?id=${v.id}`)} >
                                <Paper shadow="sm" key={k} >
                                    <Stack p={"md"} spacing={"md"}>
                                        <Box pos={"relative"} h={200}>
                                            {!v.img ? <Center h={200}>
                                                <MdImage size={64} />
                                            </Center> : <Image height={200} src={v.img} alt="" />}
                                        </Box>
                                        <Text fw={"bold"} h={50} lineClamp={2} >{v.title}</Text>
                                    </Stack>
                                </Paper>
                            </UnstyledButton>)}
                    </SimpleGrid>
                </Stack>
                <Space h={100} />
                <Stack bg={"gray.2"} p={"lg"} >
                    <Group position="apart">
                        <Flex gap={"lg"}>
                            <ActionIcon size={42} radius={100}>
                                <MdWhatsapp size={42} color={"green"} />
                            </ActionIcon>
                            <ActionIcon size={42} radius={100}>
                                <MdEmail size={42} color={"red"} />
                            </ActionIcon>
                        </Flex>
                        <Flex>
                            <Title order={3}>Explore Tropica@2023</Title>
                        </Flex>
                    </Group>
                </Stack>
            </Stack>
            <Drawer opened={open} onClose={() => setOpen(false)}>
                <Stack>
                    <Title>Explore</Title>
                    <ViewNavVer />
                </Stack>
            </Drawer>
        </Stack>
    </div>
}