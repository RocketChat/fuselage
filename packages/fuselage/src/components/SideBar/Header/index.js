import React from 'react';
import { cross } from '@rocket.chat/icons/dist/font';

import { useStyle } from '../../../helpers/hooks';
import { Icon } from '../../Icon';
import styles from './styles.scss';


export function SideBarHeader({
  title,
  closeable = true,
  onClosing,
  className,
  ...props
}) {
  const sideBarHeaderClassName = useStyle(styles, 'SideBar__Header', {}, className);
  const sideBarHeaderTitleClassName = useStyle(styles, 'SideBar__HeaderTitle');
  const sideBarHeaderButtonClassName = useStyle(styles, 'SideBar__HeaderButton');

  return (
    <div className={sideBarHeaderClassName} {...props}>
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
    </div>
  );
}
