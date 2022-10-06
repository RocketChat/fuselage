import { render, screen } from '@testing-library/react';
import React from 'react';

import { MessageGenericPreviewImage } from './MessageGenericPreviewImage';

describe('MessageGenericPreviewImage', () => {
  it('renders without crashing', () => {
    render(<MessageGenericPreviewImage url='' width={200} height={200} />);
  });

  it('should render div with background image', () => {
    render(<MessageGenericPreviewImage url='test' width={200} height={200} />);
    const previewImage = screen.getByTestId('preview-image');

    expect(previewImage).toHaveStyle({
      background: 'test',
    });
    expect(previewImage).toHaveClass('rcx-message-generic-preview__preview');
    expect(previewImage).not.toHaveClass(
      'rcx-message-generic-preview__preview--image'
    );
  });

  it('should render anchor with background image when has external url', () => {
    render(
      <MessageGenericPreviewImage
        url='test'
        externalUrl='external'
        width={200}
        height={200}
      />
    );
    const previewImage = screen.getByTestId('preview-image');

    expect(previewImage).toHaveStyle({
      background: 'test',
    });
    expect(previewImage).toHaveAttribute('href', 'external');
    expect(previewImage).toHaveAttribute('target', '_blank');
  });

  it('should render image preview when pass imagePreview', () => {
    render(
      <MessageGenericPreviewImage
        url='test'
        width={200}
        height={200}
        imagePreview
      />
    );
    const previewImage = screen.getByTestId('preview-image');

    expect(previewImage).toHaveStyle({
      background: 'test',
    });
    expect(previewImage).toHaveClass(
      'rcx-message-generic-preview__preview--image'
    );
  });
});
