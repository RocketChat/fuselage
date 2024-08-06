import { render, screen } from '@testing-library/react';

import { MessageGenericPreviewImage } from './MessageGenericPreviewImage';

describe('MessageGenericPreviewImage', () => {
  it('renders without crashing', () => {
    render(<MessageGenericPreviewImage url='' />, { legacyRoot: true });
  });

  it('should render image', () => {
    render(<MessageGenericPreviewImage url='test' />, { legacyRoot: true });
    const previewImage = screen.getByRole('presentation');

    expect(previewImage).toBeInTheDocument();
    expect(previewImage).toHaveAttribute('src', 'test');
  });
});
