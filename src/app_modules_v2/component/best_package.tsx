import { Button, Image, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function ComBestPackage({ data }: { data: any[] }) {
    const router = useRouter()

    return <>
        <Stack p={"md"} gap={"lg"}>
            <Title c={"blue"}>BEST PACKAGE</Title>
            <SimpleGrid spacing={"sm"} cols={{
                base: 1,
                lg: 4,
                md: 2,
                sm: 1
            }}>
                {data.map((v, k) => <Paper
                    withBorder
                    key={k}>
                    <Stack>
                        <Image src={'https://peristiwa.info/wp-content/uploads/2020/12/332DF260-3BF1-4BBA-9266-58CB9982ED38.jpeg'} alt='' />
                        <Stack p={"sm"}>
                            <Text h={50} lineClamp={2}>{v.title}</Text>
                            {/* <Text fz={12} h={200} lineClamp={3} >{parser(v.des)}</Text> */}
                            <Button onClick={() => router.push(`/package/${v.id}`)} >
                                More
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>)}
            </SimpleGrid>
        </Stack>
    </>
}