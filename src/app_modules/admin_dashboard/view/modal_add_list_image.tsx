import { val_listIamage } from "@/app_modules/global/val/list_image";
import { useHookstate } from "@hookstate/core";
import { ActionIcon, Box, Button, Image, Loader, Modal, SimpleGrid, UnstyledButton } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { funGetListImageGalery } from "../fun/list_image_galery";

export default function ViewModalListImage({ onSelected }: { onSelected: (val: string) => void }) {
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
        <Button leftIcon={<MdAdd />} onClick={() => setOpen(true)}>
            Select Image
        </Button>
        <Modal opened={open} onClose={() => setOpen(false)}>
            <SimpleGrid cols={4}>
                {listImage.value.map((v, k) => <Box key={k}>
                    <UnstyledButton onClick={() => {
                        onSelected(`${v.id}.${v.ext}`)
                        setOpen(false)
                    }}>
                        <Image src={`/img/${v.id}.${v.ext}`} alt="" width={"100%"} />
                    </UnstyledButton>
                </Box>)}
            </SimpleGrid>
        </Modal>
    </>
}