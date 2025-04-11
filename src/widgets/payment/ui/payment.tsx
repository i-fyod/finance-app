import { Box, ScrollArea, Title, rem } from "@mantine/core";

import { Invoice } from "@/entities/invoice";

export const data = [
    {
        name: "Английский язык",
        progress: 300.53,
        targetAmount: 12000,
    },
    {
        name: "Интернет",
        progress: 799,
        targetAmount: 800,
    },
    {
        name: "Коммуналка",
        progress: 1232.422,
        targetAmount: 1500.5,
    },
    {
        name: "Лекарства",
        progress: 21312,
        targetAmount: 32342,
    },
];
export const Payment = ({ className }: { className?: string }) => {
    return (
        <Box className={className} h="255" bg="bg.9" p="15" style={{ borderRadius: rem(8) }}>
            <Title pos="absolute" order={2} c="white">
                Платежи
            </Title>
            <ScrollArea h="85%" top={40} offsetScrollbars scrollbarSize={3} scrollHideDelay={200}>
                {data.map((invoice) => (
                    <Invoice data={invoice} />
                ))}
            </ScrollArea>
        </Box>
    );
};
