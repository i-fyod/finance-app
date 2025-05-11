import { Savings } from "@/feature/savings";

import { Box, Title, rem } from "@mantine/core";

export const Payment = ({ className }: { className?: string }) => {
    return (
        <Box
            className={className}
            h="255"
            miw="300"
            bg="dark.6"
            p="15"
            style={{ borderRadius: rem(8) }}>
            <Title pos="absolute" order={2} c="white">
                Накопления
            </Title>
            <Savings height="85%" top={40} />
        </Box>
    );
};
