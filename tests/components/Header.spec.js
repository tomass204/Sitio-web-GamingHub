const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
const { BrowserRouter } = require('react-router-dom');
const Header = require('../../components/Header');

describe('Header Component', () => {
  const mockLinks = [
    { path: '/test', label: 'Test', icon: 'fas fa-test' }
  ];

  const renderHeader = (props = {}) => {
    return render(
      <BrowserRouter>
        <Header title="Test Title" links={mockLinks} {...props} />
      </BrowserRouter>
    );
  };

  it('renders the title correctly', () => {
    renderHeader();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderHeader();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('toggles menu on button click', () => {
    renderHeader();
    const toggleButton = screen.getByRole('button', { name: /toggle/i });
    fireEvent.click(toggleButton);
    // Check if menu is open (this would need more specific implementation)
  });
});
