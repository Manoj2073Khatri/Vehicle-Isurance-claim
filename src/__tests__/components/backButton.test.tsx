import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BackButton from '../../components/backButton';



test('renders Back button', async() => {

    render(<BrowserRouter><BackButton /></BrowserRouter>);

      const element = screen.getByText(/Back/i);
      expect(element).toBeInTheDocument();

});
