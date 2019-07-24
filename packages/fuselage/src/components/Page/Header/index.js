import React from 'react';

import { Button } from '../../Button';
import { useStyle } from '../../../hooks/styles';
import styles from './styles.scss';


export function PageHeaderTitle({
  className,
  ...props
}) {
  const pageHeaderTitleClassName = useStyle(styles, 'rcx-page-header__title', {}, className);

  return <h2 className={pageHeaderTitleClassName} {...props} />;
}

export function PageHeaderBurgerButton(props) {
  const pageHeaderBurgerButtonIconClassName = useStyle(styles, 'rcx-page-header__burger-button-icon');

  return <Button square nude {...props}>
    <span className={pageHeaderBurgerButtonIconClassName}>
      <span />
      <span />
      <span />
    </span>
  </Button>;
}

export function PageHeader({
  className,
  ...props
}) {
  const pageHeaderClassName = useStyle(styles, 'rcx-page-header', {}, className);

  return <div className={pageHeaderClassName} {...props} />;
}
