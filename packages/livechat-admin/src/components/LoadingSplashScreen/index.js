import React from 'react';

import { LoadingIndicator } from '../LoadingIndicator';
import styles from './styles.module.css';

export function LoadingSplashScreen() {
  return <div className={styles.LoadingSplashScreen}>
    <LoadingIndicator />
  </div>;
}
