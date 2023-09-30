'use client'
import { BackgroundImage, Button, Flex, Group, Image, Paper, SimpleGrid, Space, Stack, Text, Title } from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { useShallowEffect } from '@mantine/hooks';
import { useState } from 'react';
import { MdTimer, MdWhatsapp } from "react-icons/md";
import ComFormOrder from '../component/form_order';
import ComBestPackage from "../component/best_package";
import ComKetentuan from "../component/ketentuan";
import ComPromoPackage from "../component/promo_package";
import ComFooter from "../component/footer";

const listNemu = [
    "PAKET PROMO",
    "PAKET TOUR",
    "SEWA MOBIL",
    "AKTIVITAS WISATA",
    "OBJEK WISATA",
    "BLOGS",
    "TESTIMONI",
    "BOOKING",
]



const listPaket = [
    {
        title: "Hari 1 : Penjemputan di Bandara Ngurah Rai + Tour Setengah Hari ke Bali Selatan",
        data: [
            "TBA : Jemput di Bandara Bali + Check in Hotel",
            "13.00 : Start Tour ke Bali Selatan",
            "14.00 : Mengunjungi Pantai Melasti atau pantai Pandawa",
            "16.00 : Mengunjungi Uluwatu",
            "18.30 : Pantai Jimbaran untuk makan malam romantis ( personal )",
        ]
    },
    {
        title: "Hari 2 : Nusa Penida Tour",
        data: [
            "06.30 : Penjemputan dari hotel dan di antar ke pelabuhan sanur",
            "07.30 : Naik fast boat ke Nusa Penida",
            "08.00 : Tiba di darmaga Nusa Penida + Start tour",
            "09.00 : Mengunjungi Pantai Kelingking",
            "11.30 : Istirahat untuk Makan siang ( personal )",
            "13.10 : Mengunjungi Broken Beach",
            "14.00 : Mengunjungi Angel billabong",
            "15.00 : Mengunjungi pantai crystal bay",
            "16.30 : Bali ke Darmaga untuk naik kapal cepat menuju Bali",
            "17.10 : Tiba di pelabuhan sanur dan antar balik ke Hote + Acara bebas",

        ]
    },
    {
        title: "Hari 3 Option I : Tour ke Bedugul, Handara Gate atau Bloom Garden, La Brisa Canggu atau Pantai Seminyak",
        data: [
            "07.30 : Sarapan Pagi di Hotel",
            "09.00 : Penjemputan dari hotel untuk melakukan jadwal tour hari ke 3",
            "11.00 : Mengunjungi Pura Ulun Danu Beratan",
            "12.30 : Istirahat untuk makan siang ( personal )",
            "14.00 : Mengunjungi Handara Gate/ Bloom garden",
            "16.00 : Menikmati suasana pantai dan sunset di Beach club La Brisa Canggu / pantai Kuta",
            "18.30 : Bali ke hotel",
        ]
    },
    {
        title: "Hari 3 Option II : Desa Penglipuran + Kintamani + Tegalalang + Air Terjun Tegenungan",
        data: [
            "07.30 : Sarapan Pagi di Hotel",
            "09.00 : Penjemputan dari hotel untuk melakukan jadwal tour hari ke 3",
            "11.00 : Mengunjungi Desa Penglipuran",
            "12.30 : Mengunjungi Kintamani",
            "12.45 : Istirahat untuk makan siang di Kintamani ( personal )",
            "14.00 : Mengunjungi Tegalalang",
            "15.00 : Mengunjungi kebun kopi",
            "18.30 : Bali ke hotel",
        ]
    },
    {
        title: "Hari 4 : Tour Tanah Lot + Belanja Oleh oleh Krisna / Joger + Antar ke Bandara Ngurah Rai",
        data: [
            "07.30 : Sarapan pagi di Hotel",
            "TBA : Penjemputan tour ke Tanah Lot di sesuaikan dengan jadwal penerbangan pulang",
            "TBA : Belanja oleh oleh Bali ( Krisna ) / Joger",
            "TBA : Antar ke Bandara Ngurah Rai ( Paket tour 4 hari 3 malam selesai )",
        ]
    },
    {
        title: "Hari – 1 : Penjemputan Bandara Ngurah Rai + Check in Hotel + Tour Tanah Lot",
        data: [
            "Penjemputan di Bandara Ngurah Rai sesuai jadwal pesawat anda",
            "Chek in hotel",
            "Mengunjungi Pura Tanah Lot ( Sunset )",
            "Makan Malam",
            "Balik ke hotel",
            "( Makan Malam ) Durasi 6 – 8 jam ( cocok buat anda yang tiba di atas jam 11 pagi )",
        ]
    },
    {
        title: "Hari – 3 : Desa Seni Ubud + Kintamani + Desa Wisata Penglipuran",
        data: [
            "Sarapan di Hotel",
            "Penjemputan di hotel menuju Desa Tradisional di Ubud Pengrajin Perak dan Batik",
            "Tegalalang Sawah Bertingkat dengan Ayunan",
            "Kintamani Gunung Batur – Tempat Kopi Cantik dan Makan Siang",
            "Mengunjungi Perkebunan kopi",
            "Desa Wisata Penglipuran",
            "( Sarapan, Makan Siang, Makan Malam,  ) Durasi 10 – 11 jam",
        ]
    },
    {
        title: "Hari – 4 : Check out hotel + Belanja Oleh-oleh + Antar Bali ke Bandara",
        data: [
            "Sarapan Pagi di Hotel",
            "Santai menunggu penjemputan dan chek out dari hotel",
            "Belanja Oleh Oleh Krisna – Joger",
            "Pengantaran Balik ke Bandara Ngurah Rai",
        ]
    },
    {
        title: "Harga Promo Paket Hemat 4 hari 3 malam – option I",
        data: [
            "Hotel Berbintang di Dekat Pantai Kuta",
            "3x Sarapan Pagi",
            "3x Makan Siang",
            "3x makan malam ( 1x di Jimbaran )",
            "Transport ( Sopir- Bensin)",
            "Tiket masuk ke tempat Destinasi",
            "Antar dan jemput bandara",
            "Gratis Tiket Banana Boat ( watersport )",
            "Sopir Merangkap photographer",
            "Parkir",
            "Air mineral",
        ]
    }
]


export default function PageMain({ data }: { data: any[] }) {
    const isClient = useState(false)
    useShallowEffect(() => {
        if (window) return isClient[1](true)
    }, [])

    if (!isClient[0]) return <></>
    return <>
        <Stack >
            <Flex p={"sm"} bg={"blue"} gap={"sm"} wrap={"wrap"} align={"center"} justify={"center"}>
                <Image width={70} height={70} src={"/tour/logo.png"} alt="" radius={100} />
                {listNemu.map((v, k) => <Button w={150} key={k} variant="white">
                    {v}
                </Button>)}
            </Flex>
            <SimpleGrid py={70} cols={{
                base: 1,
                sm: 1,
                lg: 2
            }} p={"md"}>
                <Paper bg={"blue"} shadow="sm" withBorder>
                    <Image height={400} width={"100%"} src={'/tour/nusa_penida.png'} alt="" />
                    <Stack gap={"lg"} p={"md"} px={70} py={70}>
                        <Title c={"white"} fs={"24"} fw={"bold"}>
                            Promo Paket liburan Bali 4 Hari 3 Malam Termasuk Hotel dan Tour Nusa Penida
                        </Title>
                        <Text c={"gray.2"}>
                            Halo sobat travel, mau liburan ke Bali tapi bingung dengan harga dan bagaimana menyusun liburan biar lebih murah? Sekarang sobat tidak perlu bingung karena kami Bali Tripon sudah menyiapkan harga Promo Paket Liburan Bali 4 hari 3 malam. Promo paket ini sudah termasuk hotel dan tour selama di Bali.

                            Paket tour ini kami sediakan dalam rangka menyambut dibukanya kembali pariwisata bali. Dimana anda akan dijemput dari bandara bali dengan layanan private. Dan langsung diantar ke hotel dulu untuk check-in, sebelum melanjutkan tour ke Bali Selatan, untuk hari pertama.

                            Hari ke dua penjemputan dari hotel jam 6.30 untuk melakukan tour ke Nusa Penida dengan mengunjungi Pantai Kelingking, Pantai Broken, Pantai Angel Bilabong dan Crystal bay. Tour ini sudah termasuk tiket fast boat dan semua biaya tiket dan mobil serta bbm di Nusa Penida.

                            Hari ketiga, karena paket promo ini sudah termasuk hotel dan breakfast, silahkan menikamati sarapan pagi dulu sebelum dijemput untuk melanjutkan program tour hari ke-3. Tour kali ini akan mengunjungi Pura Ulun Danu Beratan, Handara gate atau Bloom Garden. Kemudian diantar ke La Brisa Canggu atau Pantai Kuta tergantung permintaan, setelah itu balik ke hotel.

                            Kemudian hari terakhir disesuaikan dengan jam keberangkatan pesawat, tempat yang akan di kunjungi Tanah Lot, Belanja oleh-oleh Bali, Joger dan antar ke Bandara Ngurah Rai.
                        </Text>
                    </Stack>
                </Paper>
                <Paper bg={"gray.1"}>
                    <Image width={"100%"} height={400} src={"/tour/rafting.png"} alt="" />
                    <Group py={70}>
                        {/* disini form order */}
                        <ComFormOrder />
                    </Group>
                </Paper>
            </SimpleGrid>
            <Stack p={"md"}>
                <SimpleGrid cols={{
                    base: 1,
                    sm: 1,
                    lg: 2
                }}>
                    <Paper withBorder pos={"relative"}>
                        <Image radius={8} height={500} src={"/tour/atv.png"} alt='' />
                        <Stack gap={"lg"} py={70}>
                            <Stack p={"md"} px={50}>
                                <Stack>
                                    <Title>
                                        Jadwal Paket Liburan Bali 4 Hari 3 malam ( Terlaris )
                                    </Title>
                                    <Text c={"gray"}>
                                        Berikut adalah estimasi jadwal liburan yang akan anda dapatkan dalam promo paket liburan Bali 4 hari 3 malam. Semua tour dilakukan dengan private bersama sopir Cum Guide yang berpengalaman.
                                    </Text>
                                </Stack>
                                {listPaket.slice(0, 4).map((v, k) => <Stack key={k} gap={0}>
                                    <Title order={3}>{v.title}</Title>
                                    {v.data.map((v2, k2) => <Text c={"gray"} key={k2}>{v2}</Text>)}
                                </Stack>
                                )}
                            </Stack>
                        </Stack>
                    </Paper>
                    <Paper withBorder pos={"relative"}>
                        <Image radius={8} height={500} src={"/tour/sepeda.png"} alt='' />
                        <Stack p={"md"} px={"50"} py={70}>
                            {listPaket.slice(4).map((v, k) => <Stack key={k} gap={0}>
                                <Title order={3}>{v.title}</Title>
                                {v.data.map((v2, k2) => <Text c={"gray"} key={k2}>{v2}</Text>)}
                            </Stack>
                            )}
                        </Stack>
                    </Paper>
                </SimpleGrid>
            </Stack>

            {/* promo package tour */}
            <ComPromoPackage />
            {/* List best Package */}
            <ComBestPackage data={data} />
            {/* ketentuan */}
            <ComKetentuan />
            {/* footer */}
            <ComFooter />
        </Stack>
    </>
}