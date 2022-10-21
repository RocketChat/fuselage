import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './stories';

const { ToastBarWithData } = composeStories(stories);

describe('[ToastBarWithData Component]', () => {
  it('renders without crashing', () => {
    render(<ToastBarWithData />);
  });
});
