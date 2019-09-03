import { css } from 'styled-components';

import typography from '../theme/typography';


export const withTextVariant = ({
  fontFamily,
  fontSize,
  fontWeight = 'normal',
  letterSpacing = 0,
  lineHeight,
}) => css`
  font-family: ${ fontFamily };
  font-size: ${ fontSize };
  font-variant-numeric: tabular-nums;
  font-weight: ${ fontWeight };
  letter-spacing: ${ letterSpacing };
  line-height: ${ lineHeight };
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
  text-decoration: none;
`;

export const withTextAlignment = (textAlignment) =>
  textAlignment && css`text-align: ${ textAlignment };`;

export const withTextColor = (textColor) =>
  textColor && css`color: ${ textColor };`;

const textVariants = ({ textVariant }) =>
  (textVariant === 'headline' && withTextVariant(typography.headline))
  || (textVariant === 'subtitle' && withTextVariant(typography.subtitle))
  || (textVariant === 'boldSubtitle' && withTextVariant(typography.boldSubtitle))
  || (textVariant === 'paragraph' && withTextVariant(typography.paragraph))
  || (textVariant === 'boldParagraph' && withTextVariant(typography.boldParagraph))
  || (textVariant === 'caption' && withTextVariant(typography.caption))
  || (textVariant === 'boldCaption' && withTextVariant(typography.boldCaption))
  || (textVariant === 'micro' && withTextVariant(typography.micro))
  || withTextVariant(typography.paragraph);

const textAlignmentVariants = ({ textAlignment }) => withTextAlignment(textAlignment);

const textColorVariants = ({ textColor }) =>
  (textColor === 'default' && withTextColor(typography.colors.default))
  || (textColor === 'info' && withTextColor(typography.colors.info))
  || (textColor === 'hint' && withTextColor(typography.colors.hint))
  || (textColor === 'disabled' && withTextColor(typography.colors.disabled))
  || (textColor === 'primary' && withTextColor(typography.colors.primary))
  || (textColor === 'success' && withTextColor(typography.colors.success))
  || (textColor === 'danger' && withTextColor(typography.colors.danger))
  || (textColor === 'warning' && withTextColor(typography.colors.warning))
  || (textColor === 'alternative' && withTextColor(typography.colors.alternative))
  || withTextColor(typography.colors.default);

export const withText = css`
  ${ textVariants }
  ${ textAlignmentVariants }
  ${ textColorVariants }
`;
