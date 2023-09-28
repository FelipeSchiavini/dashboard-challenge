import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DotsLoading } from './loading.component';

describe('DotsLoading component', () => {
  
  it('should render without crashing', () => {
    render(<DotsLoading />);
  });

});
