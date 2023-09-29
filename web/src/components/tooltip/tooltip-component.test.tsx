import { render, screen, waitFor } from '@testing-library/react';
import { RightTooltip } from './tooltip-component';
import { faker } from "@faker-js/faker";
import { expect } from 'vitest';
import userEvent from '@testing-library/user-event';


describe('RightTooltip', () => {
  it('renders the provided value and tooltip', async () => {
    const value = faker.lorem.word(5)
    const tooltip = faker.lorem.word(6)
    const {getByText} = render(<RightTooltip value={value} tooltip={tooltip} />);
    const tooltipElement = screen.getByRole('presentation');
    expect(tooltipElement).toBeInTheDocument();
    expect(screen.getByText(value)).toBeInTheDocument();
    userEvent.hover(tooltipElement);

    waitFor(() => {
      expect(getByText(tooltip)).toBeVisible();
    });

    userEvent.unhover(tooltipElement)

  });
});
