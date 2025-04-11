import { OverviewChart } from "@/feature/overviewChart";

import { Box, Title, rem } from "@mantine/core";

export const Overview = ({ className }: { className?: string }) => {
    return (
        <Box className={className} h="300" bg="bg.9" p="15" style={{ borderRadius: rem(8) }}>
            <Title pos="absolute" order={2} c="white">
                Статистика
            </Title>
            <OverviewChart />
        </Box>
    );
};
