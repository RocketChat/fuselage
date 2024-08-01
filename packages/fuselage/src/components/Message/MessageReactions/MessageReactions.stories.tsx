import { Title, Primary } from '@storybook/addon-docs';
import type { ComponentMeta } from '@storybook/react';

import { MessageReactions, MessageReaction, MessageReactionAction } from '.';
import { BasicMessageTemplate } from '../helpers';

export default {
  title: 'Message/MessageReactions',
  component: MessageReactions,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Primary />
        </>
      ),
    },
  },
} as ComponentMeta<typeof MessageReactions>;

const reactions = (
  <MessageReactions>
    <MessageReaction title='reaction 1' mine counter={1} />
    <MessageReaction title='reaction 2' counter={2} />
    <MessageReaction title='reaction 3' counter={3} />
    <MessageReactionAction title='action' />
  </MessageReactions>
);

export const Default = BasicMessageTemplate.bind({});
Default.args = {
  reactions,
};
