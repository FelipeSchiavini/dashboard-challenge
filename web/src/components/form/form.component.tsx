import { CardBrand, FetchTransactionsParams, MoreThanOneTransactionEnum, StatusTransaction } from "../../store/transaction.store";
import { statusTranslated } from "../../utils/translate";
import { Select } from "./select.component";

interface FormProps<T> {
  fetchFilter: (input: T)=> void;
}


export const Form: React.FC<FormProps<FetchTransactionsParams>> = ({fetchFilter}) => {
  const updateDashBoard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const paymentStatus = form.elements.namedItem("Status payment") as HTMLInputElement;
    const brandCard = form.elements.namedItem("Card brand") as HTMLInputElement;
    const brandCardValue  = brandCard.value as CardBrand | MoreThanOneTransactionEnum.All
    const paymentStatusValue= paymentStatus.value as StatusTransaction | MoreThanOneTransactionEnum.All
    fetchFilter({
      cardBrand: brandCardValue,
      status: paymentStatusValue
    })
  }

  return (
    <form className="space-y-4" onSubmit={updateDashBoard}>
      <div className="flex md:justify-center md:gap-4 md:flex-row flex-col space-y-2 md:space-y-0">
        <Select title="Status payment" options={getPaymentStatusOptions()} ariaLabel="select payment status"/>
        <Select title="Card brand" options={getCardBrandOptions()} ariaLabel="select the card brand" />
      </div>
      <div className="flex w-full justify-end md:justify-center">
        <button type="submit" className="btn btn-primary md:w-60 w-32" aria-label="perform search" title="search" role="button">
        Search
        </button>
      </div>
    </form>
  );
};

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