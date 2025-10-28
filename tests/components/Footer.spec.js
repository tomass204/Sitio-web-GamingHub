const React = require('react');
const { render, screen } = require('@testing-library/react');
const Footer = require('../../components/Footer');

describe('Footer Component', () => {
  it('renders default copyright text', () => {
    render(<Footer />);
    expect(screen.getByText('© 2025 GamingHub. Todos los derechos reservados.')).toBeInTheDocument();
  });

  it('renders custom year when provided', () => {
    render(<Footer year={2024} />);
    expect(screen.getByText('© 2024 GamingHub. Todos los derechos reservados.')).toBeInTheDocument();
  });

  it('renders author when provided', () => {
    render(<Footer author="Test Author" />);
    expect(screen.getByText('Desarrollado por Test Author')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
  });
});
