import { Group } from "@mantine/core";

import { Accounts } from "@/widgets/accounts";
import { Payment } from "@/widgets/payment";

export const Wallet = () => {
    return (
        <Group align="start" gap="25">
            <Accounts />
            <Payment />
        </Group>
    );
};
