import { Controller, Get, QueryParam } from "routing-controllers";
import userData from "../data/data.json";
import {
  StatusTransaction,
  Transaction,
  TransactionData,
  CardBrand,
} from "../types/transaction";
import "reflect-metadata";

@Controller("/transactions")
export class TransactionsController {
  @Get("/")
  async getTransaction(
    @QueryParam("status") status?: StatusTransaction,
    @QueryParam("CardBrand") CardBrand?: CardBrand
  ): Promise<Transaction[]> {
    const { items } = userData as TransactionData;

    const transactionsFilteredByStatus = items.filter((item) => {
      if (status) {
        return item.status === status;
      }
      return item;
    });
    
    const transactionsFilteredByBrand = transactionsFilteredByStatus.filter(
      (item) => {
        if (CardBrand) {
          item.cardBrand === CardBrand;
        }
        return item;
      }
    );

    return transactionsFilteredByBrand;
  }
}
