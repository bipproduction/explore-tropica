import { Flex, Image, Stack, Text, UnstyledButton } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function WidgetMediaSosial({ listMediaSosial }: { listMediaSosial: any[] }) {
    const router = useRouter()
    return <>
        <Stack spacing={"lg"}>
            {listMediaSosial.map((v, k) => <UnstyledButton key={k} onClick={() => router.push(v.url)}>
                <Flex gap={"lg"} align={"center"}>
                    <Image src={`/img/${v.img}`} alt="" width={50} height={50} radius={200} />
                    <Text>{v.title}</Text>
                </Flex>
            </UnstyledButton>)}
        </Stack>
    </>
}