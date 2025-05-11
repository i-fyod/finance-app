import { Group } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import { QuickLookPanel } from "@/entities/quickLookPanel";

import { getSummary } from "@/shared/api";

export const MiniPanels = ({ className }: { className?: string }) => {
    const { data } = useQuery({
        queryKey: ["summary"],
        queryFn: getSummary,
    });

    return (
        <Group justify="space-between" className={className!}>
            <QuickLookPanel title="Баланс" value={data?.balance!} />
            <QuickLookPanel title="Доход" value={data?.income!} />
            <QuickLookPanel title="Затраты" value={data?.expenses!} />
            <QuickLookPanel title="Накопления" value={data?.savings!} />
        </Group>
    );
};
