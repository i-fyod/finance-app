import { ActivityChart } from "@/feature/activityChart";

import { Box, Title, rem } from "@mantine/core";

export const Activity = ({ className }: { className?: string }) => {
    return (
        <Box className={className} bg="dark.6" p="15" style={{ borderRadius: rem(8) }}>
            <Title pos="absolute" order={2} c="white">
                Активность
            </Title>
            <ActivityChart />
        </Box>
    );
};
