import { MoreThanOneTransactionEnum, CardBrand, StatusTransaction } from "../store/transaction.store"
import { statusTranslated } from "./translate"

export const getCardBrandOptions = () => {
  return [
    {
      value: "",
      option: MoreThanOneTransactionEnum.All
    },
    {
      value: CardBrand.Elo,
      option: CardBrand.Elo
    },
    {
      value: CardBrand.MasterCard,
      option: CardBrand.MasterCard
    },
    {
      value: CardBrand.Visa,
      option:  CardBrand.Visa
    },
  ]
}

export const getPaymentStatusOptions = () => {
  return [
    {
      value: "",
      option: MoreThanOneTransactionEnum.All
    },
    {
      value: StatusTransaction.Approved,
      option: statusTranslated[StatusTransaction.Approved]
    },
    {
      value: StatusTransaction.Pending,
      option: statusTranslated[StatusTransaction.Pending]
    },
    {
      value: StatusTransaction.Denied,
      option:  statusTranslated[StatusTransaction.Denied]
    },
  ]
}