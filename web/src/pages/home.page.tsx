import React, { useEffect } from "react";
import { useTransactions } from "../store/transaction.store";
import { Background } from "../components/background/background.component";
import { Card } from "../components/card/card.component";
import { Form } from '../components/form/form.component';
import { Separator } from '../components/separator/separator.component';
import { Suspense, lazy } from 'react';
import { DotsLoading } from "../components/loading/loading.component";
import CieloLogo from "../components/logo/cielo.logo";


const Table = lazy(() => import('../components/table/table.component'));
//react query 
// Virtualize list react
export const Home: React.FC = () => {
  const { fetchTransactions } = useTransactions();

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <Background>
      <Separator/>
      <CieloLogo/>
      <Separator/>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-y-4 pb-4">
        <Card description="Fat Bruto" total={8000} />
        <Card description="Fat Liq" total={80000} />
        <Card description="Tot Taxas" total={12523} />
        <Card description="Ticket" total={1253} />
      </div>
      <Separator borderBottom/>
      <Form fetchFilter={fetchTransactions}/>
      <Separator borderBottom/>
      <Suspense fallback={<DotsLoading/>}>
        <Table data={[{code: 1, name: "felipe", spirt: "house", teste: "teste", contry: "brazil", soul: "ousdas"}]}/>
      </Suspense>
    </Background>
  );
};
