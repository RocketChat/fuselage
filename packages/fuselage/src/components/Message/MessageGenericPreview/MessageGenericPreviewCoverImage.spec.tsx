import { screen } from '@testing-library/react';

import { render } from '../../../testing';
import { MessageGenericPreviewCoverImage } from './MessageGenericPreviewCoverImage';

describe('MessageGenericPreviewCoverImage', () => {
  it('renders without crashing', () => {
    render(<MessageGenericPreviewCoverImage url='' width={200} height={200} />);
  });

  it('should render div with background image', () => {
    render(
      <MessageGenericPreviewCoverImage url='test' width={200} height={200} />,
    );
    const previewImage = screen.getByTestId('preview-image');

    expect(previewImage).toHaveStyle({
      background: 'test',
    });
    expect(previewImage).toHaveClass('rcx-message-generic-preview__preview');
    expect(previewImage).not.toHaveClass(
      'rcx-message-generic-preview__preview--image',
    );
  });
});
