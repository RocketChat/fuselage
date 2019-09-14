import * as iconNames from '@rocket.chat/icons/dist/font';
import { withKnobs, color, number, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Document, TextSection, ShowCaseSection } from '../../helpers/storybook';
import { Icon } from './index';


function Icons({
  color,
  direction,
  size,
}) {
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
      color,
      fontSize: `${ size }px`,
      textAlign: 'center',
      direction,
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
          <Icon iconName={name} />
        </div>
        <div style={styles.info}>
          <div style={styles.name}>{name}</div>
        </div>
      </div>
    )}
  </div>;
}

storiesOf('Elements|Icon', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Icon/spec'] })
  .lokiSkip('Icon', () => <Document>
    <TextSection>
      <h1>Icon</h1>
    </TextSection>
    <ShowCaseSection>
      <Icons
        color={color('color', 'gray')}
        direction={select('direction', ['ltr', 'rtl'], 'ltr')}
        size={number('size', 40)}
      />
    </ShowCaseSection>
  </Document>);
