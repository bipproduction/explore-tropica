import { val_listIamage } from "@/app_modules/global/val/list_image";
import { useHookstate } from "@hookstate/core";
import { ActionIcon, Box, Group, Image, SimpleGrid, Space, Title } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { funGetListImageGalery } from "../../fun/list_image_galery";
import { val_update_list_image } from "@/app_modules/global/val/updata_list_image";
import { MdClose } from "react-icons/md";
import { funDeleteImage } from "../../fun/delete_image";
import _ from "lodash";

export default function ViewListImage() {
    const listImage = useHookstate(val_listIamage)
    const updateImage = useHookstate(val_update_list_image)

    useShallowEffect(() => {
        loadData()

        // if (updateImage.value) {
        //     loadData()
        // }

    }, [])

    async function loadData() {
        const listGam = await funGetListImageGalery()
        listImage.set(listGam)
    }
    return <>
        <Title>List Image</Title>
        <Space h={50} />
        <SimpleGrid cols={6} spacing={"md"} p={"md"} bg={"gray.1"}>
            {listImage.value.map((v, k) => <Box key={k} pos={"relative"}>
                <Group pos={"absolute"} right={4} top={4} style={{ zIndex: 10 }}>
                    <ActionIcon radius={100} bg={"orange"} onClick={async () => {
                        const del = await funDeleteImage({ id: v.id })
                        const ls = _.cloneDeep(listImage.value) as any[]
                        const ls2 = ls.filter((val) => val.id != del)
                        listImage.set(ls2)
                    }}>
                        <MdClose />
                    </ActionIcon>
                </Group>
                <Image src={`/img/${v.id}.${v.ext}`} alt="" width={"100%"} />
            </Box>)}
        </SimpleGrid>
    </>
}