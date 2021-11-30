import React, { FC, ComponentProps } from 'react';

import { Button } from '..';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import './States.styles.scss';

export const States: FC = ({ children }) => (
  <div className='rcx-states'>{children}</div>
);

export const StatesIcon: FC<{
  name: ComponentProps<typeof Icon>['name'];
  // variation?: 'danger';
}> = ({ name }) => (
  <div className='rcx-states__icon'>
    <Icon name={name} size='x32' />
  </div>
);

export const StatesTitle: FC = ({ children }) => (
  <div className='rcx-states__title'>{children}</div>
);
export const StatesSubtitle: FC = ({ children }) => (
  <div className='rcx-states__subtitle'>{children}</div>
);

export const StatesSuggestion: FC = ({ children }) => (
  <div className='rcx-states__suggestion'>{children}</div>
);
export const StatesSuggestionText: FC = ({ children }) => (
  <div className='rcx-states__suggestion-text'>{children}</div>
);

export const StatesSuggestionList: FC = ({ children }) => (
  <ul className='rcx-states__list'>{children}</ul>
);

export const StatesSuggestionListItem: FC = ({ children }) => (
  <li className='rcx-states__list-item'>
    <span className='rcx-states__list-item-wrapper'>{children}</span>
  </li>
);

export const StatesActions: FC<ComponentProps<typeof ButtonGroup>> = ({
  children,
  ...props
}) => <ButtonGroup {...props}> {children} </ButtonGroup>;

export const StatesAction: FC<ComponentProps<typeof Button>> = ({
  ...props
}) => <Button primary {...props} />;
