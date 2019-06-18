import React from 'react';

// import '../reset.css';
import { LivechatSideBar } from '../LivechatSideBar';


export function CurrentChats() {
  return (
    <div style={{ width: '1312px', height: '856px', display: 'flex', flexFlow: 'row nowrap', alignItems: 'stretch', backgroundColor: '#ffffff' }}>
      <LivechatSideBar />

      <div style={{ flex: '1', display: 'flex', flexFlow: 'column nowrap' }}>
        <div style={{ width: '100%', height: '68px', padding: '0 24px', display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', backgroundColor: '#FFFFFF', boxShadow: '0 1.5px 2px 0 rgba(31, 35, 41, 0.08)' }}>
          <div style={{ color: '#1F2329', fontSize: '22px', fontWeight: '400', lineHeight: '28px', textAlign: 'left', }}>
            Current Chats
          </div>
        </div>
      </div>
    </div>
  );
}
