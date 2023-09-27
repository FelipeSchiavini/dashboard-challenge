import React, { useEffect } from "react";
import { Transaction, useTransactions } from "../store/transaction.store";
import { Background } from "../components/background/background.component";
import { Card } from "../components/card/card.component";
import { Form } from '../components/form/form.component';
import { Separator } from '../components/separator/separator.component';
import CieloLogo from "../components/logo/cielo.logo";
import {Chart} from "../components/charts/triangleBar.chart";
import { TransactionTable } from "../components/table/transaction-table/transaction-table.component";


//react query 
// Virtualize list react
export const Home: React.FC = () => {
  const { fetchTransactions, totals, averages, transactions } = useTransactions();

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <Background>
      <Separator/>
      <CieloLogo/>
      <Separator/>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-y-4 pb-4">
        <Card description="Fat Bruto" total={totals.grossAmount} />
        <Card description="Fat Liq" total={totals.netAmount} />
        <Card description="Tot Taxas" total={totals.administrationFee} />
        <Card description="Ticket" total={averages.averageTicket} />
      </div>
      <Separator borderBottom/>
      <Form fetchFilter={fetchTransactions}/>
      <Separator borderBottom/>
      <Chart data={groupByChannel(transactions)}/>
      <TransactionTable transactions={transactions} />
    </Background>
  );
};


type GroupedTransactionSummary = {
  channel: string;
  totalGrossAmount: number;
};

const groupByChannel = (transactions: Transaction[]): GroupedTransactionSummary[] => {
  const grouped = transactions.reduce((acc, transaction) => {
    if (!acc[transaction.channel]) {
      acc[transaction.channel] = 0;
    }
    acc[transaction.channel] += transaction.grossAmount;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(grouped).map(([channel, totalGrossAmount]) => ({
    channel,
    totalGrossAmount,
  }));
};
