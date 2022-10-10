import { render, screen } from '@testing-library/react';
import React from 'react';

import { MessageGenericPreviewImage } from './MessageGenericPreviewImage';

describe('MessageGenericPreviewImage', () => {
  it('renders without crashing', () => {
    render(<MessageGenericPreviewImage url='' />);
  });

  it('should render image', () => {
    render(<MessageGenericPreviewImage url='test' />);
    const previewImage = screen.getByRole('img');

    expect(previewImage).toBeInTheDocument();
    expect(previewImage).toHaveAttribute('src', 'test');
  });
});
