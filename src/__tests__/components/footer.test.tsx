import { render, screen } from '@testing-library/react';
import Footer from '../../components/footer';

test('renders footer', () => {

    render(<Footer />);
      const element = screen.getByText(/EasyClaim/i);
      expect(element).toBeInTheDocument();

});
