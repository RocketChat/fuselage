import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import * as stories from './Select.stories';

const { Default } = composeStories(stories);

withResizeObserverMock();

describe('[Select Component]', () => {
  describe('[Default] structural tests', () => {
    it('renders without crashing', () => {
      render(<Default />);
    });

    it('should have one trigger button', async () => {
      const { getByRole } = render(<Default />);
      expect(getByRole('button')).toBeInTheDocument();
    });

    it('should have placeholder', async () => {
      const { getByLabelText } = render(<Default />);

      const placeholder = Default.args?.placeholder;
      if (!placeholder) {
        throw new Error('Placeholder is not defined');
      }
      expect(getByLabelText(placeholder)).toBeInTheDocument();
    });

    it('should have no list of options rendered', async () => {
      const { queryByRole } = render(<Default />);
      expect(queryByRole('listbox')).not.toBeInTheDocument();
    });

    describe('[when the user clicks on the trigger button]', () => {
      it('should have a list of options', async () => {
        const { getByRole, findByRole } = render(<Default />);

        (await findByRole('button')).click();
        const list = await getByRole('button');
        expect(list).toBeInTheDocument();
      });
    });
  });
});
