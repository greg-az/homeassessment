import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('calls onChange when user types', () => {
    const fn = vi.fn();
    render(<SearchBar query="" onChange={fn} />);
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'foo' } });
    expect(fn).toHaveBeenCalledWith('foo');
  });
});
