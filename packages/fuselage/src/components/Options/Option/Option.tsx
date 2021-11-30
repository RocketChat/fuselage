import React, { FC, Ref, ComponentProps, ReactNode } from 'react';

import { Box } from '../../Box';
import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';

const OptionColumn: FC = (props) => (
  <div className='rcx-option__column' {...props} />
);
const OptionContent: FC = (props) => (
  <div className='rcx-option__content' {...props} />
);
const OptionAvatar: FC = (props) => (
  <div className='rcx-option__avatar' {...props} />
);
const OptionDescription: FC = (props) => (
  <div className='rcx-option__description' {...props} />
);
const OptionIcon = ({
  name,
}: {
  name: ComponentProps<typeof Icon>['name'];
}) => (
  <OptionColumn>
    <Icon size='x20' name={name} />
  </OptionColumn>
);

const OptionSkeleton = () => (
  <Option>
    <OptionAvatar>
      <Skeleton variant='rect' width={28} height={28} />
    </OptionAvatar>
    <OptionContent>
      <Skeleton width='100%' />
    </OptionContent>
  </Option>
);

const OptionMenu: FC = (props) => (
  <div className='rcx-box--animated rcx-option__menu-wraper' {...props} />
);

type OptionProps = {
  is?: ComponentProps<typeof Box>['is'];
  id?: string;
  children: ReactNode;
  label?: string;
  focus?: boolean;
  selected?: boolean;
  className?: ComponentProps<typeof Box>['className'];
  ref?: Ref<Element>;
  icon?: string;
  avatar?: ReactNode;
  title?: string;
} & Pick<ComponentProps<typeof Box>, 'onClick'>;

const Option = React.memo(
  ({
    is: Tag = 'li',
    id,
    children,
    label,
    focus,
    selected,
    className,
    ref,
    icon,
    avatar,
    title,
    onClick,
    ...options
  }: OptionProps) => (
    <Tag
      key={id}
      id={id}
      ref={ref}
      aria-selected={selected}
      title={title}
      onClick={onClick}
      {...options}
      className={[
        'rcx-option',
        className,
        focus && 'rcx-option--focus',
        selected && 'rcx-option--selected',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className='rcx-option__wrapper'>
        {avatar && <OptionAvatar>{avatar}</OptionAvatar>}
        {icon && <OptionIcon name={icon} />}
        {label && <OptionContent>{label}</OptionContent>}
        {label !== children && children}
      </div>
    </Tag>
  )
);

export default Object.assign(Option, {
  Description: OptionDescription,
  Skeleton: OptionSkeleton,
  Avatar: OptionAvatar,
  Menu: OptionMenu,
  Icon: OptionIcon,
  Column: OptionColumn,
  Content: OptionContent,
});
