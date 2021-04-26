import { Grid } from '@rocket.chat/fuselage';
import React from 'react';

const breakpoints = {
  xs: 4,
  sm: 4,
  md: 4,
  lg: 6,
  xl: 6,
};

const Fields = ({ fields, parser }) => (
  <Grid>
    {fields.map((field, i) => (
      <Grid.Item {...breakpoints} key={i}>
        {parser.text(field)}
      </Grid.Item>
    ))}
  </Grid>
);

export default Fields;
