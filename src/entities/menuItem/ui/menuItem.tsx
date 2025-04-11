import React from "react";

import { Box, Group, Text, rem } from "@mantine/core";

interface Props {
    icon: React.ReactElement;
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
}
export const MenuItem = ({ icon, isActive, onClick, children }: Props) => {
    return (
        <Group onClick={onClick} justify="space-between" my={12.5} style={{ cursor: "pointer" }}>
            <Group gap={18}>
                {icon}
                <Text fw={isActive ? 600 : 400} c={isActive ? "green.9" : "gray.4"}>
                    {children}
                </Text>
            </Group>
            <Box
                display={isActive ? "block" : "none"}
                bg="yellow.9"
                h="20"
                w="6"
                style={{
                    borderRadius: `${rem(4)} 0 0 ${rem(4)}`,
                }}></Box>
        </Group>
    );
};
