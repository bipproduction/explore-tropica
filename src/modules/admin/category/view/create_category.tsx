'use client'

import { funCreateCategory } from "@/modules/admin/category/fun/create_category"
import WidgetPopListImage from "@/modules/widget/pop_list_image"
import { ActionIcon, Box, Button, Flex, Group, Image, Stack, TextInput, Textarea, Title } from "@mantine/core"
import { showNotification } from '@mantine/notifications'
import _ from "lodash"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdArrowBackIos } from "react-icons/md"

export function ViewCreateCategory() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [dataForm, setDataForm] = useState({
        "title": "",
        "img": "",
        "des": ""
    })

    async function onCreate() {
        setIsLoading(true)
        if (_.values(dataForm).includes("")) {
            setIsLoading(false)
            return showNotification({
                title: "Info",
                message: "isi semuanya"
            })
        }

        const c = await funCreateCategory(dataForm as any)
        if (!c.success) {
            setIsLoading(false)
            return showNotification({ message: c.message })
        }

        setIsLoading(false)
        return showNotification({
            message: c.message
        })

    }

    return <>
        <Stack>
            <Flex>
                <ActionIcon onClick={() => router.back()}>
                    <MdArrowBackIos size={36} />
                </ActionIcon>
            </Flex>
            <Title>Create Category</Title>
            <Group>
                <Stack>
                    <TextInput onChange={(val) => setDataForm({
                        ...dataForm,
                        title: val.target.value
                    })} placeholder="Title" title="Name" />
                    <WidgetPopListImage varian="circle" onClick={(val) => {
                        setDataForm({
                            ...dataForm,
                            img: val
                        })
                    }} />
                    {/* <Box w={300} h={300} bg={"gray"}>
                        {!_.isEmpty(dataForm?.img) && <Image width={"100%"} src={`/img/${dataForm?.img}`} alt="" />}
                    </Box> */}
                    <Textarea onChange={(val) => setDataForm({
                        ...dataForm,
                        des: val.target.value
                    })} placeholder="description" minRows={6} />
                    <Button loading={isLoading} onClick={onCreate}>CREATE</Button>
                </Stack>
            </Group>
        </Stack>
    </>
}