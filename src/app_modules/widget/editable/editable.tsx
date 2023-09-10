import { val_edit_mode } from "@/app_modules/global/val/edit_mode";
import { useHookstate } from "@hookstate/core";
import { ActionIcon, Box, Flex, Popover } from "@mantine/core";
import { MdEdit } from "react-icons/md";
import WidgetEditor from "../editor/editor";

export default function WidgetEditable({ children, data }: { children: (val: string) => any, data: string }) {
    const { value: isEdit, set: setEdit } = useHookstate(val_edit_mode)
    return <Box >
        <Flex align={"center"} gap={"lg"}>
            {children(data)}
            {isEdit && <Popover trapFocus withArrow>
                <Popover.Target>
                    <ActionIcon bg={"white"} radius={100}>
                        <MdEdit size={36} color={"black"} />
                    </ActionIcon>
                </Popover.Target>
                <Popover.Dropdown>
                    <WidgetEditor content={data}/>
                </Popover.Dropdown>
            </Popover>}
        </Flex>
    </Box>
}