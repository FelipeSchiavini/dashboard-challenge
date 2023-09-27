import { Controller, Get, QueryParam } from "routing-controllers";
import userData from "../data/data.json";
import {
  StatusTransaction,
  Transaction,
  TransactionData,
  CardBrand,
} from "../types/transaction";
import "reflect-metadata";

interface Totals {
  grossAmount: number;
  administrationFee: number;
  netAmount: number;
}

interface Averages {
  averageTicket: number;
}

interface TransactionsControllerResponse {
  transactions: Transaction[];
  totals: Totals;
  averages: Averages;
}

@Controller("/transactions")
export class TransactionsController {
  @Get("/")
  async getTransaction(
    @QueryParam("status") status?: StatusTransaction,
    @QueryParam("cardBrand") cardBrand?: CardBrand
  ): Promise<TransactionsControllerResponse> {
    const { items } = userData as TransactionData;

    const transactionsFiltered = items.filter((item) => {
      if (status && item.status !== status) {
        return false;
      }

      if (cardBrand && item.cardBrand !== cardBrand) {
        return false;
      }

      return true;
    });

    const totals = getTotals(transactionsFiltered);
    return {
      transactions: transactionsFiltered,
      totals,
      averages: {
        averageTicket: getAverageTicket(
          totals.grossAmount,
          transactionsFiltered?.length
        ),
      },
    };
  }
}

const getTotals = (transactions: Transaction[]) => {
  return transactions.reduce(
    (acc, transaction) => {
      return {
        grossAmount: acc.grossAmount + transaction.grossAmount,
        administrationFee:
          acc.administrationFee + transaction.administrationFee,
        netAmount: acc.netAmount + transaction.netAmount,
      };
    },
    {
      grossAmount: 0,
      administrationFee: 0,
      netAmount: 0,
    }
  );
};

const getAverageTicket = (totalGrossAmount: number, quantity: number) => {
  if (!quantity) return 0;

  return roundToOneDecimal(totalGrossAmount / quantity);
};

const roundToOneDecimal = (number: number): number => {
  return parseFloat(number.toFixed(1));
};
