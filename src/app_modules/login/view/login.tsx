'use client'
import { Button, Group, PasswordInput, Stack, Text, TextInput, Title } from "@mantine/core";
import _ from "lodash";
import { useState } from "react";
import toasts from 'react-simple-toasts'
import { funLogin } from "../fun/login";
import { useRouter } from "next/navigation";


export default function ViewLogin() {
    const router = useRouter()
    const [value, setValue] = useState({
        email: "",
        password: ""
    })

    async function onLogin() {
        if (_.values(value).includes("")) return toasts("uncomplete form")
        const lgn = await funLogin(value)
        if (!lgn.success) return toasts(lgn.message)
        return router.replace('/explore-admin')
    }
    return <Group p={"lg"} position="center">
        <Stack p={"lg"} spacing={"lg"} maw={720}>
            <Title>EXPLORE TROPICA</Title>
            <Text maw={300}>Masukkan Email Dan Password Yang Telah Diberikan Kepada Anda</Text>
            <TextInput placeholder="email" onChange={(val) => {
                setValue({
                    ...value,
                    email: val.target.value
                })
            }} />
            <PasswordInput placeholder="password" onChange={(val) => {
                setValue({
                    ...value,
                    password: val.target.value
                })
            }} />
            <Button onClick={onLogin}>LOGIN</Button>
        </Stack>
    </Group>
}