import { Group, Notification, Stack, Text, rem } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useState } from 'react';
import { TbPhoto, TbUpload, TbX } from 'react-icons/tb'
import { funImageUpload } from '../../fun/image_upload';
import _ from 'lodash';
import toast from 'react-simple-toasts';
import { useHookstate } from '@hookstate/core';
import { val_listIamage } from '@/app_modules/global/val/list_image';
export default function ViewGaleryUpload() {
    const [loading, setloading] = useState(false)
    const listImage = useHookstate(val_listIamage)
    const [isError, setIsError] = useState(false)
    return <>
        <Stack spacing={"lg"}>
            {isError && <Notification icon={<TbX />} color='red' >
                ERROR ! File Terlalu Besar
            </Notification>}
            <Dropzone
                loading={loading}
                onDrop={async (files) => {
                    setIsError(false)
                    setloading(true)
                    if (!files || _.isEmpty(files) || !files[0]) return setloading(false), toast("tidsk ada yang dipulih")
                    const fd = new FormData()
                    fd.append('file', files[0])
                    const upl = await funImageUpload({ formData: fd })
                    if (!upl) return toast("ERROR file terlalu besar"), setIsError(true)
                    setloading(false)
                    toast("success")
                    const data = upl.data
                    const ls = _.cloneDeep(listImage.value) as any[]
                    ls.push(data)
                    listImage.set(ls)
                }}
                onReject={(files) => console.log('rejected files', files)}
                // maxSize={5 * 1024 * 1024}
                accept={IMAGE_MIME_TYPE}
            >
                <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                    <Dropzone.Accept>
                        <TbUpload
                            size="3.2rem"
                            stroke={1.5}
                        />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                        <TbX
                            size="3.2rem"
                            stroke={1.5}
                        />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                        <TbPhoto size="3.2rem" stroke={1.5} />
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
        </Stack>
    </>
}