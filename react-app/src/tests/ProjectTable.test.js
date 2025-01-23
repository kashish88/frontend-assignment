import { render, screen } from '@testing-library/react';
import ProjectTable from '../components/ProjectTable';
import { act } from "react";

describe('ProjectTable Component', () => {
  const mockProjects = [
    { "percentage.funded": 50, "amt.pledged": "$1000" },
    { "percentage.funded": 75, "amt.pledged": "$2000" },
    { "percentage.funded": 20, "amt.pledged": "$500" },
  ];

  test('renders the correct number of rows', () => {
    render(<ProjectTable projects={mockProjects} />);

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(mockProjects.length + 1); 
  });

  test('renders project data correctly', () => {
    render(<ProjectTable projects={mockProjects} />);

    expect(screen.getByText('$1000')).toBeInTheDocument();
    expect(screen.getByText('$2000')).toBeInTheDocument();
    expect(screen.getByText('$500')).toBeInTheDocument();
  });

  test('displays a message when there are no projects', () => {
    render(<ProjectTable projects={[]} />);

    expect(screen.getByText(/No projects available/i)).toBeInTheDocument();
  });
});
