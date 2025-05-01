import { render, screen } from '@testing-library/react';
import ItemCard from './ItemCard';

describe('ItemCard', () => {
  it('shows title and body snippet', () => {
    render(<ItemCard title="Hello" body="This is a test body" />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText(/This is a test body/)).toBeInTheDocument();
  });
});
