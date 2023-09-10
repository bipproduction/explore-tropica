import { ActionIcon, Group, NumberInput, Popover, Text, TextInput } from "@mantine/core";
import { useState } from "react";
import { MdCheck, MdClose } from "react-icons/md";

export default function WidgetFontSize({ onClose }: { onClose: (val: any) => any }) {
    const [open, setOpen] = useState(false)
    const [valSize, setValSize] = useState(12)
    return <Popover opened={open} onClose={() => setOpen(false)} withArrow trapFocus >
        <Popover.Target>
            <ActionIcon onClick={() => setOpen(true)} >
                <span>Fz</span>
            </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown bg={"dark"}>
            <Group>
                <NumberInput onChange={(val) => setValSize(+val)} placeholder="12" rightSection={<Text>pt</Text>} />
                <ActionIcon onClick={() => setOpen(false)}>
                    <MdClose />
                </ActionIcon>
                <ActionIcon onClick={() => {
                    setOpen(false)
                    onClose(valSize)
                }}>
                    <MdCheck />
                </ActionIcon>
            </Group>
        </Popover.Dropdown>
    </Popover>
}