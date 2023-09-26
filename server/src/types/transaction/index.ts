export interface TransactionData {
  items: Transaction[]
  summary: Summary
  pagination: Pagination
}

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

interface Summary {
  totalQuantity: number;
  totalAmount: number;
  totalNetAmount: number;
  totalAverageAmount: number;
  initialDate: string;
  finalDate: string;
}

interface Pagination {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  numPages: number;
  lastPage: boolean;
  firstPage: boolean;
}

export enum StatusTransaction {
  Approved = "Aprovada",
  Pending = "Pendente",
  Denied = "Negada"
}

export enum CardBrand {
  MasterCard= "Mastercard",
  Elo="Elo",
  Visa="Visa",
  Hipercard="Hipercard",
  Others='Others'
}
