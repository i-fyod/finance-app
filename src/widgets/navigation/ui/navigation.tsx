import { AppShell, Burger, Center, Group, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useLocation } from "@tanstack/react-router";

import { MenuItem } from "@/entities/menuItem";

import { DashBoard } from "@/shared/ui/icons";
import { Logo } from "@/shared/ui/logo";

export function Navigation({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure();
    const page = useLocation().pathname;
    const headerHeight = useMatches({
        base: 70,
        sm: 0,
        md: 0,
        lg: 0,
        xl: 0,
    });
    return (
        <AppShell
            header={{ height: headerHeight }}
            navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: !opened } }}
            padding="25"
            withBorder={false}>
            <AppShell.Header hiddenFrom="sm" bg="bg.9">
                <Group h="100%" px="35">
                    <Burger opened={opened} onClick={toggle} size="sm" />
                    <Logo>Finance</Logo>
                </Group>
            </AppShell.Header>{" "}
            <AppShell.Navbar p="25 0 0 35" bg="bg.9">
                <Logo mb={37.5} visible={false}>
                    Finance
                </Logo>
                <MenuItem
                    icon={<DashBoard active={page === "/dashboard"} />}
                    isActive={page === "/dashboard"}>
                    Главная
                </MenuItem>
            </AppShell.Navbar>
            <AppShell.Main bg="bg.8" component={Center}>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}
