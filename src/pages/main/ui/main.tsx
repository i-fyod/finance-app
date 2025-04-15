import { Box } from "@mantine/core";

import { Activity } from "@/widgets/activity";
import { MiniPanels } from "@/widgets/miniPanels";
import { Overview } from "@/widgets/overview";
import { Payment } from "@/widgets/payment";
import { Recent } from "@/widgets/recent";

import styles from "./styles.module.css";

export function Main() {
    return (
        <Box className={styles.box}>
            <MiniPanels className={styles.panels} />
            <Overview className={styles.overview} />
            <Recent className={styles.recent} />
            <Activity className={styles.activity} />
            <Payment className={styles.payment} />
        </Box>
    );
}
