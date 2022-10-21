import { Box } from '@rocket.chat/fuselage';
import type {
  MouseEvent,
  ComponentProps,
  ReactElement,
  ReactNode,
  AnchorHTMLAttributes,
} from 'react';
import { useCallback } from 'react';

import { useDarkMode } from './DarkModeProvider';

type LinkProps = {
  children?: ReactNode;
  href?: string;
  fontScale?: ComponentProps<typeof Box>['fontScale'];
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({
  children,
  href = '#',
  onClick,
  ...props
}: LinkProps): ReactElement => {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        event.preventDefault();
        onClick(event);
      }
    },
    [onClick]
  );

  const isDarkMode = useDarkMode();

  return (
    <Box
      {...props}
      is='a'
      href={href}
      color={isDarkMode ? 'primary-300' : 'primary-600'} // info
      textDecorationLine='none'
      onClick={handleClick}
    >
      {children}
    </Box>
  );
};

export default Link;
