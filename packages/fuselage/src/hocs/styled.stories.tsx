import { Story } from '@storybook/react';
import React from 'react';

import { styled } from './index';

export default {
  title: 'HOCs/styled',
};

const StyledComponent = styled((props) => <div {...props} />)`
  width: 100px;
  height: 100px;
  background-image: linear-gradient(to left, red, green, blue);
`;

const styledStory: Story = () => <StyledComponent />;
styledStory.storyName = 'styled';

export { styledStory as styled };
