import { Box } from '@rocket.chat/fuselage';
import {
  MouseEvent,
  ComponentProps,
  ReactElement,
  ReactNode,
  useCallback,
} from 'react';

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
  fontScale = 'c2',
  fontWeight,
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
      is='a'
      fontScale={fontScale}
      fontWeight={fontWeight}
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
