import { enumCssPropertyUtility } from '../important';

export const display = enumCssPropertyUtility({
  property: 'display',
  values: [
    'block',
    'inline-block',
    'inline',
    'flex',
    'inline-flex',
    'table',
    'inline-table',
    'table-caption',
    'table-cell',
    'table-column',
    'table-column-group',
    'table-footer-group',
    'table-header-group',
    'table-row-group',
    'table-row',
    'flow-root',
    'grid',
    'inline-grid',
    'contents',
    'list-item',
    'none',
  ] as const,
  name: (value) => (value === 'none' ? 'hidden!' : `${value}!`),
});
