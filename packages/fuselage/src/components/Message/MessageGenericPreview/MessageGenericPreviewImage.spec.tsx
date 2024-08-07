import { screen } from '@testing-library/react';

import { render } from '../../../testing';
import { MessageGenericPreviewImage } from './MessageGenericPreviewImage';

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
