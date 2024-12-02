import { Box } from '@rocket.chat/fuselage';
import type {
  MouseEvent,
  ComponentProps,
  ReactElement,
  ReactNode,
  AnchorHTMLAttributes,
} from 'react';
import { useCallback } from 'react';

type ActionLinkProps = {
  children?: ReactNode;
  href?: string;
  fontScale?: ComponentProps<typeof Box>['fontScale'];
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const ActionLink = ({
  children,
  href = '#',
  onClick,
  ...props
}: ActionLinkProps): ReactElement => {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        event.preventDefault();
        onClick(event);
      }
    },
    [onClick],
  );

  return (
    <Box
      {...props}
      is='a'
      fontScale={'p2'}
      href={href}
      color='info'
      mi={4}
      textDecorationLine='none'
      onClick={handleClick}
    >
      {children}
    </Box>
  );
};

export default ActionLink;
