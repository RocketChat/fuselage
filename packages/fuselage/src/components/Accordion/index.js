import PropTypes from 'prop-types';
import React from 'react';

import { Item } from './Item';
import { Box } from '../Box';

export function Accordion(props) {
  return <Box rcx-accordion {...props} />;
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Item = Item;
