import { funListSlidebottom } from "@/modules/fun/list_slide_button";
import WidgetPopListImage from "@/modules/widget/pop_list_image";
import { ActionIcon, BackgroundImage, Flex, Group, Image, Stack, Title } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import { funCreateSlide } from "../fun/create_slide";
import { showNotification } from "@mantine/notifications";
import _ from "lodash";
import { MdRemove } from "react-icons/md";
import { funDeleteSlideBottom } from "../fun/delete_slide_bottom";

export default function WidgetSlideBottom() {
    const [listImage, setListImage] = useState<any[]>([])

    useShallowEffect(() => {
        loadData()
    }, [])

    async function loadData() {
        funListSlidebottom().then(setListImage)
    }
    return <>
        <Stack p={"lg"} bg={"gray.1"}>
            <Title>Slide Bottom</Title>
            <WidgetPopListImage varian="button" onClick={(val) => {
                funCreateSlide({
                    data: {
                        img: val
                    }
                }).then((v) => {
                    console.log(v)
                    if (v) {
                        loadData()
                        showNotification({ message: "success" })

                    }
                })
            }} />
            <Flex wrap={"wrap"} gap={"lg"} bg={"white"} p={"md"}>
                {listImage.map((v, k) => <BackgroundImage key={k} w={100} h={100} src={`/img/${v.img}`} >
                    <Group position="right">
                        <ActionIcon onClick={() => {
                            funDeleteSlideBottom({ id: v.id }).then((v) => {
                                loadData().then(() => showNotification({ message: "success" }))
                            })
                        }} variant="gradient" bg={"red"} radius={100}>
                            <MdRemove />
                        </ActionIcon>
                    </Group>
                </BackgroundImage>)}
            </Flex>
        </Stack>
    </>
}