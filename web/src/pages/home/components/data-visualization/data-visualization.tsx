import { Suspense, lazy } from "react";
import { DotsLoading } from "@/components/loading/loading.component";
import { Transaction } from "@/store/transaction.store";
import { ChartLayout } from "@/components/charts/layout.chart";
import { CustomBarChart } from "@/components/charts/triangleBar.chart";
import { channelTranslated, statusToSvg } from "@/utils/translate";
import { RightTooltip } from "@/components/tooltip/tooltip-component";
const Table = lazy(() => import("@/components/table/table.component"));
const ScatterGraph = lazy(() => import("@/components/charts/scatter.chart"));

interface DataVisualizationProps {
  transactions: Transaction[];
}

export const DataVisualization: React.FC<DataVisualizationProps> = ({
  transactions,
}) => {
  return (
    <Suspense fallback={<DotsLoading />}>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:space-y-0 space-y-6 pb-6">
        <ChartLayout title="Gross revenue by channel type">
          <CustomBarChart data={groupByChannel(transactions)} />
        </ChartLayout>
        <ChartLayout title="Transactions by card brand">
          <ScatterGraph data={transactions} x="grossAmount" y="cardBrand" />
        </ChartLayout>
      </div>
      <Table data={mapToTransactionToTable(transactions)} />
    </Suspense>
  );
};

const mapToTransactionToTable = (transactions: Transaction[]) => {
  return transactions.map((transaction) => {
    return {
      id: (
        <RightTooltip
          value={`...${transaction.id.slice(-3)}`}
          tooltip={transaction.id}
        />
      ),
      date: transaction.date.split("T")[0],
      cardBrand: transaction.cardBrand,
      grossAmount: transaction.grossAmount,
      netAmount: transaction.netAmount,
      administrationFee: transaction.administrationFee,
      channel: channelTranslated[transaction.channel],
      status: statusToSvg[transaction.status],
    };
  });
};

type GroupedTransactionSummary = {
  channel: string;
  totalGrossAmount: number;
};

const groupByChannel = (
  transactions: Transaction[]
): GroupedTransactionSummary[] => {
  const grouped = transactions.reduce((acc, transaction) => {
    const translatedChannel = channelTranslated[transaction.channel];

    if (!acc[translatedChannel]) {
      acc[translatedChannel] = 0;
    }
    acc[translatedChannel] += transaction.grossAmount;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(grouped).map(([channel, totalGrossAmount]) => ({
    channel,
    totalGrossAmount,
  }));
};
