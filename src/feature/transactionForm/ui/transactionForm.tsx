import {
    Box,
    Button,
    Group,
    NativeSelect,
    NumberInput,
    SegmentedControl,
    TextInput,
    Textarea,
    rem,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";

import { createTransaction } from "@/shared/api";
import { queryClient } from "@/shared/lib";
import { ITransaction } from "@/shared/types";

interface Props {
    visible: "none" | "block";
    setFormIsVisible: (value: boolean) => void;
}

export function TransactionForm({ visible, setFormIsVisible }: Props) {
    const form = useForm<Omit<ITransaction, "transactionId" | "user_id">>({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            type: "income",
            cost: 0,
            category: "Перевод",
            date: new Date(),
            comment: "",
        },

        validate: {
            name: (value) => (value.length >= 3 ? null : "Слишком мало символов"),
            cost: (value) => (value >= 1 ? null : "Укажите сумму"),
        },
    });

    const { mutate } = useMutation({
        mutationFn: (transaction: Omit<ITransaction, "transactionId" | "user_id">) =>
            createTransaction(transaction),
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: ["transactions"] });
        },
    });

    const incomeCategories = [
        "Перевод",
        "Зарплата",
        "Дополнительный доход",
        "Подарки",
        "Инвестиции",
        "Аренда",
        "Премии",
        "Фриланс",
        "Продажа товаров/услуг",
        "Проценты по вкладам",
        "Государственные пособия",
        "Дивиденды",
        "Возврат налогов",
        "Стипендия",
        "Пенсия",
        "Прочие доходы",
    ];

    const expenseCategories = [
        "Перевод",
        "Продукты питания",
        "Жилищные расходы",
        "Транспорт",
        "Коммунальные услуги",
        "Развлечения",
        "Одежда и обувь",
        "Здоровье",
        "Образование",
        "Связь",
        "Кредиты и займы",
        "Спорт и фитнес",
        "Путешествия",
        "Косметика и уход",
        "Домашние животные",
        "Прочие расходы",
    ];

    return (
        <form
            onSubmit={form.onSubmit((values) => {
                setFormIsVisible(false);
                mutate(values);
            })}
            style={{ width: "90%", display: visible }}>
            <Box bd="3 solid #282C35" p="20" style={{ borderRadius: rem(10) }}>
                <Button
                    variant="icons"
                    mb="10"
                    onClick={() => {
                        setFormIsVisible(false);
                    }}>
                    <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.96352 9H15.0614"
                            stroke="#FFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.96352 9L8.71975 13.5"
                            stroke="#FFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.96352 9L8.71975 4.5"
                            stroke="#FFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Button>

                <TextInput
                    variant="filled"
                    size="md"
                    radius="10"
                    mb="10"
                    styles={{
                        input: {
                            backgroundColor: "var(--mantine-color-dark-7)",
                            padding: `${rem(13)} ${rem(160)} ${rem(13)} ${rem(20)}`,
                            fontSize: rem(15),
                        },
                        section: {
                            width: rem(150),
                        },
                    }}
                    rightSection={
                        <SegmentedControl
                            data={[
                                { label: "Доход", value: "income" },
                                { label: "Расход", value: "expense" },
                            ]}
                            h="30"
                            radius="5"
                            bg="dark.6"
                            styles={{
                                root: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: `${rem(0)} ${rem(3)}`,
                                },
                                label: {
                                    padding: `${rem(1.5)} ${rem(10)}`,
                                },
                            }}
                            key={form.key("type")}
                            {...form.getInputProps("type")}
                        />
                    }
                    withAsterisk
                    placeholder="Кому/От кого"
                    key={form.key("name")}
                    {...form.getInputProps("name")}
                />
                <NumberInput
                    variant="filled"
                    size="md"
                    radius="10"
                    mb="10"
                    styles={{
                        input: {
                            backgroundColor: "var(--mantine-color-dark-7)",
                            padding: `${rem(13)} ${rem(20)}`,
                            fontSize: rem(15),
                        },
                        label: {
                            paddingLeft: rem(20),
                            marginBottom: rem(8),
                        },
                    }}
                    withAsterisk
                    label="Сумма"
                    placeholder="Сумма операции"
                    key={form.key("cost")}
                    {...form.getInputProps("cost")}
                />
                <NativeSelect
                    variant="filled"
                    size="md"
                    radius="10"
                    mb="10"
                    styles={{
                        input: {
                            backgroundColor: "var(--mantine-color-dark-7)",
                            fontSize: rem(15),
                        },
                        label: {
                            paddingLeft: rem(20),
                            marginBottom: rem(8),
                        },
                    }}
                    withAsterisk
                    label="Категория"
                    data={form.getValues().type === "income" ? incomeCategories : expenseCategories}
                    key={form.key("category")}
                    {...form.getInputProps("category")}
                />
                <DateTimePicker
                    variant="filled"
                    size="md"
                    radius="10"
                    mb="10"
                    styles={{
                        input: {
                            backgroundColor: "var(--mantine-color-dark-7)",
                            fontSize: rem(15),
                        },
                        label: {
                            paddingLeft: rem(20),
                            marginBottom: rem(8),
                        },
                    }}
                    withAsterisk
                    label="Дата и время"
                    placeholder="Когда была совершена операция?"
                    maxDate={new Date()}
                    key={form.key("date")}
                    {...form.getInputProps("date")}
                />
                <Textarea
                    variant="filled"
                    size="md"
                    radius="10"
                    mb="20"
                    styles={{
                        input: {
                            backgroundColor: "var(--mantine-color-dark-7)",
                            padding: `${rem(13)} ${rem(20)}`,
                            fontSize: rem(15),
                        },
                        label: {
                            paddingLeft: rem(20),
                            marginBottom: rem(8),
                        },
                    }}
                    label="Комментарий"
                    placeholder="Комментарий к операции"
                    key={form.key("comment")}
                    {...form.getInputProps("comment")}
                />
                <Group justify="center">
                    <Button color="dark.7" radius="10" p="10 40" type="submit">
                        Добавить
                    </Button>
                </Group>
            </Box>
        </form>
    );
}
