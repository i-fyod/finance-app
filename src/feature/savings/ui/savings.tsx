import { Center, ScrollArea, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import { Invoice } from "@/entities/invoice";

import { getSavings } from "@/shared/api";

interface Props {
    height: string;
    top?: number;
}

export const Savings = ({ height, top }: Props) => {
    const { data } = useQuery({
        queryKey: ["savings"],
        queryFn: getSavings,
        select: (data) => data.savings,
    });
    return (
        <>
            {data && data.length > 0 ? (
                <ScrollArea
                    h={height}
                    top={top}
                    offsetScrollbars
                    scrollbarSize={3}
                    scrollHideDelay={200}>
                    {data.map((invoice) => (
                        <Invoice key={invoice.savingId} data={invoice} />
                    ))}
                </ScrollArea>
            ) : (
                <Title order={2} h="100%" component={Center}>
                    Вы пока не открыли накопительный счет
                </Title>
            )}
        </>
    );
};
