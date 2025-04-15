import { Box, Divider, Group, NumberFormatter, Text, Title } from "@mantine/core";

interface Props {
    data: {
        type: "income" | "expenses";
        description: string;
        name: string;
        cost: number;
    };
}
export const Transaction = ({ data }: Props) => {
    return (
        <>
            <Group justify="space-between" align="center">
                <Box>
                    <Text mb="7" fz="12" c="gray.4">
                        {data.description}
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
