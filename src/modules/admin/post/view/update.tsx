'use client'
import BackButton from "@/modules/widget/back_button";
import WidgetContentEditor from "@/modules/widget/content_editor";
import WidgetPopListImage from "@/modules/widget/pop_list_image";
import { Center, Flex, Group, Image, Stack, Text, TextInput, Textarea, Title } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import _ from "lodash";
import { useState } from "react";
import { funGetPostById } from "../fun/by_id";
import { funUpdatePost } from "../fun/update";
import { showNotification } from "@mantine/notifications";

export default function ViewUpdatePost({ id }: { id: string }) {
    const [formUpdate, setFormUpdate] = useState<any | null>(null)
    const [loading, setLoading] = useState(false)

    useShallowEffect(() => {
        funGetPostById({ id }).then((v) => setFormUpdate(v))
    }, [])

    async function onUpdate(val: any) {
        setLoading(true)
        funUpdatePost({data: val}).then((v) => {
            showNotification({ message: "success" })
            setLoading(false)
        })
    }
    return <>
        <Stack>

            <Flex gap={"lg"} align={"center"}>
                <BackButton />
                <Title>Update Post</Title>
            </Flex>
            {formUpdate && <WidgetUpdate loading={loading} onClick={onUpdate} data={formUpdate} />}
        </Stack>
    </>
}

function WidgetUpdate({ loading, data, onClick }: { loading: boolean, data: any, onClick: (val: any) => void }) {
    const [formData, setFormData] = useState(data)


    return <>
        <Stack>
            <Group>
                <Stack spacing={"lg"} bg={"gray.0"} p={"md"}>
                    <TextInput label={"title"} value={formData?.title} onChange={(val) => setFormData({
                        ...formData,
                        title: val.target.value
                    })} />

                    <Stack spacing={0}>
                        <Text>Image</Text>
                        <WidgetPopListImage onClick={(val) => {
                            setFormData({
                                ...formData,
                                img: val
                            })
                        }} />
                    </Stack>
                    {/* <Center w={300} h={300} pos={"relative"}>
                        <Image width={300} height={300} src={`/img/${formData.img}`} alt="" pos={"absolute"} />
                    </Center> */}
                    <Textarea label={"Description"} value={formData.des} minRows={6} onChange={(val) => setFormData({
                        ...formData,
                        des: val.target.value
                    })} />
                </Stack>
            </Group>
            <WidgetContentEditor text="UPDATE" loading={loading} content={formData.content} onClik={(val) => {
                const d = _.cloneDeep(formData)
                d.content = val
                onClick(d)
            }} />
        </Stack>
    </>
}