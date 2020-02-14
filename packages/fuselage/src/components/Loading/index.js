import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-loading', 'div');
const Circle = Box.extend('rcx-loading__circle', 'span');

export const Loading = forwardRef(function TabsItem({ disabled, ...props }, ref) {
  return <Container
    ref={ref}
    {...props}>
    <Circle mod-disabled={!!disabled}/>
    <Circle mod-disabled={!!disabled}/>
    <Circle mod-disabled={!!disabled}/>
  </Container>;
});

Loading.propTypes = {
  disabled: PropTypes.bool,
};
