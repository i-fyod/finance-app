import { Box, Group, NumberFormatter, Text, Title, rem } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import { getSummary } from "@/shared/api";

export const Card = () => {
    const { data } = useQuery({
        queryKey: ["summary"],
        queryFn: getSummary,
    });
    return (
        <Box h="170" bg="dark.7" style={{ borderRadius: rem(8) }}>
            <Box h="66%" p="10 15">
                <Title order={2} c="white" tt="uppercase" fw="600" mb="30">
                    my card
                </Title>

                <Title order={2} c="white" w="600" component={Text}>
                    3475 7381 3759 ****
                </Title>
            </Box>

            <Box
                h="33%"
                p="7 15"
                bg="rgba(255,255,255,0.1)"
                style={{ borderRadius: `0 0 ${rem(8)} ${rem(8)}` }}>
                <Group justify="space-between">
                    <Title order={3} fz="11" c="gray.5">
                        Текущий баланс
                    </Title>
                    <Title order={3} fz="11" c="gray.5">
                        Дата
                    </Title>
                </Group>
                <Group justify="space-between">
                    <Title order={2} c="white">
                        <NumberFormatter
                            suffix="₽"
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={2}
                            value={data?.balance}
                        />
                    </Title>
                    <Title order={2} c="white">
                        {`0${new Date().getUTCMonth()} / ${String(new Date().getUTCFullYear() + 5).slice(2, 4)}`}
                    </Title>
                </Group>
            </Box>
        </Box>
    );
};
