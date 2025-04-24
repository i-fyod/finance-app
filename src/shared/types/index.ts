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

export interface ISummary {
    balance: number;
    expenses: number;
    income: number;
}

export interface IUrlParams {
    id?: number;
}
