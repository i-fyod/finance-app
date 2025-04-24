import { Main } from "@/pages/main";
import { Transactions } from "@/pages/transactions";

import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import {
    Navigate,
    Outlet,
    createRootRoute,
    createRoute,
    createRouter,
} from "@tanstack/react-router";

import { Navigation } from "@/widgets/navigation";

import { queryClient, theme } from "@/shared/lib";
import { UuidInit } from "@/shared/ui/uuid";

const rootRoute = createRootRoute({
    component: () => (
        <MantineProvider defaultColorScheme="dark" theme={theme}>
            <QueryClientProvider client={queryClient}>
                <UuidInit />
                <Navigation>
                    <Outlet />
                </Navigation>
            </QueryClientProvider>
        </MantineProvider>
    ),
});

const mainRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "dashboard",
    component: Main,
});

export const transactionsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "transactions",
    component: Transactions,
});

const notFoundRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "*",
    component: () => {
        return <Navigate to="/dashboard" replace />;
    },
});

export const router = createRouter({
    routeTree: rootRoute.addChildren([mainRoute, transactionsRoute, notFoundRoute]),
});
