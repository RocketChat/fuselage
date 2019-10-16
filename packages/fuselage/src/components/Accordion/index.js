import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from '../../hooks/useTheme';
import { Item } from './Item';
import { StyledAccordion } from './styles';

export const Accordion = React.forwardRef(function Accordion({
  className,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-accordion', {}, className);
  const theme = useTheme();
  return <StyledAccordion className={compoundClassName} ref={ref} theme={theme} {...props} />;
});

Accordion.displayName = 'Accordion';

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

Accordion.Item = Item;
