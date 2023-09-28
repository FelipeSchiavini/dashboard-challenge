import { CardBrand, FetchTransactionsParams, MoreThanOneTransactionEnum, StatusTransaction } from "../../store/transaction.store";
import { Select } from "./select.component";

interface FormProps<T> {
  fetchFilter: (input: T)=> void;
}

export const Form: React.FC<FormProps<FetchTransactionsParams>> = ({fetchFilter}) => {
  const cardBrandOptions = [MoreThanOneTransactionEnum.All, CardBrand.Elo, CardBrand.MasterCard, CardBrand.Visa, CardBrand.Hipercard]
  const paymentStatusOptions = [MoreThanOneTransactionEnum.All, StatusTransaction.Approved, StatusTransaction.Pending, StatusTransaction.Denied]
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
        <Select title="Status payment" options={paymentStatusOptions} ariaLabel="select payment status"/>
        <Select title="Card brand" options={cardBrandOptions} ariaLabel="select the card brand" />
      </div>
      <div className="flex w-full justify-end md:justify-center">
        <button type="submit" className="btn btn-primary md:w-60 w-32" aria-label="perform search" title="search" role="button">
        Search
        </button>
      </div>
    </form>
  );
};
