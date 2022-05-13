import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { HomePage } from "../pages";

test('renders learn react link', () => {
    render(<HomePage />, { wrapper: BrowserRouter });
    const linkElement = screen.getByText(/Nithin P B/i);
    expect(linkElement).toBeInTheDocument();
});
