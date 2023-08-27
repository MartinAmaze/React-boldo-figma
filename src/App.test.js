import { render, screen } from '@testing-library/react';
import boldo from './App';

test('renders learn react link', () => {
  render(<boldo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
