import React from 'react';

import '../reset.css';


export function CurrentChats() {
  return (
    <div style={{ width: '1312px', height: '856px', display: 'flex', flexFlow: 'row nowrap', alignItems: 'stretch', backgroundColor: '#ffffff' }}>
      <div style={{ width: '280px', height: '856px', display: 'flex', flexFlow: 'column nowrap', alignItems: 'stretch', backgroundColor: '#f7f8fa', borderRight: '1px solid #f0f1f5' }}>
        <div style={{ padding: '24px', display: 'flex', flexFlow: 'row nowrap' }}>
          <div style={{ flex: 1, color: 'rgb(31, 35, 41)', fontSize: '14px', fontFamily: 'sans-serif', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Livechat
          </div>
          <button style={{ padding: '0', display: 'flex', flexFlow: 'row nowrap', background: 'none', border: 'none' }}>
            <div style={{ fontSize: '20px', lineHeight: '20px' }}>&times;</div>
          </button>
        </div>

        <div style={{ padding: '8px', display: 'flex', flexFlow: 'column nowrap' }}>
          <div style={{ padding: '0 16px 8px', color: '#2f343d', fontSize: '12px', fontWeight: '600', letterSpacing: '0px', lineHeight: '16px' }}>
            Monitoring
          </div>

          <div style={{ padding: '8px 16px', color: '#9ea2a8', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Real-time Monitoring
          </div>
          <div style={{ padding: '8px 16px', backgroundColor: '#e1e5e8', borderRadius: '2px', color: '#2f343d', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Current Chats
          </div>
          <div style={{ padding: '8px 16px', color: '#9ea2a8', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Analytics
          </div>
        </div>

        <div style={{ padding: '16px 8px', display: 'flex', flexFlow: 'column nowrap' }}>
          <div style={{ padding: '0 16px 8px', color: '#2f343d', fontSize: '12px', fontWeight: '600', letterSpacing: '0px', lineHeight: '16px' }}>
            User Managements
          </div>

          <div style={{ padding: '8px 16px', color: '#9ea2a8', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Managers
          </div>
          <div style={{ padding: '8px 16px', color: '#9ea2a8', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Monitors
          </div>
          <div style={{ padding: '8px 16px', color: '#9ea2a8', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Agents
          </div>
        </div>

        <div style={{ padding: '16px 8px', display: 'flex', flexFlow: 'column nowrap' }}>
          <div style={{ padding: '0 16px 8px', color: '#2f343d', fontSize: '12px', fontWeight: '600', letterSpacing: '0px', lineHeight: '16px' }}>
            Organization
          </div>

          <div style={{ padding: '8px 16px', color: '#9ea2a8', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Sections
          </div>
          <div style={{ padding: '8px 16px', color: '#9ea2a8', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Departments
          </div>
        </div>

        <div style={{ padding: '8px', display: 'flex', flexFlow: 'column nowrap' }}>
          <div style={{ padding: '0 16px 8px', color: '#2f343d', fontSize: '12px', fontWeight: '600', letterSpacing: '0px', lineHeight: '16px' }}>
            Settings
          </div>

          <div style={{ padding: '8px 16px', color: '#9ea2a8', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Custom Fields
          </div>
          <div style={{ padding: '8px 16px', color: '#9ea2a8', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Appearance
          </div>
          <div style={{ padding: '8px 16px', color: '#9ea2a8', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Office Hours
          </div>
        </div>

        <div style={{ padding: '8px', display: 'flex', flexFlow: 'column nowrap' }}>
          <div style={{ padding: '0 16px 8px', color: '#2f343d', fontSize: '12px', fontWeight: '600', letterSpacing: '0px', lineHeight: '16px' }}>
            Integrations
          </div>

          <div style={{ padding: '8px 16px', color: '#9ea2a8', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Installation
          </div>
          <div style={{ padding: '8px 16px', color: '#9ea2a8', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Webhooks
          </div>
          <div style={{ padding: '8px 16px', color: '#9ea2a8', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.2px', lineHeight: '20px' }}>
            Facebook Messenger
          </div>
        </div>
      </div>

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
