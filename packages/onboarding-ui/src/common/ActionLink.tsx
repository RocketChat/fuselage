import { Box } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { MouseEvent, ReactElement, ReactNode, useCallback } from 'react';

type ActionLinkProps = {
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
};

const ActionLink = ({
  children,
  href = '#',
  onClick,
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
      href={href}
      color={colors.b200}
      textDecorationLine='none'
      onClick={handleClick}
    >
      {children}
    </Box>
  );
};

export default ActionLink;
