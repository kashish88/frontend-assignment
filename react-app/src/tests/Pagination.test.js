import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';
import { act } from "react";

const mockOnPageChange = jest.fn();

describe('Pagination Component', () => {
  const totalRecords = 25;
  const recordsPerPage = 5;

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  test('renders the correct number of pages', () => {
    render(
      <Pagination
        totalRecords={totalRecords}
        recordsPerPage={recordsPerPage}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />
    );

    
    const pageButtons = screen.getAllByRole('button');
    expect(pageButtons).toHaveLength(7); 
  });

  test('disables Previous button on the first page', () => {
    render(
      <Pagination
        totalRecords={totalRecords}
        recordsPerPage={recordsPerPage}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />
    );

    const prevButton = screen.getByText(/previous/i);
    expect(prevButton).toBeDisabled();
  });

  test('disables Next button on the last page', () => {
    render(
      <Pagination
        totalRecords={totalRecords}
        recordsPerPage={recordsPerPage}
        currentPage={5}
        onPageChange={mockOnPageChange}
      />
    );

    const nextButton = screen.getByText(/next/i);
    expect(nextButton).toBeDisabled();
  });

  test('calls onPageChange with correct page number when a page button is clicked', () => {
    render(
      <Pagination
        totalRecords={totalRecords}
        recordsPerPage={recordsPerPage}
        currentPage={1}
        onPageChange={mockOnPageChange}
      />
    );

    const page2Button = screen.getByText('2');
    fireEvent.click(page2Button);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  test('highlights the current page as active', () => {
    render(
      <Pagination
        totalRecords={totalRecords}
        recordsPerPage={recordsPerPage}
        currentPage={3}
        onPageChange={mockOnPageChange}
      />
    );

    const page3Button = screen.getByText('3');
    expect(page3Button).toHaveClass('active');
  });
});
