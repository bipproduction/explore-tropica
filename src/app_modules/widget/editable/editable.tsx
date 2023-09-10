import { val_edit_mode } from "@/app_modules/global/val/edit_mode";
import { useHookstate } from "@hookstate/core";
import { ActionIcon, Box, Flex, Popover } from "@mantine/core";
import { MdEdit } from "react-icons/md";
import WidgetEditor from "../editor/editor";

export default function WidgetEditable({ children, data, onSave, option }:
    {
        children: (val: string) => any,
        data: string,
        onSave: (text?: string, html?: string) => void,
        option?: {
            heading?: boolean,
            color?: boolean,
            bold?: boolean,
            list?: boolean,
            alig?: boolean,
            link?: boolean
        },
    }) {
    const { value: isEdit, set: setEdit } = useHookstate(val_edit_mode)
    return <Box >
        <Flex align={"center"} gap={"lg"}>
            <Box style={{
                border: isEdit?"2px dashed gray":""
            }}>
                {children(data)}
            </Box>
            {isEdit && <Popover trapFocus withArrow>
                <Popover.Target>
                    <ActionIcon bg={"white"} radius={100}>
                        <MdEdit size={36} color={"black"} />
                    </ActionIcon>
                </Popover.Target>
                <Popover.Dropdown>
                    <WidgetEditor option={option} content={data} onSave={onSave} />
                </Popover.Dropdown>
            </Popover>}
        </Flex>
    </Box>
}