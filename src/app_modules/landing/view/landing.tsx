'use client'
import { BackgroundImage, Box, Burger, Button, Drawer, Flex, Grid, Group, MediaQuery, Paper, Stack, Text, Title } from "@mantine/core"
import ViewNavHor from "./nav_hor"
import { useState } from "react"
import { useMediaQuery, useShallowEffect } from "@mantine/hooks"
import ViewNavVer from "./nav_ver"

export default function ViewLanding() {
    const [open, setOpen] = useState(false)
    const [client, setClient] = useState(false)
    const matches = useMediaQuery('(min-width: 56.25em)');


    useShallowEffect(() => {
        if (window) setClient(true)
    }, [])

    if(!client) return <></>
    return (<Box>
        <Stack>
            <BackgroundImage src="./images/landing.png" h={"100vh"} mih={720}>
                <Stack>
                    <Paper pos={"fixed"} w={"100%"} style={{ zIndex: 10 }} bg={"#00000010"}>
                        <Grid p={"md"}>
                            <Grid.Col span={"content"}>
                                <Flex justify={"center"} align={"center"} gap={"md"}>
                                    {!matches && <Burger onClick={() => setOpen(!open)} opened={open} />}
                                    <Title>Explore Troica</Title>
                                </Flex>
                            </Grid.Col>
                            <Grid.Col span={"auto"}>
                                {matches && <ViewNavHor />}
                            </Grid.Col>
                        </Grid>
                    </Paper>
                    <Stack spacing={"lg"} left={100} pos={"relative"} top={200}>
                        <Text size={24}>Best Travel Agency</Text>
                        <Title style={{
                            overflowWrap: "break-word"
                        }} size={64}>EXPLORE TROPICA</Title>
                        <Title>Embark on a Journey to Tropica</Title>
                        <Box pos={"relative"}>
                            <Text maw={360}>
                            Exploring Tropica: Your Gateway to a Tropical Wonderland
                            </Text>
                        </Box>
                        <Group spacing={"md"}>
                            <Button>DISCOVER</Button>
                            <Button variant="outline">KNOW MORE</Button>
                        </Group>
                    </Stack>
                </Stack>
            </BackgroundImage>
            <Text>Bawahnya</Text>
        </Stack>
        <Drawer opened={open} onClose={() => setOpen(false)}>
            <Stack>
                <Title>Explore</Title>
                <ViewNavVer />
            </Stack>
        </Drawer>
    </Box>)


}