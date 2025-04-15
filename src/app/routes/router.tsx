import { Main } from "@/pages/main";
import { Transactions } from "@/pages/transactions";

import { MantineProvider } from "@mantine/core";
import {
    Navigate,
    Outlet,
    createRootRoute,
    createRoute,
    createRouter,
} from "@tanstack/react-router";

import { Navigation } from "@/widgets/navigation";

import { theme } from "@/shared/lib";

const rootRoute = createRootRoute({
    component: () => (
        <MantineProvider defaultColorScheme="dark" theme={theme}>
            <Navigation>
                <Outlet />
            </Navigation>
        </MantineProvider>
    ),
});

const mainRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "dashboard",
    component: Main,
});

const transactionsRoute = createRoute({
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
