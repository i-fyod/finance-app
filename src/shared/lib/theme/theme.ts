import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
    colors: {
        bg: [
            "#f3f4f6",
            "#e6e6e6",
            "#c9cacc",
            "#abadb3",
            "#91949e",
            "#808491",
            "#777c8c",
            "#656a7a",
            "#282C35",
            "#1A1C22",
        ],
        yellow: [
            "#fdfce4",
            "#f8f6d3",
            "#f0ecaa",
            "#e7e17c",
            "#e0d856",
            "#dbd33e",
            "#d9d02f",
            "#c0b820",
            "#aaa317",
            "#FFC01E",
        ],
        green: [
            "#e6ffee",
            "#d3f9e0",
            "#a8f2c0",
            "#7aea9f",
            "#54e382",
            "#3bdf70",
            "#2bdd66",
            "#1bc455",
            "#0bae4a",
            "#1FCB4F",
        ],
    },
    headings: {
        fontWeight: "500",
        sizes: {
            h1: { fontWeight: "600", fontSize: rem(25) },
            h2: { fontSize: rem(15) },
            h3: { fontWeight: "400", fontSize: rem(12) },
        },
    },
});
