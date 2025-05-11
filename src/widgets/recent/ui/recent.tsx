import { Box, Center, ScrollArea, Title, rem } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import { Transaction } from "@/entities/transaction";

import { getTransactions } from "@/shared/api";

export const Recent = ({ className }: { className?: string }) => {
    const { data } = useQuery({
        queryKey: ["latestTransactions"],
        queryFn: getTransactions,
        select: (data) => data.data[0].transactions,
    });

    return (
        <Box className={className} h="600" bg="dark.6" p="15" style={{ borderRadius: rem(8) }}>
            <Title pos="absolute" order={2} c="white">
                Последние транзакции
            </Title>
            {data ? (
                <ScrollArea
                    h="95%"
                    top={40}
                    offsetScrollbars
                    scrollbarSize={3}
                    scrollHideDelay={200}>
                    {data.map((transaction) => (
                        <Transaction key={transaction.transactionId} data={transaction} />
                    ))}
                </ScrollArea>
            ) : (
                <Title order={2} h="100%" component={Center}>
                    Здесь пока нет транзакций
                </Title>
            )}
        </Box>
    );
};
