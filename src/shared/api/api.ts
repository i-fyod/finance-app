import axios from "axios";

import { ISummary, ITransaction, ITransactionsResponse } from "@/shared/types";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const getTransactions = async (): Promise<ITransactionsResponse> => {
    const response = await axios.get<ITransactionsResponse>(`${BASE_URL}transactions`, {
        headers: { "X-User-Id": localStorage.getItem("uuid") },
    });
    return response.data;
};

export const getTransaction = async (id: number): Promise<ITransaction> => {
    const response = await axios.get<ITransaction>(`${BASE_URL}transactions/${id}`, {
        headers: { "X-User-Id": localStorage.getItem("uuid") },
    });
    return response.data;
};

export const createTransaction = async (
    transaction: Omit<ITransaction, "transactionId" | "user_id">
): Promise<ITransaction> => {
    const response = await axios.post<ITransaction>(`${BASE_URL}transactions`, transaction, {
        headers: {
            "X-User-Id": localStorage.getItem("uuid"),
            "Content-Type": "application/json",
        },
    });

    return response.data;
};

export const deleteTransaction = async (id: number) => {
    const response = await axios.delete(`${BASE_URL}transactions/${id}`, {
        headers: { "X-User-Id": localStorage.getItem("uuid") },
    });
    return response;
};

export const getSummary = async (): Promise<ISummary> => {
    const response = await axios.get<ISummary>(`${BASE_URL}summary`, {
        headers: { "X-User-Id": localStorage.getItem("uuid") },
    });
    return response.data;
};
