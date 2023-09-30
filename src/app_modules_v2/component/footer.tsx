import { Paper, Stack, Text } from "@mantine/core";

export default function ComFooter() {
    return <>
        <Paper py={"75"} bg={"gray.4"}>
            <Stack p={"lg"} align='center'>
                <Text>Copyright © 2023 Explore Tropica</Text>
                <Text>Tentang Kami | Syarat & Ketentuan | Testimoni</Text>
                <Text>Managed by Makuro Studio & Explore Tropica</Text>
            </Stack>
        </Paper>
    </>
}