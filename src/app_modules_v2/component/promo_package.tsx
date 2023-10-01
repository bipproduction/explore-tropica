import { BackgroundImage, Button, Flex, Group, Paper, SimpleGrid, Space, Stack, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import { MdEmail, MdTimer, MdWhatsapp } from "react-icons/md";

export default function ComPromoPackage() {
    const router = useRouter()
    const phoneWa = '6281252272867'
    return <>
        <Stack py={70}>
            <BackgroundImage src='/tour/senja.png'>
                <SimpleGrid py={"100"} p={"md"} cols={{
                    base: 1,
                    md: 2,
                    lg: 2,
                    sm: 1
                }}>
                    <Stack>
                        <Title c={"white"}>
                            Promo Paket Tour Bali
                        </Title>
                        <Text c={"white"}>Temukan promo-promo menarik untuk paket tour dan aktivitas wisata di Bali. Kunjungi tempat-tempat indah dan aktivitas wisata terbaik yang akan memanjakan liburan anda bersama BaliTripon - The Tours Partner in Bali</Text>
                    </Stack>
                    <Stack align='end'>
                        <Paper p={"md"} bg={"blue"}>
                            <Stack>
                                <Title c={"white"}>OPERATIONAL 7 Days Weeks</Title>
                                {[
                                    { "hari": "SENIN", "jam": "08.00 - 21.00" },
                                    { "hari": "SELASA", "jam": "08.00 - 21.00" },
                                    { "hari": "RABU", "jam": "08.00 - 21.00" },
                                    { "hari": "KAMIS", "jam": "08.00 - 21.00" },
                                    { "hari": "JUMAT", "jam": "08.00 - 19.00" },
                                    { "hari": "SABTU", "jam": "08.00 - 21.00" },
                                    { "hari": "MINGGU", "jam": "08.00 - 23.00" },
                                ].map((v, k) => <Flex key={k}  >
                                    <Flex align={"center"} gap={"md"}>
                                        <MdTimer size={24} color={'white'} />
                                        <Text c={"white"} >{v.hari}</Text>
                                    </Flex>
                                    <Text c={"white"} >{v.jam}</Text>
                                </Flex>)}
                                <Space p={"lg"} />
                                <Button bg={"white"} onClick={() => router.push(`https://wa.me/${phoneWa}`)} >
                                    <Flex gap={"md"} align={"center"} c='green' p={"md"}   >
                                        <MdWhatsapp size={24} />
                                        <Title order={4}>+6281252272867</Title>
                                    </Flex>
                                </Button>
                                <Button bg={"white"} onClick={() => router.push(`https://wa.me/6281252272867`)} >
                                    <Flex gap={"md"} align={"center"} c='green' p={"md"}   >
                                        <MdWhatsapp size={24} />
                                        <Title order={4}>+6281338137061</Title>
                                    </Flex>
                                </Button>
                                <Button bg={"white"} onClick={() => router.push(`https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=suryabisnisakun@gmail.com`)} >
                                    <Flex gap={"md"} align={"center"} c='green' p={"md"}   >
                                        <MdEmail size={24} />
                                        <Title order={4}>suryabisnisakun@gmail.com</Title>
                                    </Flex>
                                </Button>
                            </Stack>
                        </Paper>

                    </Stack>
                </SimpleGrid>
            </BackgroundImage>
        </Stack>
    </>
}