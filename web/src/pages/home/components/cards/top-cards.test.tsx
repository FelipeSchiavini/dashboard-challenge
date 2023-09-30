import { render } from "@testing-library/react";
import { TopCards } from "./top-cards";
import { faker } from "@faker-js/faker";
import { Totals } from "@/store/transaction.store";
import { formattedNumber } from "@/utils/strings";

describe("TopCards Component", () => {
  let mockTotals: Totals;
  let mockAverageTicket: number;
  beforeAll(() => {
    mockTotals = {
      grossAmount: faker.number.int(),
      netAmount: faker.number.int(),
      administrationFee: faker.number.int(),
    };
    mockAverageTicket = faker.number.int();
  });
  it("renders without crashing", () => {
    render(<TopCards totals={mockTotals} averageTicket={mockAverageTicket} />);
  });

  it("renders the correct number of Card components", () => {
    const { getByText } = render(
      <TopCards totals={mockTotals} averageTicket={mockAverageTicket} />
    );
    expect(
      getByText(formattedNumber(mockTotals.administrationFee))
    ).toBeTruthy();
    expect(getByText(formattedNumber(mockTotals.grossAmount))).toBeTruthy();
    expect(getByText(formattedNumber(mockTotals.netAmount))).toBeTruthy();
    expect(getByText(formattedNumber(mockAverageTicket))).toBeTruthy();
  });
});
