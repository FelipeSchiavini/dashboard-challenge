import { render } from '@testing-library/react';
import { Card } from './card.component';
import { faker } from '@faker-js/faker';
import { formattedNumber } from '../../utils/strings';

describe('Card component', () => {
  it('should renders without crashing', () => {
    render(<Card total={1234} />);
  });

  it('should displays the provided description', () => {
    const transactionDescription = faker.finance.transactionDescription()
    const randomNumber = faker.number.int()
    const { getByText } = render(<Card description={transactionDescription} total={randomNumber} />);
    expect(getByText(transactionDescription)).toBeTruthy();
  });

  it('should displays the formatted total', () => {
    const transactionDescription = faker.finance.transactionDescription()
    const randomNumber = faker.number.int()

    const { getByText } = render(<Card description={transactionDescription} total={randomNumber} />);
    expect(getByText(formattedNumber(randomNumber))).toBeTruthy();
  });
});
