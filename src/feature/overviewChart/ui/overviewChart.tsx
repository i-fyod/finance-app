import { LineChart } from "@mantine/charts";
import { rem } from "@mantine/core";

export const data = [
    {
        date: "Янв",
        Income: 900,
        Expenses: 200,
    },
    {
        date: "Фев",
        Income: 70,
        Expenses: 650,
    },
    {
        date: "Мар",
        Income: 240,
        Expenses: 1080,
    },
    {
        date: "Апр",
        Income: 600,
        Expenses: 600,
    },
    {
        date: "Май",
        Income: 1100,
        Expenses: 850,
    },
];

export const OverviewChart = () => {
    return (
        <LineChart
            h="265"
            data={data}
            dataKey="date"
            series={[
                { name: "Expenses", label: "Затраты", color: "yellow.9" },
                { name: "Income", label: "Доход", color: "green.9" },
            ]}
            curveType="bump"
            tickLine="none"
            withLegend
            textColor="gray.4"
            unit="₽"
            tooltipAnimationDuration={200}
            styles={{
                tooltip: {
                    border: "none",
                    borderRadius: rem(8),
                },
                legendItemName: { color: "gray.4", fontSize: rem(12) },
            }}
        />
    );
};
