import PropTypes from 'prop-types';
import React, { useRef, useCallback, useState } from 'react';

import { Box, Scrollable } from '../Box';

export const ScrollableArea = function scrollableArea({ children, style, ...props }) {
  const ref = useRef();

  const [scrollPos, setScrollPos] = useState({ top: 0, bottom: 0 });
  let scrollTimeout;

  const handleScroll = useCallback(function() {
    if (!scrollTimeout) {
      setScrollPos({ top: !!ref.current.scrollTop, bottom: !!(ref.current.scrollTop + ref.current.offsetHeight - ref.current.scrollHeight) });
    } else {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      scrollTimeout = false;
      setScrollPos({ top: !!ref.current.scrollTop, bottom: !!(ref.current.scrollTop + ref.current.offsetHeight - ref.current.scrollHeight) });
    }, 200);
  }, []);

  return <Box componentClassName='rcx-scrollable-area' is='div' mod-shadow-top={scrollPos.top} mod-shadow-bottom={scrollPos.bottom}>
    <Scrollable >
      <Box className='rcx-scrollable-area--box' {...props} children={children} onScroll={handleScroll} ref={ref} />
    </Scrollable>
  </Box>;
};

ScrollableArea.propTypes = {
  shadowTop: PropTypes.bool,
  shadowBottom: PropTypes.bool,
};
