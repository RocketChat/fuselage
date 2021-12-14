import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { AnimatedVisibility, Field, Margins, ToggleSwitch, Tile } from '../..';

export default {
  title: 'Box/Modifiers/AnimatedVisibility_new',
  component: AnimatedVisibility,
} as ComponentMeta<typeof AnimatedVisibility>;

export const Default: ComponentStory<typeof AnimatedVisibility> = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Margins block='x16'>
      <Field>
        <Field.Row>
          <ToggleSwitch
            checked={visible}
            onChange={({ currentTarget: { checked } }) => setVisible(checked)}
          />
          <Field.Label>Visible?</Field.Label>
        </Field.Row>
      </Field>
      <AnimatedVisibility
        visibility={
          visible ? AnimatedVisibility.VISIBLE : AnimatedVisibility.HIDDEN
        }
      >
        <Tile padding='x40'>Visible</Tile>
      </AnimatedVisibility>
    </Margins>
  );
};
