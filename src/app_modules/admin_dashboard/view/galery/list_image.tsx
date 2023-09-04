import { val_listIamage } from "@/app_modules/global/val/list_image";
import { useHookstate } from "@hookstate/core";
import { Box, Image, SimpleGrid, Title } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { funGetListImageGalery } from "../../fun/list_image_galery";
import { val_update_list_image } from "@/app_modules/global/val/updata_list_image";

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
        <SimpleGrid cols={6} spacing={"md"}>
            {listImage.value.map((v, k) => <Box key={k} pos={"relative"}>
                <Image src={`/img/${v.id}.${v.ext}`} alt="" width={"100%"} />
            </Box>)}
        </SimpleGrid>
    </>
}