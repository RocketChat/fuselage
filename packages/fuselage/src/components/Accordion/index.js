import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Item } from './Item';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-accordion');

export const Accordion = React.forwardRef(function Accordion(props, ref) {
  return <Container ref={ref} {...props} />;
});

Accordion.displayName = 'Accordion';

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Item = Item;

Accordion.styled = Container;
