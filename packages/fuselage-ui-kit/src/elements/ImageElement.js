import { Box } from '@rocket.chat/fuselage';
import { BlockContext } from '@rocket.chat/ui-kit';
import React, { useMemo } from 'react';

const ImageElement = ({ element, context }) => {
  const size =
    (context === BlockContext.SECTION && 88) ||
    (context === BlockContext.CONTEXT && 20) ||
    undefined;

  const style = useMemo(
    () => ({
      boxShadow: '0 0 0px 1px rgba(204, 204, 204, 38%)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      backgroundColor: 'rgba(204, 204, 204, 38%)',
      backgroundImage: `url(${element.imageUrl})`,
    }),
    [element.imageUrl]
  );

  return (
    <Box
      is='div'
      width={size}
      height={size}
      borderRadius={4}
      overflow='hidden'
      marginInlineStart={4}
      style={style}
    />
  );
};

export default ImageElement;
