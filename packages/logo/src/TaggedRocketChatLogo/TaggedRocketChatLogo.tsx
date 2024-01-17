import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';

import { LogoContainer, LogoTag } from './TaggedRocketChatLogo.styles';
import RocketChatLogo from '../RocketChatLogo';

type TaggedRocketChatLogoProps = {
  tagTitle?: string;
  tagBackground?: string;
  color?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const TaggedRocketChatLogo = ({
  tagTitle,
  tagBackground = colors.r400,
  color = colors.white,
  ...props
}: TaggedRocketChatLogoProps): ReactElement => (
  <LogoContainer {...props}>
    <RocketChatLogo />
    {tagTitle && (
      <LogoTag backgroundColor={tagBackground} color={color}>
        {tagTitle}
      </LogoTag>
    )}
  </LogoContainer>
);

export default TaggedRocketChatLogo;
