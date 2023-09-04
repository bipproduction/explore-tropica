'use client'
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { ActionIcon, Box, Button, Flex, Group, Image, Stack, TextInput, Title } from '@mantine/core';
import toast from 'react-simple-toasts';
import _ from 'lodash';
import { useState } from 'react';
import { funContentCreate } from '../fun/content_create';
import { MdAdd } from 'react-icons/md';
import ViewModalListImage from './modal_add_list_image';

export default function ViewContentEditor() {
    const [title, setTitle] = useState<string | null>(null)
    const [ctn, setCtn] = useState('ketik yang ingin anda ketik ...')
    const [urlImage, setUrlImage] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
        content: ctn,
    });

    async function onSave() {
        setLoading(true)
        if (!title || _.isEmpty(title)) return setLoading(false), toast("isi titlenya")
        if (!editor) return setLoading(false), toast("isi dahulu")
        if (!editor.getHTML() || _.isEmpty(editor.getHTML())) return setLoading(false), toast("tidak bisa meyimpan kosong")
        const content = editor.getHTML()
        const apa = await funContentCreate({
            title,
            content,
            img: urlImage
        })

        if (!apa.success) return setLoading(false), toast("error " + apa.message)
        toast(apa.message)
        setCtn('ketik yang ingin anda ketik ...')
        setTitle("")
        setLoading(false)
    }

    return (
        <Stack p={"lg"} spacing={"lg"}>
            <Title>Create New Content</Title>
            <Title order={3}>Title</Title>
            <TextInput label={"title"} placeholder='Title' onChange={(val) => setTitle(val.target.value)} />
            <Flex align={"end"}>
                <TextInput w={300} onChange={(val) => setUrlImage(val.target.value)} label={"url image"} placeholder='url gambar' />
                <ViewModalListImage />
            </Flex>
            {urlImage && <Box pos={"relative"} maw={300}>
                <Image maw={"100%"} src={urlImage} alt='' />
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
                <Button loading={loading} onClick={onSave}>SAVE</Button>
            </Group>
        </Stack>
    );
}