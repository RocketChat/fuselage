import { Location, Redirect, Router } from '@reach/router';
import React, { lazy } from 'react';

import { LoadingSplashScreen } from '../components/LoadingSplashScreen';
import styles from './styles.module.css';
import { SideBarState, SideBar } from '../components/SideBar';


const CurrentChats = lazy(() => import('../routes/CurrentChats'));
const OfficeHours = lazy(() => import('../routes/OfficeHours'));

export function App() {
  return <React.Suspense fallback={<LoadingSplashScreen />}>
    <main className={styles.App}>
      <SideBarState>
        <Location>
          {({ location: { pathname: currentUrl } }) => <>
            <SideBar onClosing={console.log} url={currentUrl}/>
          </>}
        </Location>
        <Router className={styles.App__routes}>
          <Redirect from='/' to='/current-chats' />
          <CurrentChats path='/current-chats' />
          <OfficeHours path='/office-hours' />
        </Router>
      </SideBarState>
    </main>
  </React.Suspense>;
}
