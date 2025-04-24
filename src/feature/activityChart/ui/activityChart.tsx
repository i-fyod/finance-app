import { BarChart } from "@mantine/charts";
import { rem } from "@mantine/core";

import { formatNumberWithSuffix } from "@/shared/lib";

export const data = [
    {
        date: "Пн",
        Earning: 1200,
        Spent: 400,
    },
    {
        date: "Вт",
        Earning: 70,
        Spent: 650,
    },
    {
        date: "Ср",
        Earning: 240,
        Spent: 1080,
    },
    {
        date: "Чт",
        Earning: 600,
        Spent: 600,
    },
    {
        date: "Пт",
        Earning: 1100,
        Spent: 850,
    },
];

export const ActivityChart = () => {
    return (
        <BarChart
            h="225"
            data={data}
            dataKey="date"
            valueFormatter={formatNumberWithSuffix}
            series={[
                { name: "Spent", label: "Траты", color: "yellow.9" },
                { name: "Earning", label: "Заработок", color: "green.9" },
            ]}
            type="stacked"
            tickLine="none"
            gridAxis="y"
            withLegend
            textColor="gray.4"
            maxBarWidth={8}
            withTooltip={false}
            styles={{
                legendItemName: { color: "gray.4", fontSize: rem(12) },
            }}
        />
    );
};
