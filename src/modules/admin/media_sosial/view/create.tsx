'use client'
import { showNotification } from "@mantine/notifications"
import { useState } from "react"
import { funCreateMediaSosial } from "../fun/create"
import { Button, Flex, Group, Stack, TextInput, Title } from "@mantine/core"
import WidgetPopListImage from "@/modules/widget/pop_list_image"
import _ from "lodash"
import BackButton from "@/modules/widget/back_button"

export default function ViewCreateMediaSosial() {
    const [formData, setFormData] = useState({
        title: "",
        url: "",
        img: ""
    })

    async function onSave() {
        if (_.values(formData).includes("")) return showNotification({ message: "isi semuanya" })

        funCreateMediaSosial({ data: formData }).then((v) => {
            showNotification({ message: "success" })
        })
    }
    return <>
        <Stack>
            <Flex>
                <BackButton />
                <Title>Create Media Sosial</Title>
            </Flex>
            <Group>
                <Stack spacing={"lg"}>
                    <TextInput value={formData?.title} label={"Name"} placeholder="name" onChange={(val) => setFormData({
                        ...formData,
                        title: val.target.value
                    })} />
                    <TextInput label={"Url"} placeholder="url" value={formData?.url} onChange={(val) => setFormData({
                        ...formData,
                        url: val.target.value
                    })} />
                    <WidgetPopListImage varian="circle-small" onClick={(val) => setFormData({
                        ...formData,
                        img: val
                    })} title="Select Icon" />
                    <Button onClick={onSave}>Save</Button>
                </Stack>
            </Group>
        </Stack>
    </>
}