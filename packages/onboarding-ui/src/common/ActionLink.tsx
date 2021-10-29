import { Box } from '@rocket.chat/fuselage';
import { MouseEvent, ReactElement, ReactNode, useCallback } from 'react';

type ActionLinkProps = {
  children?: ReactNode;
  href?: string;
  fontSize?: string;
  fontWeight?: number;
  onClick?: () => void;
};

const ActionLink = ({
  children,
  href = '#',
  onClick,
  fontSize,
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
      fontScale='c2'
      fontSize={fontSize}
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
