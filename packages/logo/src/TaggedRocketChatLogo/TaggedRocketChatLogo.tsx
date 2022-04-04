import colors from '@rocket.chat/fuselage-tokens/dist/colors.json';
import type { ReactElement } from 'react';

import RocketChatLogo from '../RocketChatLogo';
import { LogoContainer, LogoTag } from './TaggedRocketChatLogo.styles';

type TaggedRocketChatLogoProps = {
  tagTitle?: string;
  tagBackground?: string;
  color?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const TaggedRocketChatLogo = ({
  tagTitle,
  tagBackground = colors.r500,
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
