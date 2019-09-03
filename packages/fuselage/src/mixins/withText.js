import { css } from 'styled-components';

import typography from '../theme/typography';


const textVariant = ({
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

const headlineVariant = () => textVariant(typography.headline);
const subtitleVariant = () => textVariant(typography.subtitle);
const boldSubtitleVariant = () => textVariant(typography.boldSubtitle);
const paragraphVariant = () => textVariant(typography.paragraph);
const boldParagraphVariant = () => textVariant(typography.boldParagraph);
const captionVariant = () => textVariant(typography.caption);
const boldCaptionVariant = () => textVariant(typography.boldCaption);
const microVariant = () => textVariant(typography.micro);

const textVariants = ({ textVariant }) =>
  (textVariant === 'headline' && headlineVariant)
  || (textVariant === 'subtitle' && subtitleVariant)
  || (textVariant === 'boldSubtitle' && boldSubtitleVariant)
  || (textVariant === 'paragraph' && paragraphVariant)
  || (textVariant === 'boldParagraph' && boldParagraphVariant)
  || (textVariant === 'caption' && captionVariant)
  || (textVariant === 'boldCaption' && boldCaptionVariant)
  || (textVariant === 'micro' && microVariant)
  || paragraphVariant;

const textAlignmentVariants = ({ textAlignment }) =>
  textAlignment && css`text-align: ${ textAlignment };`;

const defaultColorVariant = () => css`color: ${ typography.default };`;
const infoColorVariant = () => css`color: ${ typography.info };`;
const hintColorVariant = () => css`color: ${ typography.hint };`;
const disabledColorVariant = () => css`color: ${ typography.disabled };`;
const primaryColorVariant = () => css`color: ${ typography.primary };`;
const successColorVariant = () => css`color: ${ typography.success };`;
const dangerColorVariant = () => css`color: ${ typography.danger };`;
const warningColorVariant = () => css`color: ${ typography.warning };`;
const alternativeColorVariant = () => css`color: ${ typography.alternative };`;

const textColorVariants = ({ textColor }) =>
  (textColor === 'default' && defaultColorVariant)
  || (textColor === 'info' && infoColorVariant)
  || (textColor === 'hint' && hintColorVariant)
  || (textColor === 'disabled' && disabledColorVariant)
  || (textColor === 'primary' && primaryColorVariant)
  || (textColor === 'success' && successColorVariant)
  || (textColor === 'danger' && dangerColorVariant)
  || (textColor === 'warning' && warningColorVariant)
  || (textColor === 'alternative' && alternativeColorVariant)
  || defaultColorVariant;

export const withText = css`
  ${ textVariants }
  ${ textAlignmentVariants }
  ${ textColorVariants }
`;

export const withTextVariant = textVariant;

export const withTextAlignment = (textAlignment) => textAlignmentVariants({ textAlignment });

export const withTextColor = (textColor) => textColorVariants({ textColor });
