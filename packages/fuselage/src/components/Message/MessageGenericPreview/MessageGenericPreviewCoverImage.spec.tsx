import { render, screen } from '@testing-library/react';

import { MessageGenericPreviewCoverImage } from './MessageGenericPreviewCoverImage';

describe('MessageGenericPreviewCoverImage', () => {
  it('renders without crashing', () => {
    render(
      <MessageGenericPreviewCoverImage url='' width={200} height={200} />,
      { legacyRoot: true }
    );
  });

  it('should render div with background image', () => {
    render(
      <MessageGenericPreviewCoverImage url='test' width={200} height={200} />,
      { legacyRoot: true }
    );
    const previewImage = screen.getByTestId('preview-image');

    expect(previewImage).toHaveStyle({
      background: 'test',
    });
    expect(previewImage).toHaveClass('rcx-message-generic-preview__preview');
    expect(previewImage).not.toHaveClass(
      'rcx-message-generic-preview__preview--image'
    );
  });
});
