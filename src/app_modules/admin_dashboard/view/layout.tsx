'use client'
import { ActionIcon, AppShell, Box, Burger, Button, Center, Flex, Group, Header, MediaQuery, NavLink, Navbar, ScrollArea, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdHome, MdList, MdLogout, MdPlusOne, MdRemoveRedEye } from 'react-icons/md'
import { notifications } from '@mantine/notifications';
import { funLogout } from "@/app_modules/login/fun/logout";

export default function ViewAdminDashboardLayout({ children, userId }: { children: any, userId: any }) {
    const [opened, setOpened] = useState(false);
    const router = useRouter()
    return <AppShell
        header={<Header height={{ base: 50, md: 70 }} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        mr="xl"
                    />
                </MediaQuery>
                <Flex justify={"space-between"} w={"100%"}>
                    <Text>Explore Tropica</Text>
                    <ActionIcon onClick={() => router.push('/')}>
                        <MdRemoveRedEye size={24} />
                    </ActionIcon>
                </Flex>
            </div>
        </Header>}
        navbar={<Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            <Navbar.Section grow component={ScrollArea}>
                <NavLink icon={<MdHome size={24} />} label={"Dashboard"} onClick={() => {
                    setOpened(false)
                    router.push("/explore-admin")
                }} />
                <NavLink icon={<MdPlusOne size={24} />} label={"Create New Content"} onClick={() => {
                    setOpened(false)
                    router.push("/explore-admin/create")
                }} />
                <NavLink icon={<MdList size={24} />} label={"List Content"} onClick={() => {
                    setOpened(false)
                    router.push("/explore-admin/content")
                }} />
            </Navbar.Section>
            <Navbar.Section>
                <NavLink icon={<MdLogout size={24} />} label={"LOGOUT"} onClick={() => {
                    funLogout()
                }} />
            </Navbar.Section>
        </Navbar>}
    >
        {children}
    </AppShell>
}

