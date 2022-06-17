import { render } from '@testing-library/react';
import React from 'react';

import UrlInput from '.';

describe('[UrlInput Component]', () => {
  it('renders without crashing', () => {
    render(<UrlInput />);
  });
});
