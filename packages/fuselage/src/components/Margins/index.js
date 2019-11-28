import PropTypes from 'prop-types';

import { createStylingComponent } from '../../styles';
import spaces from '../../styles/variables/spaces';

export const Margins = createStylingComponent(({
  all,
  block,
  blockStart,
  blockEnd,
  inline,
  inlineStart,
  inlineEnd,
}) => ({
  style: {
    margin: all && spaces[`x${ all }`],
    marginBlock: block && spaces[`x${ block }`],
    marginBlockStart: blockStart && spaces[`x${ blockStart }`],
    marginBlockEnd: blockEnd && spaces[`x${ blockEnd }`],
    marginInline: inline && spaces[`x${ inline }`],
    marginInlineStart: inlineStart && spaces[`x${ inlineStart }`],
    marginInlineEnd: inlineEnd && spaces[`x${ inlineEnd }`],
  },
  depth: 1,
}));

Margins.displayName = 'Margins';

Margins.propTypes = {
  all: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
  block: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
  blockStart: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
  blockEnd: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
  inline: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
  inlineStart: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
  inlineEnd: PropTypes.oneOf([2, 4, 8, 12, 16, 24, 32, 40]),
};
