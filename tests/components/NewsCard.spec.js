import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsCard from '../../components/NewsCard';

describe('NewsCard Component', () => {
  const mockProps = {
    title: 'Test News',
    image: 'test-image.jpg',
    summary: 'This is a long summary that should be truncated initially and expanded when the button is clicked.'
  };

  it('renders the title correctly', () => {
    render(<NewsCard {...mockProps} />);
    expect(screen.getByText('Test News')).toBeInTheDocument();
  });

  it('renders truncated summary initially', () => {
    render(<NewsCard {...mockProps} />);
    expect(screen.getByText(/This is a long summary/)).toBeInTheDocument();
    expect(screen.getByText('Ver más')).toBeInTheDocument();
  });

  it('expands summary when "Ver más" button is clicked', () => {
    render(<NewsCard {...mockProps} />);
    const button = screen.getByText('Ver más');
    fireEvent.click(button);
    expect(screen.getByText(mockProps.summary)).toBeInTheDocument();
    expect(screen.getByText('Ver menos')).toBeInTheDocument();
  });

  it('collapses summary when "Ver menos" button is clicked', () => {
    render(<NewsCard {...mockProps} />);
    const button = screen.getByText('Ver más');
    fireEvent.click(button);
    const collapseButton = screen.getByText('Ver menos');
    fireEvent.click(collapseButton);
    expect(screen.getByText('Ver más')).toBeInTheDocument();
  });
});
