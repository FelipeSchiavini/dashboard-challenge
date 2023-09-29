import { render, screen } from "@testing-library/react";
import { Select } from "./select.component";
import { faker } from "@faker-js/faker";

describe("Select component", () => {
  const randomOptions = generateRandomOptions();
  const randomTitle = faker.lorem.word(5);

  it("should render without crashing", () => {
    render(<Select title={randomTitle} options={randomOptions} />);
  });

  it("should renders the correct number of options", () => {
    const { getAllByRole } = render(
      <Select title="Selecione" options={randomOptions} />
    );
    expect(getAllByRole("option").length).toBe(randomOptions.length + 1);
  });

  it("should renders options with the correct values and text", () => {
    const { getByText } = render(
      <Select title="Selecione" options={randomOptions} />
    );
    expect(getByText(randomOptions[0].option)).toHaveAttribute(
      "value",
      randomOptions[0].value
    );
  });

  it("should render provided options", () => {
    render(<Select title={randomTitle} options={randomOptions} />);

    randomOptions.forEach((option) => {
      const optionElement = screen.getByRole("option", { name: option.option });
      expect(optionElement).toHaveValue(option.value);
    });
  });
});

const generateRandomOptions = (length: number = 5) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push({
      option: faker.lorem.words(5),
      value: faker.lorem.words(5),
    });
  }
  return result;
};
