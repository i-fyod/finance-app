import { Box, Divider, Group, NumberFormatter, Text, Title, rem } from "@mantine/core";

import { ITransaction } from "@/shared/types";

interface Props {
    data: ITransaction;
    isActive?: boolean;
    enabled?: boolean;
    onClick?: () => void;
}

export const Transaction = ({ data, onClick, isActive = false, enabled = false }: Props) => {
    return (
        <>
            <Group
                justify="space-between"
                align="center"
                p={isActive ? "6" : "0 6"}
                bg={isActive ? "dark.7" : "transparent"}
                onClick={onClick}
                style={
                    enabled ? { borderRadius: rem(8), cursor: "pointer" } : { borderRadius: rem(8) }
                }>
                <Box>
                    <Text mb="7" fz="12" c="gray.4">
                        {data.category}
                    </Text>
                    <Title order={2} c="white">
                        {data.name}
                    </Title>
                </Box>
                <Text fw="500" fz="14" c={data.type === "income" ? "green.9" : "yellow.9"}>
                    <NumberFormatter
                        prefix={data.type === "income" ? "+ " : "- "}
                        suffix="₽"
                        value={data.cost}
                        thousandSeparator="."
                        decimalScale={2}
                        decimalSeparator=","
                        allowNegative={false}
                    />
                </Text>
            </Group>
            <Divider my="12" />
        </>
    );
};
