import PropTypes from 'prop-types';
import React from 'react';

import { Item } from './Item';
import { Box } from '../Box';

const Container = Box.extend('rcx-accordion');

export function Accordion(props) {
  return <Container {...props} />;
}

Accordion.displayName = 'Accordion';

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Item = Item;
