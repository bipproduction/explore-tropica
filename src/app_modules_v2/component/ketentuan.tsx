import { Group, Paper, Stack, Text, Title } from "@mantine/core";

export default function ComKetentuan() {
    const phoneWa = '6281252272867'
    return <>
        <Paper p={"md"} bg={"blue"} >
            <Group>
                <Stack gap={"md"} py={70}>
                    <Stack gap={0}>
                        <Title c={"white"}>Ketentuan</Title>
                        {[
                            "PROMO Hingga Desember 2023 ( 24 desember – 10 Januhari 2023 kena surcharge room 350rb/room/night )",
                            "Harga di atas berdasarkan per orang untuk harga inclusive",
                            "Harus Memesan satu hari sebelum Muka",
                            "Untuk pemesanan di butuhkan deposit untuk memastikan pesanan dan booking hotel",
                            "Konfirmasi pemesanan tidak bisa tanpa adanya bukti pembayaran tertulis yang sudah di validasi yang dikirimkan ke Bali Tripon",
                            "Harga Tidak berlaku untuk High season",
                        ].map((v, k) => <Text c={"gray.2"} key={k}>- {v}</Text>)}
                    </Stack>
                    <Stack gap={0}>
                        <Title order={3} c={"white"}>
                            Cara Pemesanan Paket liburan Bali 4 Hari 3 Malam Termasuk Hotel
                        </Title>
                        {[
                            "Silahkan kirim permintaan melalui Form Pemesanan",
                            "Pemesanan minimal dilakukan sehari sebelumnya.",
                            `Dan pemesanan dadakan silahkan hubungi kami via Whatsapp +${phoneWa}`,
                            "Jika pemesanan paket wisata melalui email exploretropica@gmail.com akan di balas secepatnya sesuai hari dan Jam Kerja ( senin – sabtu pukul 8.00 am sampai 18.00 pm )",
                        ].map((v, k) => <Text c={"gray.2"} key={k}>- {v}</Text>)}
                    </Stack>
                </Stack>
            </Group>
        </Paper>
    </>
}