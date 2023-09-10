import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { IconColorPicker } from '@tabler/icons-react';
import { Color } from '@tiptap/extension-color';
import { IconStar } from '@tabler/icons-react';
import FontSize from 'tiptap-extension-font-size';
import { Box, Button, Group, Stack, Text } from '@mantine/core';
import WidgetFontSize from '../font_size/font_size';


// const content =
//     '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';


export default function WidgetEditor({ content, option, onSave }: {
    content: string,
    option?: {
        heading?: boolean,
        color?: boolean,
        bold?: boolean,
        list?: boolean,
        alig?: boolean,
        link?: boolean
    },
    onSave: (text?: string, html?: string) => void
}) {

    const editor = useEditor({
        extensions: [
            StarterKit,
            Color,
            TextStyle,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            FontSize as any
        ],
        content,
    });
    return <Stack miw={300}>
        <RichTextEditor editor={editor}>
            <RichTextEditor.Toolbar sticky stickyOffset={60}>

                {option?.color && <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Color color="#F03E3E" />
                    <RichTextEditor.Color color="#7048E8" />
                    <RichTextEditor.Color color="#1098AD" />
                    <RichTextEditor.Color color="#37B24D" />
                    <RichTextEditor.Color color="#F59F00" />
                    <RichTextEditor.UnsetColor />
                </RichTextEditor.ControlsGroup>}

                {option?.bold && <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Bold />
                    <RichTextEditor.Italic />
                    <RichTextEditor.Underline />
                    <RichTextEditor.Strikethrough />
                    <RichTextEditor.ClearFormatting />
                    <RichTextEditor.Highlight />
                    <RichTextEditor.Code />
                </RichTextEditor.ControlsGroup>}

                {option?.heading && <RichTextEditor.ControlsGroup>
                    <RichTextEditor.H1 />
                    <RichTextEditor.H2 />
                    <RichTextEditor.H3 />
                    <RichTextEditor.H4 />
                    <WidgetFontSize onClose={(val) => {
                        const e = editor as any
                        e?.chain().focus().setFontSize('30px').run()
                    }} />
                </RichTextEditor.ControlsGroup>}


                {option?.list && <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Blockquote />
                    <RichTextEditor.Hr />
                    <RichTextEditor.BulletList />
                    <RichTextEditor.OrderedList />
                    <RichTextEditor.Subscript />
                    <RichTextEditor.Superscript />
                </RichTextEditor.ControlsGroup>}

                {option?.link && <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Link />
                    <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>}

                {option?.alig && <RichTextEditor.ControlsGroup>
                    <RichTextEditor.AlignLeft />
                    <RichTextEditor.AlignCenter />
                    <RichTextEditor.AlignJustify />
                    <RichTextEditor.AlignRight />
                </RichTextEditor.ControlsGroup>}

            </RichTextEditor.Toolbar>

            <RichTextEditor.Content />
        </RichTextEditor>
        <Group position='right'>
            <Button onClick={() => {
                const text = editor?.getText()
                const html = editor?.getHTML()
                onSave(text, html)
            }} variant='gradient'>SAVE</Button>
        </Group>
    </Stack>

}


// onClick={() => {
//     setOpn(true)
//     // const from = (editor?.state.selection.$from.pos ?? 1) - 1
//     // const to = (editor?.state.selection.$to.pos ?? 0) - 1
//     // const text = editor?.getText().substring(from as any, to)

//     // const data = `<h1><span style="color: #F59F00; apa kabarnya">xplore</span></h1>`
//     // editor?.commands.insertContent(data)

//     // const e = editor as any
//     // e?.chain().focus().setFontSize('30px').run()

// }}