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
    const [loading, setLoading] = useState(false)
    return (
        <Stack>
            <Flex align={"center"} gap={"lg"} justify={'space-between'}>
                <Flex>
                    <BackButton />
                    <Title>Create Image</Title>
                </Flex>
                {img && <Button onClick={() => {
                    setImg(null)
                }}>ADD</Button>}
            </Flex>
            {img ? <Group position='center'>
                <Stack>
                    <Box maw={720}>
                        <Image src={`${img}`} alt='' />
                    </Box>
                </Stack>
            </Group> : <Group position='center'>
                <Dropzone
                    loading={loading}
                    maw={720}
                    onDrop={async (files) => {
                        setLoading(true)
                        if (files && files[0]) {

                            const formData = new FormData()
                            formData.append("file", files[0])

                            const d: any = await funCreateGalery(formData)
                            setLoading(false)
                            if (!d.success) return showNotification({ message: d.message })
                            setImg(`/img/${d.data.id}.${d.data.ext}`)
                            return showNotification({ message: d.message })

                        } else {
                            setLoading(false)
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
        </Stack>
    );
}