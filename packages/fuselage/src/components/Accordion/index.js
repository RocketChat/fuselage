import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Item } from './Item';

export function Accordion(props) {
  return <Box animated rcx-accordion {...props} />;
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Item = Item;
