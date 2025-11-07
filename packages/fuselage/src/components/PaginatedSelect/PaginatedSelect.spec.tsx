import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import { PaginatedSelect } from './PaginatedSelect.js';

describe('[PaginatedSelect Component]', () => {
  test('should render placeholder when provided', () => {
    const placeholder = 'Select an option...';
    const defaultProps = {
      filter: '',
      setFilter: vi.fn(),
      onChange: vi.fn(),
      options: [{ value: 'item1', label: `Item #1` }],
    };

    render(<PaginatedSelect {...defaultProps} placeholder={placeholder} />);

    expect(screen.getByText(placeholder)).toBeVisible();
  });
});
