import { useShallowEffect } from "@mantine/hooks"
import { useState } from "react"
import { funListCategory } from "../fun/list_category"
import { Button, Loader, Menu, NavLink, Select, Stack, Text, TextInput, UnstyledButton } from "@mantine/core"
import { MdArrowDropDown } from "react-icons/md"

export default function WidgetSelectCategory({ value, onChange }: { value?: any, onChange: (val: any) => void }) {

    const [listCategory, setListCategory] = useState<any[]>([])
    const [opened, setOpened] = useState(false)
    const [selected, setSelsected] = useState(value)

    useShallowEffect(() => {
        funListCategory().then(setListCategory)
    }, [])

    return <>
        {/* {JSON.stringify(listCategory)} */}
        <Menu withArrow opened={opened} closeOnClickOutside={true}>
            <Menu.Target>
                <TextInput
                    rightSectionWidth={40}
                    label={"Category"}
                    placeholder="select category"
                    onChange={() => { }}
                    value={listCategory.find((v) => v.id === selected)?.title ?? ""}
                    onClick={() => setOpened(!opened)}
                    rightSection={<MdArrowDropDown />}
                />
            </Menu.Target>
            <Menu.Dropdown bg={"dark"} >
                <Stack w={300} c={"gray"}>
                    {listCategory.map((v, k) => <NavLink onClick={() => {
                        setOpened(false)
                        setSelsected(v.id)
                        onChange(v.id)
                    }} c={"gray"} key={k} label={v.title} />)}
                </Stack>
            </Menu.Dropdown>
        </Menu>
    </>
}