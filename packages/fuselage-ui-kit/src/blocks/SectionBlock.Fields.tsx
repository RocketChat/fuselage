import { Grid } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { ReactElement } from 'react';

const breakpoints = {
  xs: 4,
  sm: 4,
  md: 4,
  lg: 6,
  xl: 6,
} as const;

type FieldsProps = {
  fields: UiKit.TextObject[];
  parser: UiKit.SurfaceRenderer<ReactElement>;
};

const Fields = ({ fields, parser }: FieldsProps): ReactElement => (
  <Grid>
    {fields.map((field, i) => (
      <Grid.Item {...breakpoints} key={i}>
        {parser.renderTextObject(field, 0, -1 as UiKit.BlockContext)}
      </Grid.Item>
    ))}
  </Grid>
);

export default Fields;
