import { Flex, Grid, TextInput, UnstyledButton } from "@mantine/core";
import { MdSearch } from 'react-icons/md'

export default function ViewNavHor() {
    return (<>
        <Grid>
            <Grid.Col span={"auto"}>
                <Flex gap={"lg"} align={"center"} p={"md"}>
                    <UnstyledButton>Home</UnstyledButton>
                    <UnstyledButton>Destination</UnstyledButton>
                    <UnstyledButton>Contact Us</UnstyledButton>
                    <UnstyledButton>Blog</UnstyledButton>
                </Flex>
                
            </Grid.Col>
            <Grid.Col span={"content"} p={"md"}>
                <TextInput placeholder="search" icon={<MdSearch />} radius={100} />
            </Grid.Col>
        </Grid>
    </>)
}