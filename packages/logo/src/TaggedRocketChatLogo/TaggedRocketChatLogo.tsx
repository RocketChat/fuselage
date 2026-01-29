import colors from '@rocket.chat/fuselage-tokens/colors.json' with { type: 'json' };
import type { HTMLAttributes, ReactElement } from 'react';

import RocketChatLogo from '../RocketChatLogo/index.js';

import { LogoContainer, LogoTag } from './TaggedRocketChatLogo.styles.js';

type TaggedRocketChatLogoProps = {
  tagTitle?: string;
  tagBackground?: string;
  color?: string;
} & HTMLAttributes<HTMLDivElement>;

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
