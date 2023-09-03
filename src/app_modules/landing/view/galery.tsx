import { Box, Center, Image, Paper, Space, Stack, Title } from "@mantine/core";
import { Carousel } from '@mantine/carousel';

const listGalery = Array.from(new Array(10), (k, v) => { v })

export default function ViewGalery() {
    return <Stack>
        <Space h={100} />
        <Box p={"md"} bg={"gray.1"}>
            <Paper shadow="sm">
                <Stack p={"md"}>
                    <Title>GALERY</Title>
                    <Stack >
                        <Carousel slideSize="100%" maw={"100%"} mx="auto" withIndicators height={500}>
                            {listGalery.map((v, k) =>
                                <Carousel.Slide
                                    p={"md"}
                                    key={k} h={500} w={720}>
                                    <Box h={500} pos={"relative"}>
                                        <Image src={"https://cdn.idntimes.com/content-images/post/20210701/dudutsp-1625110692168245-6a9885420ba5a4445a39b4b0f5cabf44_600x400.jpg"} height={500} alt="" />
                                    </Box>
                                </Carousel.Slide>)}
                        </Carousel>
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    </Stack>

}