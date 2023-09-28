import { render, fireEvent, screen } from '@testing-library/react';
import { Form } from './form.component';

describe('Form component', () => {

  it('should render without crashing', () => {
    const mockFn = jest.fn();
    render(<Form fetchFilter={mockFn} />);
  });

  it('should render selects with correct options', () => {
    const mockFn = jest.fn();
    render(<Form fetchFilter={mockFn} />);
    
    // Check for one of the Payment Status options
    expect(screen.getByRole('option', { name: 'Approved' })).toBeInTheDocument();
    
    // Check for one of the Card Brand options
    expect(screen.getByRole('option', { name: 'Visa' })).toBeInTheDocument();
  });

  it('should call fetchFilter with correct values on form submit', () => {
    const mockFn = jest.fn();
    render(<Form fetchFilter={mockFn} />);

    const paymentStatusSelect = screen.getByLabelText('Status do pagamento') as HTMLSelectElement;
    const cardBrandSelect = screen.getByLabelText('Bandeira do Cartão') as HTMLSelectElement;
    const submitButton = screen.getByLabelText('Realizar busca');

    fireEvent.change(paymentStatusSelect, { target: { value: 'Approved' } });
    fireEvent.change(cardBrandSelect, { target: { value: 'Visa' } });

    fireEvent.click(submitButton);

    expect(mockFn).toHaveBeenCalledWith({
      cardBrand: 'Visa',
      status: 'Approved'
    });
  });
});
