import { Box, ScrollArea, Title, rem } from "@mantine/core";

import { Transaction } from "@/entities/transaction";

export const data = [
    {
        type: "income",
        description: "Перевод",
        name: "Matheus Ferrero",
        cost: 540,
    },
    {
        type: "expenses",
        description: "Перевод",
        name: "Floyd Miles",
        cost: 395,
    },
    {
        type: "expenses",
        description: "Супермаркеты",
        name: "Пятерочка",
        cost: 297,
    },

    {
        type: "income",
        description: "Супермаркеты",
        name: "Дикси",
        cost: 297,
    },
    {
        type: "expenses",
        description: "Фастфуд",
        name: "MacDonalds",
        cost: 103213466.9524,
    },
];

export const Recent = ({ className }: { className?: string }) => {
    return (
        <Box className={className} h="600" bg="bg.9" p="15" style={{ borderRadius: rem(8) }}>
            <Title pos="absolute" order={2} c="white">
                Recent Transactions
            </Title>
            <ScrollArea h="95%" top={40} offsetScrollbars scrollbarSize={3} scrollHideDelay={200}>
                {data.map((transaction) => (
                    <Transaction data={transaction} />
                ))}
            </ScrollArea>
        </Box>
    );
};
