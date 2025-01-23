import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders loading text and then the project table', async () => {
  render(<App />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  expect(screen.getByText(/Percentage funded/i)).toBeInTheDocument();
});
