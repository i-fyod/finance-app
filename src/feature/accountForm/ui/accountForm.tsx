import { Box, Button, Center, Group, NumberInput, TextInput, Title, rem } from "@mantine/core";
import { UseFormReturnType, useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";

import { createSaving } from "@/shared/api";
import { queryClient } from "@/shared/lib";
import { ISaving } from "@/shared/types";

interface Props {
    toggleForm: () => void;
}

export function AccountForm({ toggleForm }: Props) {
    const form: UseFormReturnType<Omit<ISaving, "savingId" | "user_id">> = useForm<
        Omit<ISaving, "savingId" | "user_id">
    >({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            progress: 0,
            targetAmount: 0,
        },

        validate: {
            name: (value) => (value.length >= 3 ? null : "Слишком мало символов"),
            progress: (value) => (value >= 1 ? null : "Укажите сумму"),
            targetAmount: (value) => (value >= 1 ? null : "Укажите сумму"),
        },
    });

    const { mutate } = useMutation({
        mutationFn: (saving: Omit<ISaving, "savingId" | "user_id">) => createSaving(saving),
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: ["savings"] });
            queryClient.refetchQueries({ queryKey: ["summary"] });
        },
    });

    return (
        <form
            onSubmit={form.onSubmit((values) => {
                toggleForm();
                mutate(values);
            })}>
            <Box bd="3 solid #282C35" p="15" style={{ borderRadius: rem(10) }}>
                <Title order={2} c="white" mb="10" component={Center}>
                    Накопительный счет
                </Title>

                <TextInput
                    variant="filled"
                    size="xs"
                    radius="8"
                    mb="10"
                    styles={{
                        input: {
                            backgroundColor: "var(--mantine-color-dark-7)",
                            fontSize: rem(12),
                        },
                    }}
                    placeholder="Название"
                    key={form.key("name")}
                    {...form.getInputProps("name")}
                />
                <NumberInput
                    variant="filled"
                    size="xs"
                    radius="8"
                    mb="10"
                    styles={{
                        input: {
                            backgroundColor: "var(--mantine-color-dark-7)",
                            padding: `${rem(13)} ${rem(20)}`,
                            fontSize: rem(12),
                        },
                        label: {
                            paddingLeft: rem(20),
                            marginBottom: rem(8),
                        },
                    }}
                    label="Цель"
                    placeholder="Целевая сумма"
                    key={form.key("targetAmount")}
                    {...form.getInputProps("targetAmount")}
                />
                <NumberInput
                    variant="filled"
                    size="xs"
                    radius="8"
                    mb="10"
                    styles={{
                        input: {
                            backgroundColor: "var(--mantine-color-dark-7)",
                            padding: `${rem(13)} ${rem(20)}`,
                            fontSize: rem(12),
                        },
                        label: {
                            paddingLeft: rem(20),
                            marginBottom: rem(8),
                        },
                    }}
                    label="Накоплено"
                    placeholder="Текущая сумма"
                    key={form.key("progress")}
                    {...form.getInputProps("progress")}
                />
                <Group justify="center">
                    <Button color="dark.7" fz="12" h="auto" radius="8" p="8 20" type="submit">
                        Копить
                    </Button>
                </Group>
            </Box>
        </form>
    );
}
