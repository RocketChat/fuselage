import { css } from 'styled-components';

export const headline = (theme) => css`
  letter-spacing: ${ theme.textStyles.h1.letterSpacing };

  font-family: ${ theme.textStyles.h1.fontFamily };
  font-size: ${ theme.textStyles.h1.fontSize };
  font-weight: ${ theme.textStyles.h1.fontWeight };
  line-height: ${ theme.textStyles.h1.lineHeight };
`;

export const subtitle = (theme) => css`
  letter-spacing: ${ theme.textStyles.s1.letterSpacing };

  font-family: ${ theme.textStyles.s1.fontFamily };
  font-size: ${ theme.textStyles.s1.fontSize };
  font-weight: ${ theme.textStyles.s1.fontWeight };
  line-height: ${ theme.textStyles.s1.lineHeight };
`;

export const subtitleBold = (theme) => css`
  font-weight: ${ theme.textStyles.s2.fontWeight };
`;

export const paragraph = (theme) => css`
  letter-spacing: ${ theme.textStyles.p1.letterSpacing };

  font-family: ${ theme.textStyles.p1.fontFamily };
  font-size: ${ theme.textStyles.p1.fontSize };
  font-weight: ${ theme.textStyles.p1.fontWeight };
  line-height: ${ theme.textStyles.p1.lineHeight };
`;

export const paragraphBold = (theme) => css`
  font-weight: ${ theme.textStyles.p2.fontWeight };
`;

export const caption = (theme) => css`
  letter-spacing: ${ theme.textStyles.c1.letterSpacing };

  font-family: ${ theme.textStyles.c1.fontFamily };
  font-size: ${ theme.textStyles.c1.fontSize };
  font-weight: ${ theme.textStyles.c1.fontWeight };
  line-height: ${ theme.textStyles.c1.lineHeight };
`;

export const captionBold = (theme) => css`
  font-weight: ${ theme.textStyles.c2.fontWeight };
`;

export const micro = (theme) => css`
  letter-spacing: ${ theme.textStyles.micro.letterSpacing };

  font-family: ${ theme.textStyles.micro.fontFamily };
  font-size: ${ theme.textStyles.micro.fontSize };
  font-weight: ${ theme.textStyles.micro.fontWeight };
  line-height: ${ theme.textStyles.micro.lineHeight };
`;

export const truncate = css`
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ellipsis = css`
  overflow: hidden;

  text-overflow: ellipsis;
`;
