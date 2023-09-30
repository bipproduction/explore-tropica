import { Button, Flex, Group, Select, Stack, Text, TextInput, Textarea, Title } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import _ from "lodash";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdDateRange, MdPeople } from "react-icons/md";
import moment from 'moment'

const listDewasa = Array.from(new Array(50), (v, k) => `${k + 1} Dewasa`)
const listAnak = Array.from(new Array(50), (v, k) => `${k + 1} Anak`)
const phoneWa = '6281252272867'

export default function ComFormOrder() {
    const router = useRouter()
    const formData = useState({
        date: "",
        adult: "",
        child: "",
        name: "",
        email: "",
        city: "",
        phone: "",
        note: ""

    })

    function onKirim() {
        const text = `
        *ORDER*
        Date        :${moment(formData[0].date).format("DD-MM-YY")}
        Dewasa      :${formData[0].adult}
        Anak-Anak   :${formData[0].child}
        Nama        :${formData[0].name}
        Kota        :${formData[0].city}
        Phone       :${formData[0].phone}
        Email       :${formData[0].email}
        Note        :${formData[0].note}
        `
        router.push(`https://wa.me/${phoneWa}?text=${encodeURIComponent(text)}`)
    }
    return <>
        <Stack gap={"lg"} p={"md"} px={70}>
            <Title>Pesan Tour Sekarang</Title>
            <DateInput onChange={(val) => formData[1]({
                ...formData[0],
                date: (val ?? "").toString()
            })} placeholder="Pilih Tanggal" rightSection={<MdDateRange />} label={"Tanggal Tour"} />
            <Flex gap={"md"}>
                <Select onChange={(val) => formData[1]({
                    ...formData[0],
                    adult: (val ?? "")
                })} placeholder="Pilih Paket" data={listDewasa} label={"jumlah dewasa"} rightSection={<MdPeople />} />
                <Select onChange={(val) => formData[1]({
                    ...formData[0],
                    child: val ?? ""
                })} placeholder="Pilih Paket" data={listAnak} label={"jumlah anak"} rightSection={<MdPeople />} />
            </Flex>
            <TextInput onChange={(val) => formData[1]({
                ...formData[0],
                name: val.target.value
            })} placeholder="Nama" label={"Nama (Wajib Diisi)"} />
            <TextInput onChange={(val) => formData[1]({
                ...formData[0],
                name: val.target.value
            })} placeholder="Email" label={"Email (Wajib Diisi)"} />
            <TextInput onChange={(val) => formData[1]({
                ...formData[0],
                email: val.target.value
            })} placeholder="Kota Asal" label={"Kota Asal"} />
            <TextInput onChange={(val) => formData[1]({
                ...formData[0],
                city: val.target.value
            })} placeholder="Phone" label={"Phone (Wajib Diisi)"} />
            <Textarea onChange={(val) => formData[1]({
                ...formData[0],
                note: val.target.value
            })} autosize label={"Info Tambahan"} minRows={8} />
            <Text>
                PENTING : Harap mengisi dengan data yang benar, email yang valid dan nomor telepon aktif yang dapat dihubungi.
            </Text>
            <Group>
                <Button onClick={onKirim} radius={100} >
                    PESAN SEKARANG
                </Button>
            </Group>
        </Stack>
    </>
}