'use client'
import { Space, Title } from "@mantine/core";
import ViewGaleryUpload from "./galery_upload";
import ViewListImage from "./list_image";

export default function ViewGalery() {
    return <>
        <Title>Galery</Title>
        <ViewGaleryUpload />
        <Space h={100} />
        <ViewListImage />
    </>
}