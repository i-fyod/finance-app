import { router } from "@/app/routes";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { RouterProvider } from "@tanstack/react-router";

import "./styles/main.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
