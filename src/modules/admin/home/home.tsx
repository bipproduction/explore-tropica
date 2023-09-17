'use client'

import WidgetPopListImage from "@/modules/widget/pop_list_image"
import { Button, Group, Stack, TextInput, Title } from "@mantine/core"
import { useState } from "react"
import { funUpdateHome } from "./fun/update"
import { useShallowEffect } from "@mantine/hooks"
import { showNotification } from "@mantine/notifications"
import { funGetHome } from "./fun/get"
import WidgetSlideBottom from "./widget/slide_bottom"

export default function ViewAdminHome() {
    const [formData, setFormData] = useState({
        img: "default.png",
        title: ""
    })

    useShallowEffect(() => {
        funGetHome().then(setFormData as any)
    }, [])

    async function onUpdate() {
        funUpdateHome({ data: formData }).then((val) => {
            showNotification({ message: "success" })
        })
    }
    return <>
        <Stack p={"lg"}>
            <Group>
                <Stack spacing={"lg"}>
                    <Title>
                        Home Admin
                    </Title>
                    <WidgetPopListImage value={formData?.img} onClick={(val) => {
                        setFormData({
                            ...formData,
                            img: val
                        })
                    }} varian="circle" />
                    <TextInput value={formData?.title} onChange={(val) => setFormData({ ...formData, title: val.target.value })} label={"Title"} placeholder="title" />
                    <Button onClick={onUpdate}>UPDATE</Button>
                </Stack>
            </Group>
            <WidgetSlideBottom />
        </Stack>
    </>
}