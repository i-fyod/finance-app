import { BarChart } from "@mantine/charts";
import { rem } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import { getStats } from "@/shared/api";
import { formatNumberWithSuffix } from "@/shared/lib";

export const ActivityChart = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["weeklyStats"],
        queryFn: () => getStats("weekly"),
    });

    return (
        <BarChart
            h="225"
            data={isLoading ? [] : data!}
            dataKey="date"
            valueFormatter={formatNumberWithSuffix}
            series={[
                { name: "expenses", label: "Траты", color: "yellow.9" },
                { name: "income", label: "Заработок", color: "green.9" },
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
