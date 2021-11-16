import React, { FC, ComponentProps, HTMLAttributes } from 'react';

import { Icon } from '../Icon';
import './Fallback.styles.scss';

export const Fallback: FC = ({ children }) => (
  <div className='rcx-fallback'>{children}</div>
);

export const FallbackIcon: FC<{ name: ComponentProps<typeof Icon>['name'] }> =
  ({ name }) => (
    <Icon
      name={name}
      size='x24'
      className='rcx-fallback__icon'
      mbe='x20'
      bg='#f2f3f5'
      borderRadius='32px'
      p='16px'
    />
  );

export const FallbackTitle: FC = () => (
  <div className='rcx-fallback__title'>No app matches</div>
);

export const FallbackList: FC = () => (
  <div className='rcx-fallback__list'>
    You can try to: <br />
    <ul>
      <li>
        <span>Search by category</span>
      </li>
      <li>
        <span>Search for a more general term</span>
      </li>
      <li>
        <span>Search for a more specific term</span>
      </li>
      <li>
        <span>Check if the spelling is correct</span>
      </li>
    </ul>
  </div>
);

interface FallbackDescriptionType extends HTMLAttributes<HTMLElement> {
  searchTerm: string;
}

export const FallbackDescription: FC<FallbackDescriptionType> = ({
  searchTerm,
}: FallbackDescriptionType) => (
  <div className='rcx-fallback__description'>
    No Marketplace matches for:
    <div>
      <strong>"{searchTerm}"</strong>
      <br />
      <br />
    </div>
    <FallbackList />
  </div>
);
