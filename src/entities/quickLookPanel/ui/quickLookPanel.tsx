import React from "react";

import { Box, Group, NumberFormatter, Stack, Title, rem } from "@mantine/core";

import { BalanceIcon, ExpensesIcon, IncomeIcon, SavingsIcon } from "@/shared/ui/icons";

interface Props {
    title: string;
}

const iconMap: { [key: string]: React.FC } = {
    Balance: BalanceIcon,
    Income: IncomeIcon,
    Expenses: ExpensesIcon,
    Savings: SavingsIcon,
};

export const QuickLookPanel = ({ title }: Props) => {
    const Icon = iconMap[title] || BalanceIcon;

    return (
        <Group
            w="215"
            h="95"
            bg="bg.9"
            p="15"
            justify="space-between"
            component={Box}
            style={{ borderRadius: rem(8) }}>
            <Icon />
            <Stack w="60%" h="85%" gap="0" justify="space-between">
                <Title order={3} fz="13">
                    {title}
                </Title>
                <Title order={1} c="white" fw="500" component="p">
                    <NumberFormatter
                        suffix="₽"
                        thousandSeparator="."
                        decimalSeparator=","
                        value={41210}
                    />
                </Title>
            </Stack>
        </Group>
    );
};
