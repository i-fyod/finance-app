import { Group, NumberFormatter, Progress, Stack, Title } from "@mantine/core";

import { ExpensesIcon } from "@/shared/ui/icons";

interface Props {
    data: {
        name: string;
        progress: number;
        targetAmount: number;
    };
}

export const Invoice = ({ data }: Props) => {
    return (
        <Group mb="25" justify="space-between">
            <ExpensesIcon />
            <Stack w="245" justify="space-between">
                <Group justify="space-between">
                    <Title order={3} fw="500" c="white">
                        {data.name}
                    </Title>
                    <Title order={3} component="p">
                        <NumberFormatter
                            suffix="₽ "
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={2}
                            value={data.progress}
                            style={{ fontWeight: 500, color: "white" }}
                        />
                        <NumberFormatter
                            prefix="/ "
                            suffix="₽"
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={2}
                            value={data.targetAmount}
                        />
                    </Title>
                </Group>
                <Progress
                    color="green.9"
                    size="sm"
                    radius="1.5"
                    value={(data.progress / data.targetAmount) * 100}
                />
            </Stack>
        </Group>
    );
};
