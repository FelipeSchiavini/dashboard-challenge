import { Card } from "@/components/card/card.component";
import { Totals } from "@/store/transaction.store";

interface TopCardsProps {
  totals: Totals;
  averageTicket: number;
}
export const TopCards: React.FC<TopCardsProps> = ({
  totals,
  averageTicket,
}) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-y-4">
      <Card
        description="Gross"
        total={totals.grossAmount}
        tooltip="Total of gross amount"
      />
      <Card
        description="Net"
        total={totals.netAmount}
        tooltip="Total of net amount"
      />
      <Card
        description="Tax"
        total={totals.administrationFee}
        tooltip="Total of administration fee"
      />
      <Card
        description="Ticket"
        total={averageTicket}
        tooltip="Average ticket"
      />
    </div>
  );
};
