'use client'

import { Box, Button, Flex, Group, Header, Image, Paper, Space, Stack, Text, Title, UnstyledButton } from "@mantine/core"
import { ViewSlide } from "./widget/slide"
import { useRouter } from "next/navigation"
import { Carousel } from "@mantine/carousel"
import WidgetMediaSosial from "./widget/media_sosial"

export default function ViewLanding(
    { listMediaSosial, listSlideBottom, listPage, listCategory, dataHome, listImage }:
        {
            listMediaSosial: any[],
            listSlideBottom: any[],
            listPage: any[],
            listCategory: any[],
            dataHome: any,
            listImage: any[]
        }
) {
    return <Stack bg={"gray.1"}>
        <WidgetHeader listPage={listPage} />
        <Flex justify={"space-around"} wrap={"wrap"}>
            <Stack>
                <Paper p={"md"}>
                    <Stack align="center" p={"lg"} spacing={"lg"} >
                        <Image radius={600} width={300} height={300} src={`/img/${dataHome?.img}`} alt="" />
                        <Title>{dataHome?.title}</Title>
                    </Stack>
                </Paper>
                <Paper p={"md"}>
                    <WidgetMediaSosial listMediaSosial={listMediaSosial} />
                </Paper>
            </Stack>
            <Paper p={"md"}>
                <Stack p={"lg"} spacing={"lg"} align="center" >
                    <ViewSlide listImage={listImage} />
                </Stack>
            </Paper>
        </Flex >
        <Space h={100} />
        <WidgetBest listCategory={listCategory} />
        <Space h={100} />
        <Paper p={"md"}>
            <WidgetSlideBawah listSlideBottom={listSlideBottom} />
        </Paper>
    </Stack>
}

function WidgetHeader({ listPage }: { listPage: any[] }) {
    const router = useRouter()
    return <Header height={60} >
        <Flex justify={"end"} gap={"lg"} align={"center"} p={"sm"}>
            {listPage.map((v, k) => <Button variant="outline" w={150} key={k} onClick={() => router.push(`/page/${v.id}`)}>{v?.title}</Button>)}
        </Flex>
    </Header>
}

function WidgetBest({ listCategory }: { listCategory: any[] }) {
    const router = useRouter()
    return <Paper p={"md"}>
        <Stack align="center" justify="center">
            <Title>Best seller explore tropica</Title>
            <Flex justify={"center"} gap={"lg"} wrap={"wrap"} align={"center"} maw={720} p={"lg"}>
                {listCategory.map((v, k) => <UnstyledButton key={k} onClick={() => router.push(`/category/${v.id}`)}>
                    <Stack align="center">
                        <Image width={200} height={200} src={`/img/${v?.img}`} alt="" radius={400} />
                        <Text size={24} fw={"bold"}>{v?.title}</Text>
                    </Stack>
                </UnstyledButton>)}
            </Flex>

        </Stack>
    </Paper>

}


function WidgetSlideBawah({ listSlideBottom }: { listSlideBottom: any[] }) {
    return (
        <Stack align="center">
            <Carousel
                maw={720}
                withIndicators
                height={500}
                slideSize="33.333333%"
                slideGap="md"
                loop
                align="start"
                slidesToScroll={3}
            >
                {listSlideBottom.map((v, k) => <Carousel.Slide key={k}>
                    <Image src={`/img/${v?.img}`} width={720} height={500} alt="" />
                </Carousel.Slide>)}
            </Carousel>
        </Stack>
    );
}