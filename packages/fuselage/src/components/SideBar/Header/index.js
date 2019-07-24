import React from 'react';
import { cross } from '@rocket.chat/icons/dist/font';

import { useStyle } from '../../../hooks/styles';
import { Icon } from '../../Icon';
import styles from './styles.scss';


export function SideBarHeader({
  title,
  closeable = true,
  onClosing,
  className,
  ...props
}) {
  const sideBarHeaderClassName = useStyle(styles, 'rcx-side-bar__header', {}, className);
  const sideBarHeaderTitleClassName = useStyle(styles, 'rcx-side-bar__header-title');
  const sideBarHeaderButtonClassName = useStyle(styles, 'rcx-side-bar__header-button');

  return <div className={sideBarHeaderClassName} {...props}>
    {title && (
      <h2 className={sideBarHeaderTitleClassName}>
        {title}
      </h2>
    )}

    {closeable && (
      <button className={sideBarHeaderButtonClassName} onClick={onClosing}>
        <Icon name={cross} />
      </button>
    )}
  </div>;
}
