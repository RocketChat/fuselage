import { render, screen } from '@testing-library/react';
import React from 'react';

import { MessageGenericPreviewImageLink } from './MessageGenericPreviewImageLink';

describe('MessageGenericPreviewImageLinkLink', () => {
  it('renders without crashing', () => {
    render(<MessageGenericPreviewImageLink url='' />);
  });

  it('should render image', () => {
    render(<MessageGenericPreviewImageLink url='test' />);
    const previewImage = screen.getByRole('img');

    expect(previewImage).toBeInTheDocument();
    expect(previewImage).toHaveAttribute('src', 'test');
  });
});
