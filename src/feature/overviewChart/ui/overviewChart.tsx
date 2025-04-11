import { LineChart } from "@mantine/charts";
import { rem, useMantineTheme } from "@mantine/core";

export const data = [
    {
        date: "Jan",
        Income: 900,
        Expenses: 200,
    },
    {
        date: "Feb",
        Income: 70,
        Expenses: 650,
    },
    {
        date: "Mar",
        Income: 240,
        Expenses: 1080,
    },
    {
        date: "Apr",
        Income: 600,
        Expenses: 600,
    },
    {
        date: "May",
        Income: 1100,
        Expenses: 850,
    },
];

export const OverviewChart = () => {
    const theme = useMantineTheme();
    return (
        <LineChart
            h="265"
            data={data}
            dataKey="date"
            series={[
                { name: "Income", color: "green.9" },
                { name: "Expenses", color: "yellow.9" },
            ]}
            curveType="bump"
            tickLine="none"
            withLegend
            textColor="gray.4"
            unit=" ₽"
            tooltipAnimationDuration={200}
            styles={{
                tooltip: {
                    backgroundColor: theme.colors.bg[8],
                    border: "none",
                    borderRadius: rem(8),
                },
                legendItemName: { color: theme.colors.gray[4], fontSize: rem(12) },
            }}
        />
    );
};
