import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { render } from '../../../testing.js';

import { MessageGenericPreviewImage } from './MessageGenericPreviewImage.js';

describe('MessageGenericPreviewImage', () => {
  it('renders without crashing', () => {
    render(<MessageGenericPreviewImage url='' />);
  });

  it('should render image', () => {
    render(<MessageGenericPreviewImage url='test' />);
    const previewImage = screen.getByRole('presentation');

    expect(previewImage).toBeInTheDocument();
    expect(previewImage).toHaveAttribute('src', 'test');
  });
});
