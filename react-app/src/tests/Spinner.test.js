import { render, screen } from '@testing-library/react';
import Spinner from '../components/Spinner';
import { act } from "react";

describe('Spinner Component', () => {
  test('renders the spinner', () => {
    render(<Spinner />);

    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute('aria-live', 'polite');
  });

  test('has appropriate accessibility text', () => {
    render(<Spinner />);

    const hiddenText = screen.getByText(/Loading, please wait/i);
    expect(hiddenText).toBeInTheDocument();
  });
});
