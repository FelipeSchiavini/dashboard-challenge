import { render } from '@testing-library/react';
import { Background } from './background.component';
import { faker } from '@faker-js/faker';

describe('Background component', () => {
  let fakerText: string;
  beforeEach(() => {
    fakerText = faker.lorem.word();
  });

  it('should renders without crashing', () => {
    render(<Background><span>{fakerText}</span></Background>);
  });

  it('should render children ', () => {
    const { getByText } = render(<Background><span>{fakerText}</span></Background>);
    const childrenText = getByText(fakerText);
    expect(childrenText).toBeTruthy();
  });
});
