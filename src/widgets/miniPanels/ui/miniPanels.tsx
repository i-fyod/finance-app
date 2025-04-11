import { Group } from "@mantine/core";

import { QuickLookPanel } from "@/entities/quickLookPanel";

export const MiniPanels = ({ className }: { className?: string }) => {
    return (
        <Group justify="space-between" className={className}>
            <QuickLookPanel title="Balance" />
            <QuickLookPanel title="Income" />
            <QuickLookPanel title="Expenses" />
            <QuickLookPanel title="Savings" />
        </Group>
    );
};
