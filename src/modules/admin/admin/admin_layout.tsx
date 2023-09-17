'use client'
import { ActionIcon, AppShell, Button, Flex, Header, NavLink, Navbar, ScrollArea, Title } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { MdCategory, MdHome, MdImage, MdLogout, MdPages, MdPostAdd, MdRemoveRedEye, MdWeb } from 'react-icons/md'

const listmenu = [
    {
        lable: "Home",
        path: "/",
        icon: MdHome,
        active: "/"
    },
    {
        lable: "Category",
        path: "/category",
        icon: MdCategory,
        active: "//category"
    },
    {
        lable: "Page",
        path: "/page",
        icon: MdPages,
        active: "//page"
    },
    {
        lable: "Post",
        path: "/post",
        icon: MdPostAdd,
        active: "//post"
    },
    {
        lable: "Galery",
        path: "/galery",
        icon: MdImage,
        active: "//galery"
    },
    {
        lable: "Media Sosial",
        path: "/media-sosial",
        icon: MdImage,
        active: "//media-sosial"
    }
]

export default function ViewAdmin({ children }: { children: any }) {
    const [opened, setOpened] = useState(false)
    const router = useRouter()
    const path = usePathname()
    return <>
        <AppShell
            header={<Header height={60} bg={"dark"} >
                <Flex gap={"lg"} justify={"end"} p={"sm"} align={"center"}>
                    <ActionIcon onClick={() => router.push('/')}>
                        <MdRemoveRedEye size={36} />
                    </ActionIcon>
                </Flex>
            </Header>}
            navbar={<Navbar c={"white"} bg={"gray.8"} hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                <Navbar.Section p={"md"} >
                    <Title>Cici</Title>
                </Navbar.Section>
                <Navbar.Section grow component={ScrollArea}>
                    {listmenu.map((v, k) => <NavLink active={path.replace("admin", "") === v.active} key={k} icon={<v.icon />} c={"gray"} label={v.lable} onClick={() => {
                        router.push(`/admin${v.path}`)
                    }

                    } />)}
                </Navbar.Section>
                <Navbar.Section>
                    <Button fullWidth leftIcon={<MdLogout />} >Logout</Button>
                </Navbar.Section>
            </Navbar>}
        >
            {children}
        </AppShell>
    </>
}