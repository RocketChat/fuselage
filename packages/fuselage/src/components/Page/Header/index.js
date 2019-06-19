import React from 'react';

import { Button } from '../../Button';
import { useStyle } from '../../../helpers/hooks';
import styles from './styles.scss';


export function PageHeaderTitle({
  className,
  ...props
}) {
  const pageHeaderTitleClassName = useStyle(styles, 'PageHeader__Title', {}, className);

  return (
    <h2
      className={pageHeaderTitleClassName}
      {...props}
    />
  );
}

export function PageHeaderBurgerButton(props) {
  const pageHeaderBurgerButtonIconClassName = useStyle(styles, 'PageHeader__BurgerButtonIcon');

  return (
    <Button square nude {...props}>
      <span className={pageHeaderBurgerButtonIconClassName}>
        <span />
        <span />
        <span />
      </span>
    </Button>
  );
}

export function PageHeader({
  className,
  ...props
}) {
  const pageHeaderClassName = useStyle(styles, 'PageHeader', {}, className);

  return (
    <div
      className={pageHeaderClassName}
      {...props}
    />
  );
}
