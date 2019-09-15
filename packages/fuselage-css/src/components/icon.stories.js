import * as iconNames from '@rocket.chat/icons/dist/font';
import { storiesOf } from '@storybook/react';
import React from 'react';

import '../fuselage.scss';


function Icons() {
  const styles = {
    container: {
      display: 'flex',
      flexFlow: 'row wrap',
    },
    wrapper: {
      margin: '0.5rem',
      minWidth: '9rem',
      display: 'flex',
      flexFlow: 'column nowrap',
      flex: '1 0 auto',
      alignItems: 'stretch',
      overflow: 'hidden',
    },
    icon: {
      padding: '1rem',
      color: 'gray',
      fontSize: '40px',
      textAlign: 'center',
      direction: 'ltr',
    },
    info: {
      padding: '0.5rem',
    },
    name: {
      color: 'gray',
      textAlign: 'center',
      fontFamily: 'sans-serif',
    },
  };

  return <div style={styles.container}>
    {Object.values(iconNames).map((name, key) =>
      <div key={key} style={styles.wrapper}>
        <div style={styles.icon}>
          <i aria-hidden='true' className={`rcx-icon rcx-icon--${ name }`} />
        </div>
        <div style={styles.info}>
          <div style={styles.name}>{name}</div>
        </div>
      </div>
    )}
  </div>;
}

storiesOf('Elements|Icon', module)
  .lokiSkip('Icon', () => <Icons />);
