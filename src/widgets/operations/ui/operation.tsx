import { transactionsRoute } from "@/app/routes";

import {
    Box,
    Button,
    Center,
    Grid,
    NumberFormatter,
    Paper,
    Stack,
    Text,
    ThemeIcon,
    Title,
} from "@mantine/core";
import { useMutation, useQuery } from "@tanstack/react-query";

import { deleteTransaction, getTransaction } from "@/shared/api";
import { queryClient } from "@/shared/lib";
import { IUrlParams } from "@/shared/types";
import { CategoriesIcons } from "@/shared/ui/icons";

export const Operation = () => {
    const urlParams: IUrlParams = transactionsRoute.useSearch();
    const navigate = transactionsRoute.useNavigate();
    const { data } = useQuery({
        queryKey: ["transaction", urlParams.id],
        queryFn: () => getTransaction(urlParams.id as number),
        select: (transaction) => {
            if (transaction && transaction.date) {
                return {
                    ...transaction,
                    date: new Date(transaction.date + ".000Z"),
                };
            }
            return transaction;
        },
    });
    const { mutate } = useMutation({
        mutationFn: (id: number) => deleteTransaction(id),
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: ["transactions"] });
        },
    });

    return (
        <Box h="100%" w="100%" pt="20">
            <Grid mb="40">
                <Grid.Col span={1}>
                    <Button
                        variant="icons"
                        onClick={() => {
                            navigate({ to: "/transactions" });
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
                </Grid.Col>
                <Grid.Col span="auto" component={Center} p="0">
                    <Title fz="17" order={2} c="white">
                        {data
                            ? data.date.toLocaleDateString("ru-RU", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                              }) +
                              " " +
                              data.date.toLocaleTimeString("ru-RU", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                              })
                            : ""}
                    </Title>
                </Grid.Col>
                <Grid.Col span={1}>
                    <Button
                        variant="icons"
                        onClick={() => {
                            mutate(data?.transactionId!);
                            navigate({ to: "/transactions" });
                        }}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.33331 5.83331H16.6666"
                                stroke="#FFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.33331 9.16669V14.1667"
                                stroke="#FFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.6667 9.16669V14.1667"
                                stroke="#FFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4.16669 5.83331L5.00002 15.8333C5.00002 16.2753 5.17562 16.6993 5.48818 17.0118C5.80074 17.3244 6.22466 17.5 6.66669 17.5H13.3334C13.7754 17.5 14.1993 17.3244 14.5119 17.0118C14.8244 16.6993 15 16.2753 15 15.8333L15.8334 5.83331"
                                stroke="#FFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.5 5.83333V3.33333C7.5 3.11232 7.5878 2.90036 7.74408 2.74408C7.90036 2.5878 8.11232 2.5 8.33333 2.5H11.6667C11.8877 2.5 12.0996 2.5878 12.2559 2.74408C12.4122 2.90036 12.5 3.11232 12.5 3.33333V5.83333"
                                stroke="#FFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Button>
                </Grid.Col>
            </Grid>
            <Stack align="center" gap="0">
                <ThemeIcon size="120" radius="100%" color="dark.7" mb="20">
                    <CategoriesIcons
                        category={data?.category!}
                        style={{ height: "35%", width: "35%" }}
                    />
                </ThemeIcon>
                <Title order={2} c="white" mb="2">
                    {data?.name}
                </Title>
                <Text mb="7" fz="12" c="gray.4">
                    {data?.category}
                </Text>

                <Text fw="500" fz="18" c={data?.type === "income" ? "green.9" : "yellow.9"} mb="20">
                    <NumberFormatter
                        prefix={data?.type === "income" ? "+ " : "- "}
                        suffix="₽"
                        value={data?.cost}
                        thousandSeparator="."
                        decimalScale={2}
                        decimalSeparator=","
                        allowNegative={false}
                    />
                </Text>
                {data?.comment ? (
                    <Paper w="75%" mih="85" p="7 10" radius="6" shadow="sm">
                        <Text fz="13">{data?.comment}</Text>
                    </Paper>
                ) : (
                    ""
                )}
            </Stack>
        </Box>
    );
};
