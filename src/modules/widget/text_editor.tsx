'use client'
import { Editor } from 'react-draft-wysiwyg';
import './../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { ContentState, EditorState, convertFromHTML, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Button, Group, Paper, Stack } from '@mantine/core';
import { useState } from 'react';
import { useShallowEffect } from '@mantine/hooks';

const contentBlocks = convertFromHTML('<p>Lorem ipsum ' +
  'dolor sit amet, consectetur adipiscing elit. Mauris tortor felis, volutpat sit amet ' +
  'maximus nec, tempus auctor diam. Nunc odio elit,  ' +
  'commodo quis dolor in, sagittis scelerisque nibh. ' +
  'Suspendisse consequat, sapien sit amet pulvinar  ' +
  'tristique, augue ante dapibus nulla, eget gravida ' +
  'turpis est sit amet nulla. Vestibulum lacinia mollis  ' +
  'accumsan. Vivamus porta cursus libero vitae mattis. ' +
  'In gravida bibendum orci, id faucibus felis molestie ac.  ' +
  'Etiam vel elit cursus, scelerisque dui quis, auctor risus.</p>');

const sampleEditorContent = ContentState.createFromBlockArray(contentBlocks as any);

export default function TextEditor({ content }: { content: string }) {
    const [editorState, setEditorState] = useState<EditorState>(sampleEditorContent as any)

    useShallowEffect(() => {

    }, [])
    return <>
        <Stack>
            <Paper shadow='sm' withBorder>
                <Editor editorStyle={{
                    // backgroundColor: "ligh",
                    padding: "8px"
                }} editorState={editorState} onEditorStateChange={(val) => setEditorState(val)} />
            </Paper>
            <Group position='right'>
                <Button onClick={() => {
                    const data = draftToHtml(convertToRaw(editorState.getCurrentContent()))
                    
                    console.log(data)
                }} >Tekan</Button>
            </Group>
        </Stack>
    </>
}