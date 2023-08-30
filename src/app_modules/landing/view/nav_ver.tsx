import { Stack, UnstyledButton } from "@mantine/core";

export default function ViewNavVer() {
    return <Stack spacing={"lg"}>
        <UnstyledButton>Home</UnstyledButton>
        <UnstyledButton>Destination</UnstyledButton>
        <UnstyledButton>Contact Us</UnstyledButton>
        <UnstyledButton>Blog</UnstyledButton>
    </Stack>
}