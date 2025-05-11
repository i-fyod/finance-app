import { AccountForm } from "@/feature/accountForm";

import { Box, Button, Collapse, Group, Stack, Title, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Card } from "@/entities/card";

export const Accounts = () => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <Box
            mih="215"
            mah="calc(100vh - 50px)"
            w="300"
            bg="bg.9"
            p="10 15"
            style={{ borderRadius: rem(8) }}>
            <Group justify="space-between">
                <Title fz="20" c="white" order={1}>
                    Счета
                </Title>
                <Button variant="icons" onClick={toggle}>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_569_10)">
                            <path
                                d="M5.83331 4.7225C5.83331 4.13306 6.06747 3.56775 6.48427 3.15096C6.90107 2.73416 7.46637 2.5 8.05581 2.5H15.2775C15.5693 2.5 15.8583 2.55749 16.128 2.66918C16.3976 2.78087 16.6426 2.94458 16.849 3.15096C17.0554 3.35733 17.2191 3.60234 17.3308 3.87199C17.4425 4.14163 17.5 4.43064 17.5 4.7225V11.9442C17.5 12.236 17.4425 12.525 17.3308 12.7947C17.2191 13.0643 17.0554 13.3093 16.849 13.5157C16.6426 13.7221 16.3976 13.8858 16.128 13.9975C15.8583 14.1092 15.5693 14.1667 15.2775 14.1667H8.05581C7.46637 14.1667 6.90107 13.9325 6.48427 13.5157C6.06747 13.0989 5.83331 12.5336 5.83331 11.9442V4.7225Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.34333 6.05005C3.08779 6.19573 2.87523 6.4063 2.72715 6.66047C2.57906 6.91464 2.50071 7.20339 2.5 7.49755V15.8309C2.5 16.7475 3.25 17.4975 4.16667 17.4975H12.5C13.125 17.4975 13.465 17.1767 13.75 16.6642"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.16669 8.33337H14.1667"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.6667 5.83337V10.8334"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_569_10">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </Button>
            </Group>
            <Stack p="15 5" gap="15">
                <Card />
                <Collapse in={opened}>
                    <AccountForm toggleForm={toggle} />
                </Collapse>
            </Stack>
        </Box>
    );
};
