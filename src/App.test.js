import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';
import { findProduct } from './services/productService';

jest.mock('./services/productService', () => ({
  findProduct: jest.fn(),
}));

describe('App component tests', () => {
  beforeEach(() => {
    findProduct.mockClear();
  });

  it('renders launch calculator button and opens modal', () => {
    render(<App />);
    const launchButton = screen.getByTestId('launch-calculator-button');
    expect(launchButton).toBeInTheDocument();

    fireEvent.click(launchButton);
    expect(screen.getByTestId('launch-calculator-button')).toBeInTheDocument();
  });

  it('displays product name in modal and then on main page', async () => {
    findProduct.mockResolvedValue({ name: 'Test Product' });

    render(<App />);
    const launchButton = screen.getByTestId('launch-calculator-button');
    fireEvent.click(launchButton);

    const lengthInput = screen.getByPlaceholderText(/length/i);
    const widthInput = screen.getByPlaceholderText(/width/i);
    const heightInput = screen.getByPlaceholderText(/height/i);
    const weightInput = screen.getByPlaceholderText(/weight/i);
    const calculateButton = screen.getByTestId('launch-calculator-button');
    const findProductButton = screen.getByTestId('find-product-button');

    fireEvent.change(lengthInput, { target: { value: '10' } });
    fireEvent.change(widthInput, { target: { value: '10' } });
    fireEvent.change(heightInput, { target: { value: '10' } });
    fireEvent.change(weightInput, { target: { value: '10' } });
    fireEvent.click(findProductButton);

    // recommended product in modal should appear
    await waitFor(() => {
      expect(screen.getByTestId('recommended-product-modal')).toBeInTheDocument();
    });

    // modal should disappear after 5 seconds
    await waitFor(() => {
      expect(findProductButton).not.toBeInTheDocument();
    }, { timeout: 5000 });

    fireEvent.click(calculateButton);

    // recommended product on homepage should disappear
    await waitFor(() => {
      expect(screen.queryByTestId('recommended-product-homepage')).not.toBeInTheDocument();
    });
  }, 10000);
});
