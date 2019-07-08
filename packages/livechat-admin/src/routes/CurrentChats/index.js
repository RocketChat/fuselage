import { Page, PageHeader, PageHeaderTitle, ScrollableArea } from '@rocket.chat/fuselage';
import React from 'react';

import { BurgerButton } from '../../components/SideBar';


export function CurrentChats() {
  return <Page>
    <PageHeader>
      <BurgerButton />
      <PageHeaderTitle>Current Chats</PageHeaderTitle>
    </PageHeader>

    <ScrollableArea />
  </Page>;
}

export default CurrentChats;
