import React, { memo, useMemo } from 'react';

import { ContextElement } from '../../elements/ContextElement/ContextElement';

const ContextBlock = ({ className = undefined, blockElement, parser }) => {
  const { appId, blockId, elements } = blockElement;

  const itemElements = useMemo(
    () => elements.map((element) => ({ appId, blockId, ...element })),
    [appId, blockId, elements]
  );
  return (
    <ContextElement
      className={className}
      elements={itemElements}
      parser={parser}
    />
  );
};

export default memo(ContextBlock);
