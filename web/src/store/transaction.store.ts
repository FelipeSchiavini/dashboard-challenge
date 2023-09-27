import { create } from "zustand";
import { api } from "../libs/axios";
import * as qs from "querystringify";
import { devtools, persist } from "zustand/middleware";
type TransactionState = {
  loading: boolean;
  error: string | null;
  fetchTransactions: (input?: FetchTransactionsParams) => void;
  transactions: Transaction[];
  totals: Totals;
  averages: Averages;
};

export enum MoreThanOneTransactionEnum {
  All = "All"
} 

export interface FetchTransactionsParams {
  status?: StatusTransaction | MoreThanOneTransactionEnum;
  cardBrand?: CardBrand | MoreThanOneTransactionEnum;
}

interface TransactionResponse {
  transactions: Transaction[];
  totals: Totals;
  averages: Averages;
}

interface Totals {
  grossAmount: number;
  administrationFee: number;
  netAmount: number;
}

interface Averages {
  averageTicket: number;
}


export const useTransactions = create<TransactionState>()(
  devtools(
    persist(
      (set) => ({
        transactions: [],
        loading: false,
        error: null,
        totals: {
          grossAmount: 0,
          administrationFee: 0,
          netAmount: 0,
        },
        averages: {
          averageTicket: 0,
        },
        fetchTransactions: async (input?: FetchTransactionsParams) => {
          set({ loading: true, error: null });
          try {
            const queryParams = qs.stringify(input || {});

            const { data } = await api.get<TransactionResponse>(
              `/transactions?${queryParams}`
            );
            set({ transactions: data.transactions, totals: data.totals, averages: data.averages });

          } catch (err: unknown) {

            if (err instanceof Error) {
              set({ error: err.message });
            } else {
              set({ error: "Unknown Error" });
            }
            
          } finally {
            set({ loading: false });
          }
        },
      }),
      {
        name: "transactions",
      }
    )
  )
);

export interface Transaction {
  id: string;
  merchantId: string;
  paymentNode: number;
  cnpjRoot: number;
  date: string;
  paymentType: string;
  cardBrand: CardBrand;
  authorizationCode: string;
  truncatedCardNumber: string;
  grossAmount: number;
  netAmount: number;
  terminal: string;
  administrationFee: number;
  channelCode: number;
  channel: string;
  withdrawAmount: number;
  minimumMDRAmmount: number;
  mdrTaxAmount: number;
  mdrFeeAmount: number;
  status: StatusTransaction;
}

export enum StatusTransaction {
  Approved = "Aprovada",
  Pending = "Pendente",
  Denied = "Negada",
}

export enum CardBrand {
  MasterCard = "Mastercard",
  Elo = "Elo",
  Visa = "Visa",
  Hipercard = "Hipercard",
  Others = "Others",
}
