import { val_listIamage } from "@/app_modules/global/val/list_image";
import { useHookstate } from "@hookstate/core";
import { ActionIcon, Box, Image, Loader, Modal, SimpleGrid } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { funGetListImageGalery } from "../fun/list_image_galery";

export default function ViewModalListImage() {
    const listImage = useHookstate(val_listIamage)
    const [open, setOpen] = useState(false)
    const [client, setClient] = useState(false)

    useShallowEffect(() => {
        if (window) {
            funGetListImageGalery().then((v) => listImage.set(v))
            setClient(true)
        }

    }, [])
    if (!client) return <Loader />
    return <>
        <ActionIcon size={36} onClick={() => setOpen(true)}>
            <MdAdd size={24} />
        </ActionIcon>
        <Modal opened={open} onClose={() => setOpen(false)}>
            <SimpleGrid cols={4}>
                {listImage.value.map((v, k) => <Box key={k}>
                    <Image src={`/img/${v.id}.${v.ext}`} alt="" width={"100%"} />
                </Box>)}
            </SimpleGrid>
        </Modal>
    </>
}