'use client'
import BackButton from "@/modules/widget/back_button";
import WidgetPopListImage from "@/modules/widget/pop_list_image";
import { Box, Button, Center, Flex, Group, Image, Space, Stack, Text, TextInput, Textarea, Title } from "@mantine/core";
import WidgetContentEditor from "../../../widget/content_editor";
import { MdImage } from "react-icons/md";
import { useState } from "react";
import _ from "lodash";
import { showNotification } from "@mantine/notifications";
import { funCreatePage } from "../fun/create_page";

export default function ViewCreatePaga() {

    const [form, setForm] = useState({
        title: "",
        img: "",
        des: "",
        content: ""
    })

    const [loading, setLoading] = useState(false)

    async function onSave(data: any) {
        setLoading(true)
        if (_.values(data).includes("")) {
            setLoading(false)
            return showNotification({ message: "isi semuanya" })
        }
        const c = await funCreatePage(data)
        if (!c.success) {
            setLoading(false)
            return showNotification({ message: c.message })
        }

        setLoading(false)
        setForm({
            content: "",
            des: "",
            img: "",
            title: ""
        })
        return showNotification({ message: c.message })
    }
    return <Stack suppressHydrationWarning={true} spacing={"lg"}>
        <Flex gap={"lg"} align={"center"}>
            <BackButton />
            <Title>Create Page</Title>
        </Flex>
        <Group position="left">

            <Stack>
                <TextInput value={form?.title} onChange={(val) => setForm({
                    ...form,
                    title: val.target.value
                })} label={"Title"} placeholder="title" />
                <WidgetPopListImage varian="live" onClick={(val) => {
                    setForm({
                        ...form,
                        img: val,

                    })
                }} />
                {/* <Text>Image</Text>
                <Box bg={"gray.1"} w={300} h={300} pos={"relative"}>
                    {_.isEmpty(form?.img) ? <Center w={300} h={300}>
                        <MdImage size={64} />
                    </Center> : <Image width={"100%"} src={"/img/" + form?.img} alt="" />}
                </Box> */}
                <Textarea value={form.des} onChange={(val) => setForm({
                    ...form,
                    des: val.target.value
                })} label={"Description"} minRows={6} placeholder="description" />
            </Stack>
        </Group>
        <Text>Content</Text>
        <WidgetContentEditor content={form.content} loading={loading} onClik={(val) => {
            const data = _.cloneDeep(form)
            data.content = val
            onSave(data)
        }} />
        <Space h={150} />
    </Stack>
}