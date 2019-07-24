import { Location, Redirect, Router } from '@reach/router';
import React, { lazy } from 'react';

import { LoadingSplashScreen } from '../components/LoadingSplashScreen';
import styles from './styles.module.css';
import { SideBarState, SideBar } from '../components/SideBar';


const CurrentChats = lazy(() => import('../routes/CurrentChats'));
const OfficeHours = lazy(() => import('../routes/OfficeHours'));

export function App() {
  return <main className={styles.App}>
    <Redirect noThrow from='/' to='/current-chats' />
    <SideBarState>
      <Location>
        {({ location: { pathname: currentUrl } }) => <>
            <SideBar onClosing={console.log} url={currentUrl}/>
          </>}
      </Location>
      <React.Suspense fallback={<LoadingSplashScreen />}>
        <Router className={styles.App__routes}>
          <CurrentChats path='/current-chats' />
          <OfficeHours path='/office-hours' />
        </Router>
      </React.Suspense>
    </SideBarState>
  </main>;
}
