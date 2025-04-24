import { LineChart } from "@mantine/charts";
import { rem } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import { getStats } from "@/shared/api";

export const OverviewChart = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["yearlyStats"],
        queryFn: () => getStats("yearly"),
    });

    return (
        <LineChart
            h="265"
            data={isLoading ? [] : data!}
            dataKey="date"
            series={[
                { name: "expenses", label: "Затраты", color: "yellow.9" },
                { name: "income", label: "Доход", color: "green.9" },
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
