import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Item } from './Item';
import { Box } from '../Box';

const Container = Box.extend('rcx-accordion');

export const Accordion = forwardRef(function Accordion(props, ref) {
  return <Container ref={ref} {...props} />;
});

Accordion.displayName = 'Accordion';

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Item = Item;
