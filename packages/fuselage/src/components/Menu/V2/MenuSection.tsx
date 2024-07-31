import type { Node } from '@react-types/shared';
import { useMenuSection, useSeparator } from 'react-aria';
import type { TreeState } from 'react-stately';

import Box from '../../Box/Box';
import { Divider } from '../../Divider';
import { OptionTitle } from '../../Option';
import MenuItem from './MenuItem';

type MenuSectionProps<T extends object> = {
  section: Node<T>;
  state: TreeState<unknown>;
};

function MenuSection<T extends object>({
  section,
  state,
}: MenuSectionProps<T>) {
  const { itemProps, headingProps, groupProps } = useMenuSection({
    'heading': section.rendered,
    'aria-label': section['aria-label'],
  });

  const { separatorProps } = useSeparator({
    elementType: 'span',
  });

  // If the section is not the first, add a separator element.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <Divider {...separatorProps} />
      )}
      <div {...itemProps}>
        {section.rendered && (
          <OptionTitle {...headingProps}>{section.rendered}</OptionTitle>
        )}
        <Box {...groupProps} p='0'>
          {[...section.childNodes].map((node) => (
            <MenuItem key={node.key} item={node as any} state={state} />
          ))}
        </Box>
      </div>
    </>
  );
}

export default MenuSection;
