import { val_edit_mode } from "@/app_modules/global/val/edit_mode";
import { useHookstate } from "@hookstate/core";
import { Button, Flex, Grid, Paper, Stack, TextInput, UnstyledButton } from "@mantine/core";
import { useRouter } from "next/navigation";
import { MdAccountCircle, MdEdit, MdSearch } from 'react-icons/md'

export default function ViewNavHor({ isEditable }: { isEditable: boolean }) {
    const { value: isEdit, set: setEdit } = useHookstate(val_edit_mode)
    const router = useRouter()
    return (<>
        <Flex w={"100%"} align={"center"}>
            <Flex gap={"lg"} align={"center"} p={"md"}>
                <UnstyledButton>Home</UnstyledButton>
                <UnstyledButton>Destination</UnstyledButton>
                <UnstyledButton>Contact Us</UnstyledButton>
                <UnstyledButton>Blog</UnstyledButton>
            </Flex>
            <Flex justify={"end"} align={"center"} >
                <TextInput placeholder="search" icon={<MdSearch />} radius={100} />
                {isEditable && <Paper bg={"dark"} p={"md"} pos={"fixed"} right={20} bottom={20} shadow="lg" radius={10}>
                    <Stack spacing={4} align={"center"}>
                        <Button onClick={() => router.push('/explore-admin')} fullWidth compact leftIcon={<MdAccountCircle size={24} />} radius={100} variant={'gradient'} color='blue'>Admin</Button>
                        <Button fullWidth compact variant="gradient" radius={100} mx={"md"} onClick={() => setEdit(!isEdit)} leftIcon={<MdEdit />}>Edit</Button>
                    </Stack>
                </Paper>}
            </Flex>
        </Flex>
    </>)
}