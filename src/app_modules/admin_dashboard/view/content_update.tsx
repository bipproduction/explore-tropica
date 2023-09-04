'use client'
import { ActionIcon, Box, Button, Flex, Group, Image, Loader, Stack, TextInput, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import { MdArrowBackIos } from "react-icons/md";
import ViewModalListImage from "./modal_add_list_image";
import { Link, RichTextEditor } from "@mantine/tiptap";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import { useEditor } from "@tiptap/react";
import Subscript from "@tiptap/extension-subscript";
import Highlight from "@tiptap/extension-highlight";
import { useState } from "react";
import { useShallowEffect } from "@mantine/hooks";
import { funContentUpdate } from "../fun/content_update";
import toast from "react-simple-toasts";

export default function ViewContentUpdate({ data }: { data: any }) {
    const router = useRouter()
    const [title, setTitle] = useState<string | null>(data.title)
    const [urlImage, setUrlImage] = useState<string | null>(data.img)
    const [loading, setLoading] = useState(false)
    const [client, setClient] = useState(false)
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            Subscript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
        content: data.des,
    });

    async function onSave() {
        const dataUpdate = {
            id: data.id,
            title: title,
            content: editor?.getHTML(),
            img: urlImage
        }

        const apa = await funContentUpdate({ data: dataUpdate })
        if (apa) toast("success")
    }

    useShallowEffect(() => {
        if (window) setClient(true)
    }, [])


    if (!client) return <><Loader /></>
    return <>
        <Stack>
            <ActionIcon onClick={() => router.back()} >
                <MdArrowBackIos size={36} />
            </ActionIcon>
            <Title>Edit Content</Title>
            {/* {JSON.stringify(data)} */}
            <Stack p={"lg"} spacing={"lg"}>
                <Title order={3}>Title</Title>
                <TextInput value={title!} label={"title"} placeholder='Title' onChange={(val) => setTitle(val.target.value)} />
                <Flex align={"end"}>
                    {/* <TextInput w={300} onChange={(val) => setUrlImage(val.target.value)} label={"url image"} placeholder='url gambar' /> */}
                    <ViewModalListImage onSelected={(val) => {
                        setUrlImage(`/img/${val}`)
                    }} />
                </Flex>
                {urlImage && <Box pos={"relative"} maw={300}>
                    <Image maw={"100%"} src={`${urlImage}`} alt='' />
                </Box>}
                <Title order={3}>Content</Title>
                <RichTextEditor editor={editor} >
                    <RichTextEditor.Toolbar sticky stickyOffset={60}>
                        <RichTextEditor.ControlsGroup>
                            <RichTextEditor.Bold />
                            <RichTextEditor.Italic />
                            <RichTextEditor.Underline />
                            <RichTextEditor.Strikethrough />
                            <RichTextEditor.ClearFormatting />
                            <RichTextEditor.Highlight />
                            <RichTextEditor.Code />
                        </RichTextEditor.ControlsGroup>

                        <RichTextEditor.ControlsGroup>
                            <RichTextEditor.H1 />
                            <RichTextEditor.H2 />
                            <RichTextEditor.H3 />
                            <RichTextEditor.H4 />
                        </RichTextEditor.ControlsGroup>

                        <RichTextEditor.ControlsGroup>
                            <RichTextEditor.Blockquote />
                            <RichTextEditor.Hr />
                            <RichTextEditor.BulletList />
                            <RichTextEditor.OrderedList />
                            <RichTextEditor.Subscript />
                            <RichTextEditor.Superscript />
                        </RichTextEditor.ControlsGroup>

                        <RichTextEditor.ControlsGroup>
                            <RichTextEditor.Link />
                            <RichTextEditor.Unlink />
                        </RichTextEditor.ControlsGroup>

                        <RichTextEditor.ControlsGroup>
                            <RichTextEditor.AlignLeft />
                            <RichTextEditor.AlignCenter />
                            <RichTextEditor.AlignJustify />
                            <RichTextEditor.AlignRight />
                        </RichTextEditor.ControlsGroup>
                    </RichTextEditor.Toolbar>

                    <RichTextEditor.Content />
                </RichTextEditor>
                <Group position='right'>
                    <Button loading={loading} onClick={onSave}>UPDATE</Button>
                </Group>
            </Stack>
        </Stack>
    </>
}