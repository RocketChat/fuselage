import { css } from '@rocket.chat/css-in-js';
import { Box, ButtonGroup, Icon } from '@rocket.chat/fuselage';
import type { FC } from 'react';
import React, { useContext } from 'react';

import { context, previewTabsToggleAction } from '../../../Context';
import ToggleTabs from '../../ToggleTabs';
import PanelBtn from './PanelBtn';

const NavPanel: FC = () => {
  const {
    state: { isMobile, isTablet, previewTabsToggle },
    dispatch,
  } = useContext(context);

  const toggleTabsHandler = (index: number) => {
    dispatch(previewTabsToggleAction(index));
  };

  const tabsItem: string[] = ['Preview', 'Editor'];
  return (
    <Box
      width={'100%'}
      height={'40px'}
      borderBlockEnd='var(--default-border)'
      display={'flex'}
      alignItems={'center'}
      zIndex={1}
      justifyContent={isMobile ? 'flex-end' : 'space-between'}
      bg='alternative'
      className={css`
        user-select: none;
      `}
    >
      <Box display='flex' height='100%'>
        {!isMobile && (
          <ButtonGroup
            pis={'20px'}
            className={css`
              column-gap: 10px;
            `}
          >
            <PanelBtn
              icon={<Icon name='file' width={16} />}
              name={'Clear Blocks'}
              isSmall={isTablet}
            />
            <PanelBtn
              icon={<Icon name='copy' width={16} />}
              name={'Copy Payload'}
              isSmall={isTablet}
            />
          </ButtonGroup>
        )}
      </Box>
      {isTablet && (
        <ToggleTabs
          tabsItem={tabsItem}
          onChange={toggleTabsHandler}
          selectedTab={previewTabsToggle}
        />
      )}
    </Box>
  );
};

export default NavPanel;
