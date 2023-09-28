import { render, screen } from '@testing-library/react';
import { Select } from './select.component';
import { faker } from '@faker-js/faker';

describe('Select component', () => {

  const randomOptions = generateRandomStringsArray()
  const randomTitle = faker.lorem.word()

  it('should render without crashing', () => {
    render(<Select title={randomTitle} options={randomOptions} />);
  });


  it('should render provided options', () => {
    render(<Select title={randomTitle} options={randomOptions} />);
    randomOptions.forEach(option => {
      const optionElement = screen.getByRole('option', { name: option });
      expect(optionElement).toHaveValue(option);
    });
  });
});


const generateRandomStringsArray = (length: number = 5) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(faker.lorem.word());
  }
  return result;
}