export interface ITransaction {
    transactionId: number;
    user_id: string;
    name: string;
    type: "income" | "expense";
    cost: number;
    category: string;
    date: Date;
    comment: string;
}

export interface ITransactionsResponse {
    total: number;
    data: [
        {
            date: string;
            transactions: ITransaction[];
        },
    ];
}

export interface IStatsResponse {
    date: string;
    income: number;
    expenses: number;
}

export interface ISummary {
    balance: number;
    expenses: number;
    income: number;
    savings: number;
}

export interface ISaving {
    savingId: number;
    user_id: string;
    name: string;
    progress: number;
    targetAmount: number;
}

export interface ISavingsResponse {
    savings: ISaving[];
    completed: ISaving[];
}

export interface IUrlParams {
    id?: number;
}
