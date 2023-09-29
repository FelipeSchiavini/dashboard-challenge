import { useEffect } from "react";
import { Background } from "../../components/background/background.component";
import { Form } from "../../components/form/form.component";
import CieloLogo from "../../components/logo/cielo.logo";
import { Placeholder } from "../../components/placeholder/placeholder.component";
import { LargeSeparator, Separator } from "../../components/separator/separator.component";
import { useTransactions } from "../../store/transaction.store";
import { TopCards } from "./components/cards/top-cards";
import { DataVisualization } from "./components/data-visualization/data-visualization";

export const Home: React.FC = () => {
  const { fetchTransactions, totals, averages, transactions } =
    useTransactions();

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <Background>
      <Separator />
      <CieloLogo />
      <LargeSeparator />
      <TopCards totals={totals}  averageTicket={averages?.averageTicket}/>
      <LargeSeparator borderBottom />
      <Form fetchFilter={fetchTransactions} />
      <LargeSeparator borderBottom />
      {
        transactions.length ? <DataVisualization transactions={transactions}/>: <Placeholder title="No data found" description="Can't find what you're looking for? Start a new search."/>
      }
    </Background>
  );
};


