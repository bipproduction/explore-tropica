'use client'
import { routeAdmin } from "@/modules/route";
import { ActionIcon, Box, Button, Flex, Group, Image, Stack } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { funListGalery } from "./fun/list_image";
import { MdDelete, MdRemove } from "react-icons/md";
import { funDeleteGalery } from "./fun/delete_image";

export default function AdminGalery() {
    const router = useRouter()
    const [listData, setListData] = useState<any[] | null>(null)

    useShallowEffect(() => {
        funListGalery().then(val => {
            setListData(val)
        })
    }, [])
    return <>
        <Stack>
            <Group position="right">
                <Button onClick={() => router.push(routeAdmin.admin_galery_create)}>Add Image</Button>
            </Group>
            <WidgetImage listData={listData} />
        </Stack>
    </>
}

function WidgetImage({ listData }: { listData: any[] | null }) {
    const router = useRouter()
    return <>
        <Flex gap={"lg"} wrap={"wrap"}>
            {listData && listData.map((v, k) => <Box pos={"relative"} bg={"gray"} w={200} h={200} key={k}>
                <Image src={`/img/${v.id}.${v.ext}?size=100`} alt="" width={"100%"} pos={"absolute"} />
                <Group position="right">
                    <ActionIcon onClick={() => router.push(routeAdmin.admin_galery_delete + `?id=${v.id}`)} variant="gradient" radius={100} bg={"red"} >
                        <MdDelete />
                    </ActionIcon>
                </Group>
            </Box>)}
        </Flex>
    </>
}