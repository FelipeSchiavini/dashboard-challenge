import { lazy, Suspense } from "react";
import { Transaction } from "../../../store/transaction.store";
import { DotsLoading } from "../../loading/loading.component";

const Table = lazy(() => import("../table.component"));

interface TransactionTableProps {
  transactions: Transaction[];
}
export const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  if(!transactions.length)  return

  return (
    <Suspense fallback={<DotsLoading />}>
      <Table data={transactions} />
    </Suspense>
  );
};
