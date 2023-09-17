'use client'

import { funFindCategoryById } from "@/modules/admin/category/fun/find_category_by_id"
import { funUpdateCategory } from "@/modules/admin/category/fun/fun_update_category"
import WidgetPopListImage from "@/modules/widget/pop_list_image"
import { ActionIcon, Box, Button, CloseButton, Flex, Group, Image, Stack, TextInput, Textarea, Title } from "@mantine/core"
import { useShallowEffect } from "@mantine/hooks"
import { showNotification } from "@mantine/notifications"
import _ from "lodash"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdArrowBackIos } from "react-icons/md"

export default function ViewUpdateCategory({ id }: { id: string }) {
    const router = useRouter()
    const [loading, setloading] = useState(false)
    const [dataCat, setDataCat] = useState({
        id: "",
        title: "",
        img: "",
        des: ""
    })

    useShallowEffect(() => {
        onLoad()
    }, [])

    async function onLoad() {
        const d = await funFindCategoryById(id)
        setDataCat(d as any)
    }

    async function onUpdate() {
        setloading(true)
        if (_.values(dataCat).includes("")) {
            setloading(false)
            return showNotification({ message: "lengkapi semuanya" })
        }
        const u = await funUpdateCategory(dataCat)
        if (!u.success) {
            setloading(false)
            return showNotification({ message: u.message })
        }
        setloading(false)
        return showNotification({ message: u.message })
    }
    return <>
        <Stack >
            <Flex gap={"lg"} align={"center"}>
                <ActionIcon onClick={router.back}>
                    <MdArrowBackIos size={36} />
                </ActionIcon>
                <Title>Update Category</Title>
            </Flex>
            {/* {<Title>{id}</Title>} */}
            {/* {JSON.stringify(dataCat)} */}
            {!_.values(dataCat).includes("") && <Group>
                <Stack>
                    <TextInput value={dataCat.title} onChange={(val) => setDataCat({
                        ...dataCat,
                        title: val.target.value
                    })} />
                    <WidgetPopListImage varian="circle" onClick={(val) => {
                        setDataCat({
                            ...dataCat,
                            img: val
                        })
                    }} />
                    {/* <Box w={300} h={300}>
                        <Image src={`/img/${dataCat?.img}`} alt="" />
                    </Box> */}
                    <Textarea minRows={6} value={dataCat.des} onChange={((val) => setDataCat({
                        ...dataCat,
                        des: val.target.value
                    }))} />
                    <Button onClick={onUpdate} loading={loading}>Update</Button>
                </Stack>
            </Group>}
        </Stack>
    </>
}