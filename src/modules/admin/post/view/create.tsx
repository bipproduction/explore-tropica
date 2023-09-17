'use client'
import BackButton from "@/modules/widget/back_button";
import WidgetContentEditor from "@/modules/widget/content_editor";
import WidgetPopListImage from "@/modules/widget/pop_list_image";
import { Box, Center, Flex, Group, Image, Stack, TextInput, Textarea, Title } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import _ from "lodash";
import { useState } from "react";
import { MdImage } from "react-icons/md";
import { funCreatePost } from "../fun/create";
import WidgetSelectCategory from "@/modules/widget/select_category";

export default function ViewCreatePost() {
    const [formData, setFormData] = useState({
        title: "",
        img: "",
        des: "",
        content: "",
        categoryId: ""
    })

    async function onSave(data: any) {
        setLoading(true)
        if (_.values(data).includes("")) return setLoading(false), showNotification({ message: "isi semuanya" })

        const c = await funCreatePost(data)
        setLoading(false)
        if (!c.success) return showNotification({ message: "error" })
        return showNotification({ message: "success" })
    }
    const [loading, setLoading] = useState(false)
    return <>
        <Stack>
            <Flex gap={"lg"} align={"center"}>
                <BackButton />
                <Title>Create Post</Title>
            </Flex>
            <Group>
                <Stack>
                    <WidgetSelectCategory onChange={(val) => {
                        setFormData({
                            ...formData,
                            categoryId: val
                        })
                    }} />
                    <TextInput onChange={(val) => setFormData({
                        ...formData,
                        title: val.target.value
                    })} label="Title" placeholder="title" />
                    <WidgetPopListImage onClick={(val) => {
                        setFormData({
                            ...formData,
                            img: val
                        })
                    }} />
                    {/* <Center bg={"gray"} w={300} h={300}>
                        {_.isEmpty(formData.img) ? <MdImage size={64} /> : <Image width={300} height={300} src={`/img/${formData.img}`} alt="" />}
                    </Center> */}
                    <Textarea onChange={(val) => setFormData({
                        ...formData,
                        des: val.target.value
                    })} placeholder="description" label={"description"} />

                </Stack>
            </Group>
            <WidgetContentEditor loading={loading} onClik={async (val) => {
                const d = _.cloneDeep(formData)
                d.content = val
                onSave(d)
            }} content="tulis sesuatu ..." />
        </Stack>
    </>
}