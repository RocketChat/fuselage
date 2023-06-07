import { css } from '@rocket.chat/css-in-js';
import React from 'react';
import { useMenuSection, useSeparator } from 'react-aria';
import type { TreeState } from 'react-stately';

import Box from '../../Box/Box';
import { Divider } from '../../Divider';
import { OptionTitle } from '../../Option';
import MenuItem from './MenuItem';
import type { Node } from './types';

const SectionStyle = css`
  list-style: none;
`;
type MenuSectionProps = {
  section: Node<unknown>;
  state: TreeState<unknown>;
};

function MenuSection({ section, state }: MenuSectionProps) {
  const { itemProps, headingProps, groupProps } = useMenuSection({
    'heading': section.rendered,
    'aria-label': section['aria-label'],
  });

  const { separatorProps } = useSeparator({
    elementType: 'li',
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <Divider {...separatorProps} />
      )}
      <li {...itemProps}>
        {section.rendered && (
          <OptionTitle {...headingProps}>{section.rendered}</OptionTitle>
        )}
        <Box {...groupProps} className={SectionStyle} p='0'>
          {[...section.childNodes].map((node) => (
            <MenuItem key={node.key} item={node} state={state} />
          ))}
        </Box>
      </li>
    </>
  );
}

export default MenuSection;
