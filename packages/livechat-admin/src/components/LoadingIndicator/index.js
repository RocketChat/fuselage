import React from 'react';

import styles from './styles.module.css';

export function LoadingIndicator(props) {
  return (
    <div className={styles.LoadingIndicator} {...props}>
      {Array.from({ length: 3 }, (_, order) => (
        <span key={order} className={styles.LoadingIndicator__dot} />
      ))}
    </div>
  );
}
