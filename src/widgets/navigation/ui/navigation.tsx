import { AppShell, Burger, Center, Group, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useLocation, useNavigate } from "@tanstack/react-router";

import { MenuItem } from "@/entities/menuItem";

import { DashboardIcon, TransactionsIcon } from "@/shared/ui/icons";
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
    const navigate = useNavigate();

    return (
        <AppShell
            header={{ height: headerHeight }}
            navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: !opened } }}
            padding="25"
            withBorder={false}>
            <AppShell.Header hiddenFrom="sm" bg="dark.6">
                <Group h="100%" px="35">
                    <Burger opened={opened} onClick={toggle} size="sm" />
                    <Logo>Finance</Logo>
                </Group>
            </AppShell.Header>{" "}
            <AppShell.Navbar p="25 0 0 35" bg="dark.6">
                <Logo mb={37.5} visible={false}>
                    Finance
                </Logo>
                <MenuItem
                    icon={<DashboardIcon active={page === "/dashboard"} />}
                    isActive={page === "/dashboard"}
                    onClick={() => {
                        navigate({ to: "/dashboard" });
                    }}>
                    Главная
                </MenuItem>
                <MenuItem
                    icon={<TransactionsIcon active={page === "/transactions"} />}
                    isActive={page === "/transactions"}
                    onClick={() => {
                        navigate({ to: "/transactions" });
                    }}>
                    Транзакции
                </MenuItem>
            </AppShell.Navbar>
            <AppShell.Main component={Center}>{children}</AppShell.Main>
        </AppShell>
    );
}
