import { val_edit_mode } from "@/app_modules/global/val/edit_mode";
import { useHookstate } from "@hookstate/core";
import { Button, Flex, Grid, TextInput, UnstyledButton } from "@mantine/core";
import { MdEdit, MdSearch } from 'react-icons/md'

export default function ViewNavHor() {
    const { value: isEdit, set: setEdit } = useHookstate(val_edit_mode)
    return (<>
        <Flex w={"100%"} align={"center"}>
            <Flex gap={"lg"} align={"center"} p={"md"}>
                <UnstyledButton>Home</UnstyledButton>
                <UnstyledButton>Destination</UnstyledButton>
                <UnstyledButton>Contact Us</UnstyledButton>
                <UnstyledButton>Blog</UnstyledButton>
            </Flex>
            <Flex justify={"end"} >
                <TextInput placeholder="search" icon={<MdSearch />} radius={100} />
                <Button onClick={() => setEdit(!isEdit)} leftIcon={<MdEdit />}>Edit</Button>
            </Flex>
        </Flex>
    </>)
}