import { transactionsRoute } from "@/app/routes";
import { TransactionForm } from "@/feature/transactionForm";

import { useState } from "react";

import { Box, Button, Center, Divider, Flex, Title, rem } from "@mantine/core";

import { Operation, Operations } from "@/widgets/operations";

import { IUrlParams } from "@/shared/types";

export const Transactions = () => {
    const [formIsVisible, setFormIsVisible] = useState(false);
    const urlParams: IUrlParams = transactionsRoute.useSearch();

    return (
        <Box
            w="100%"
            bg="dark.6"
            p="15 25"
            style={{ height: "calc(100vh - 50px)", borderRadius: rem(8) }}>
            <Title fz="20" c="white" order={1}>
                Операции
            </Title>
            <Flex h="95%" justify="space-between">
                <Box w="47.5%" pt="20">
                    <Operations />
                </Box>
                <Divider h="85%" m="auto" orientation="vertical" />
                <Center w="47.5%">
                    {!urlParams.id ? (
                        <>
                            <Button
                                display={formIsVisible ? "none" : "block"}
                                fw="500"
                                variant="outline"
                                color="gray.4"
                                onClick={() => setFormIsVisible((prev) => !prev)}>
                                Добавить платеж
                            </Button>
                            <TransactionForm
                                visible={formIsVisible ? "block" : "none"}
                                setFormIsVisible={setFormIsVisible}
                            />
                        </>
                    ) : (
                        <Operation />
                    )}
                </Center>
            </Flex>
        </Box>
    );
};
