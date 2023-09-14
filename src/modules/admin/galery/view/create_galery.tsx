'use client'

import { Group, Text, useMantineTheme, rem, Stack, Box, Button, Image, Flex, Title } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useState } from 'react';
import BackButton from '@/modules/widget/back_button';
import { funCreateGalery } from '../fun/create_galery';
import { showNotification } from '@mantine/notifications';

export default function ViewCreateGalery() {
    const theme = useMantineTheme();
    const [img, setImg] = useState<string | null>(null)
    return (
        <Stack>
            <Flex align={"center"} gap={"lg"}>
                <BackButton />
                <Title>Create Image</Title>
            </Flex>
            {img ? <Group position='center'>
                <Stack>
                    <Box maw={720}>
                        <Image src={`/img/${img}`} alt='' />
                    </Box>
                </Stack>
            </Group> : <Group position='center'>
                <Dropzone
                    maw={720}
                    onDrop={async (files) => {
                        if (files && files[0]) {
                            const formData = new FormData()
                            formData.append("file", files[0])

                            const d = await funCreateGalery(formData)
                            if (!d.success) return showNotification({ message: d.message })
                            setImg(`/img/${d.data.}`)
                            return showNotification({ message: d.message })

                        } else {
                            showNotification({
                                message: "error"
                            })
                        }
                    }}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={3 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                >
                    <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                            <IconUpload
                                size="3.2rem"
                                stroke={1.5}
                                color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                size="3.2rem"
                                stroke={1.5}
                                color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconPhoto size="3.2rem" stroke={1.5} />
                        </Dropzone.Idle>

                        <div>
                            <Text size="xl" inline>
                                Drag images here or click to select files
                            </Text>
                            <Text size="sm" color="dimmed" inline mt={7}>
                                Attach as many files as you like, each file should not exceed 5mb
                            </Text>
                        </div>
                    </Group>
                </Dropzone>
            </Group>}

            <Group position='right'>
                <Button>SAVE</Button>
            </Group>
        </Stack>
    );
}