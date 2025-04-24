import { transactionsRoute } from "@/app/routes";

import { ScrollArea, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import { Transaction } from "@/entities/transaction";

import { getTransactions } from "@/shared/api";
import { formatDate } from "@/shared/lib";
import { IUrlParams } from "@/shared/types";

export const Operations = () => {
    const { data } = useQuery({
        queryKey: ["transactions"],
        queryFn: getTransactions,
        select: (data) => data.data,
    });
    const navigate = transactionsRoute.useNavigate();
    const urlParams: IUrlParams = transactionsRoute.useSearch();

    return (
        <ScrollArea h="100%" offsetScrollbars scrollbarSize={0}>
            {data
                ? data.map((day) => (
                      <>
                          <Title key={day.date} mb="15" fz="17" order={2} c="white">
                              {formatDate(day.date)}
                          </Title>
                          {day.transactions.map((transaction) => (
                              <Transaction
                                  key={transaction.transactionId}
                                  data={transaction}
                                  isActive={urlParams.id === transaction.transactionId}
                                  enabled
                                  onClick={() => {
                                      navigate({ search: { id: transaction.transactionId } });
                                  }}
                              />
                          ))}
                      </>
                  ))
                : ""}
        </ScrollArea>
    );
};
