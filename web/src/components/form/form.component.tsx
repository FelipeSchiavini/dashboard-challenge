import { CardBrand, FetchTransactionsParams, StatusTransaction } from "../../store/transaction.store";
import { Select } from "./select.component";

interface FormProps<T> {
  fetchFilter: (input: T)=> void;
}

export const Form: React.FC<FormProps<FetchTransactionsParams>> = ({fetchFilter}) => {
  const cardBrandOptions = ["All", CardBrand.Elo, CardBrand.MasterCard, CardBrand.Visa, CardBrand.Hipercard, CardBrand.Others]
  const paymentStatusOptions = ["All", StatusTransaction.Approved, StatusTransaction.Pending, StatusTransaction.Denied]
  const updateDashBoard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const paymentStatus = form.elements.namedItem("Payment Status") as HTMLInputElement;
    const brandCard = form.elements.namedItem("Select Card Brand") as HTMLInputElement;
    const brandCardValue  = brandCard.value as CardBrand | "All"
    const paymentStatusValue= paymentStatus.value as StatusTransaction | "All"
    fetchFilter({
      brand: brandCardValue,
      status: paymentStatusValue
    })
  }

  return (
    <form className="space-y-4" onSubmit={updateDashBoard}>
      <div className="flex md:justify-center md:gap-4 md:flex-row flex-col space-y-2 md:space-y-0">
        <Select title="Payment Status" options={paymentStatusOptions} aria-label="Status do pagamento" />
        <Select title="Select Card Brand" options={cardBrandOptions} aria-label="Bandeira do Cartão" />
      </div>
      <div className="flex w-full justify-end md:justify-center">
        <button type="submit" className="btn btn-primary md:w-60 w-32" aria-label="Realizar busca">
          Buscar
        </button>
      </div>
    </form>
  );
};
