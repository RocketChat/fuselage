import React, { FC, ComponentProps } from 'react';

import { Button } from '..';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import './Fallback.styles.scss';

export const Fallback: FC = ({ children }) => (
  <div className='rcx-fallback'>{children}</div>
);

export const FallbackIcon: FC<{
  name: ComponentProps<typeof Icon>['name'];
}> = ({ name }) => (
  <div className='rcx-fallback__icon'>
    <Icon name={name} size='x32' />
  </div>
);

export const FallbackTitle: FC = ({ children }) => (
  <div className='rcx-fallback__title'>{children}</div>
);
export const FallbackSubtitle: FC = ({ children }) => (
  <div className='rcx-fallback__subtitle'>{children}</div>
);

export const FallbackSuggestion: FC = ({ children }) => (
  <div className='rcx-fallback__suggestion'>{children}</div>
);

export const FallbackSuggestionText: FC = ({ children }) => (
  <div className='rcx-fallback__suggestion-text'>{children}</div>
);

export const FallbackSuggestionList: FC = ({ children }) => (
  <ul className='rcx-fallback__list'>{children}</ul>
);

export const FallbackSuggestionListItem: FC = ({ children }) => (
  <li>{children}</li>
);

export const FallbackActions: FC<ComponentProps<typeof ButtonGroup>> = ({
  children,
  ...props
}) => <ButtonGroup {...props}> {children} </ButtonGroup>;

export const FallbackAction: FC<ComponentProps<typeof Button>> = ({
  ...props
}) => <Button primary {...props} />;
