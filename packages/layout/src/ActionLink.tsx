import { Box } from '@rocket.chat/fuselage';
import type {
  MouseEvent,
  ComponentProps,
  ReactElement,
  ReactNode,
} from 'react';
import { useCallback } from 'react';

type ActionLinkProps = {
  children?: ReactNode;
  href?: string;
  fontScale?: ComponentProps<typeof Box>['fontScale'];
  fontWeight?: number;
  onClick?: () => void;
};

const ActionLink = ({
  children,
  href = '#',
  onClick,
  ...props
}: ActionLinkProps): ReactElement => {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onClick?.();
    },
    [onClick]
  );

  return (
    <Box
      {...props}
      is='a'
      fontScale={'p2'}
      href={href}
      color='primary-500'
      mi='x4'
      textDecorationLine='none'
      onClick={handleClick}
    >
      {children}
    </Box>
  );
};

export default ActionLink;
