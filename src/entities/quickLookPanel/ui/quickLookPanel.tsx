import React from "react";

import { Group, NumberFormatter, Stack, Title, rem } from "@mantine/core";

import { BalanceIcon, ExpensesIcon, IncomeIcon, SavingsIcon } from "@/shared/ui/icons";

interface Props {
    title: string;
    value: number;
}

const iconMap: { [key: string]: React.FC } = {
    Баланс: BalanceIcon,
    Доход: IncomeIcon,
    Затраты: ExpensesIcon,
    Накопления: SavingsIcon,
};

export const QuickLookPanel = ({ title, value }: Props) => {
    const Icon = iconMap[title] || BalanceIcon;

    return (
        <Group
            w="215"
            h="95"
            bg="dark.6"
            p="15"
            justify="space-between"
            style={{ borderRadius: rem(8) }}>
            <Icon />
            <Stack w="60%" h="85%" gap="0" justify="space-between">
                <Title order={3} fz="14">
                    {title}
                </Title>
                <Title order={1} c="white" fz="20" fw="500" component="p">
                    <NumberFormatter
                        suffix="₽"
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        value={value}
                    />
                </Title>
            </Stack>
        </Group>
    );
};
