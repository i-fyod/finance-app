import { Group } from "@mantine/core";

import { QuickLookPanel } from "@/entities/quickLookPanel";

export const MiniPanels = ({ className }: { className?: string }) => {
    return (
        <Group justify="space-between" className={className}>
            <QuickLookPanel title="Баланс" />
            <QuickLookPanel title="Доход" />
            <QuickLookPanel title="Затраты" />
            <QuickLookPanel title="Накопления" />
        </Group>
    );
};
