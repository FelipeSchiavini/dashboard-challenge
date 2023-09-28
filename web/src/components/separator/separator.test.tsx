import { render } from '@testing-library/react';
import { Separator } from './separator.component';

describe('Separator component', () => {
  
  it('should render without crashing', () => {
    render(<Separator />);
  });

  it('should have border-bottom classes when borderBottom prop is true', () => {
    const { container } = render(<Separator borderBottom />);
    const divElement = container.firstChild;
    expect(divElement).toHaveClass('border-b-2');
  });

});
