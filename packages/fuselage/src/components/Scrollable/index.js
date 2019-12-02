import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';

import { createStylingComponent } from '../../styles';

export const Scrollable = createStylingComponent(({ horizontal, vertical }) => ({
  className: useClassName('rcx-scrollable', { horizontal, vertical }),
  depth: 1,
}));

Scrollable.displayName = 'Scrollable';

Scrollable.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
};
