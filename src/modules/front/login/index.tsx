'use client'
import { Button, Group, Paper, PasswordInput, Stack, TextInput, Title } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PageLogin({ login }: { login: ({ email, password }: { email: string, password: string }) => Promise<boolean> }) {
    const router = useRouter()
    const loading = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    return <>
        <Group position="center" >
            <Stack maw={720} p={'lg'}>
                <Paper p={"lg"} bg={"gray.0"}>
                    <Stack>
                        <Title>LOGIN</Title>
                        <TextInput placeholder="email" label={"email"} onChange={(val) => setFormData({
                            ...formData,
                            email: val.target.value
                        })} />
                        <PasswordInput placeholder="****" label={"password"} onChange={(val) => setFormData({
                            ...formData,
                            password: val.target.value
                        })} />
                        
                        <Button onClick={async () => {
                            loading[1](true)
                            const ap = await login({
                                email: formData.email,
                                password: formData.password
                            })
                            loading[1](false)
                            if (!ap) return showNotification({ message: "wrong email or password" })
                            return router.push('/admin')
                        }}>LOGIN</Button>
                    </Stack>
                </Paper>
            </Stack>
        </Group>
    </>
}