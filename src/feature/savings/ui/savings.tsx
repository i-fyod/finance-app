import { ScrollArea } from "@mantine/core";
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
        <ScrollArea h={height} top={top} offsetScrollbars scrollbarSize={3} scrollHideDelay={200}>
            {data ? data.map((invoice) => <Invoice key={invoice.savingId} data={invoice} />) : null}
        </ScrollArea>
    );
};
