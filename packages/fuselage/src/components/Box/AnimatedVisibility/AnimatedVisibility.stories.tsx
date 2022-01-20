import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';

import { AnimatedVisibility, Field, Margins, ToggleSwitch, Tile } from '../..';

export default {
  title: 'Box/Modifiers/AnimatedVisibility',
  component: AnimatedVisibility,
} as ComponentMeta<typeof AnimatedVisibility>;

export const Default: ComponentStory<typeof AnimatedVisibility> = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Margins block='x16'>
      <Field>
        <Field.Row>
          <ToggleSwitch
            checked={visible}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setVisible(e.currentTarget.checked)
            }
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
