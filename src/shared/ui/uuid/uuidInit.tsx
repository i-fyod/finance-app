import { v4 as uuidv4 } from "uuid";

import { useEffect } from "react";

export const UuidInit = () => {
    const uuid = uuidv4();

    useEffect(() => {
        const storedUuid = localStorage.getItem("uuid");

        if (!storedUuid) {
            localStorage.setItem("uuid", uuid);
        }
    }, []);

    return null;
};
