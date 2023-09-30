import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./form.component";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { CardBrand, StatusTransaction } from "@/store/transaction.store";
import { faker } from "@faker-js/faker";
import { statusTranslated } from "@/utils/translate";

describe("Form component", () => {
  it("should render without crashing", () => {
    const mockFn = vi.fn();
    render(<Form fetchFilter={mockFn} />);
  });

  it("should submit the form with selected values", async () => {
    const user = userEvent.setup();
    const mockFn = vi.fn();
    const cardBrand = faker.helpers.shuffle(getOnlyCardsBrandOptions())[0];
    const paymentStatus = faker.helpers.shuffle([
      StatusTransaction.Approved,
      StatusTransaction.Pending,
      StatusTransaction.Denied,
    ])[0];

    const { getByText, getAllByRole } = render(<Form fetchFilter={mockFn} />);
    faker;
    const paymentStatusDropdown = getAllByRole("combobox")[0];
    const statusOption = screen.getAllByRole("option", {
      name: statusTranslated[paymentStatus],
    });
    const cardBrandDropdown = getAllByRole("combobox")[1];
    const brandOption = screen.getByRole("option", { name: cardBrand.option });

    await user.selectOptions(paymentStatusDropdown, statusOption);
    await user.selectOptions(cardBrandDropdown, brandOption);

    const submitButton = getByText("Search");
    fireEvent.click(submitButton);

    expect(mockFn).toHaveBeenCalledWith({
      status: paymentStatus,
      cardBrand: cardBrand.value,
    });
  });
});

export const getOnlyCardsBrandOptions = () => {
  return [
    {
      value: CardBrand.Elo,
      option: CardBrand.Elo,
    },
    {
      value: CardBrand.MasterCard,
      option: CardBrand.MasterCard,
    },
    {
      value: CardBrand.Visa,
      option: CardBrand.Visa,
    },
  ];
};
