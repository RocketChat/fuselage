import { css } from 'styled-components';

import typography from '../theme/typography';
import colors from '../tokens/colors';


const textVariant = ({
  fontSize,
  fontWeight = 'normal',
  letterSpacing = 0,
  lineHeight,
}) => css`
  font-size: ${ fontSize };
  font-weight: ${ fontWeight };
  letter-spacing: ${ letterSpacing };
  line-height: ${ lineHeight };
`;

const headlineVariant = () => textVariant({
  fontSize: '1.375rem',
  lineHeight: '2rem',
});

const subtitleVariant = () => textVariant({
  fontSize: '1rem',
  lineHeight: '1.375rem',
});

const boldSubtitleVariant = () => textVariant({
  fontSize: '1rem',
  fontWeight: '500',
  lineHeight: '1.375rem',
});

const paragraphVariant = () => textVariant({
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
});

const boldParagraphVariant = () => textVariant({
  fontSize: '0.875rem',
  fontWeight: '500',
  lineHeight: '1.25rem',
});

const captionVariant = () => textVariant({
  fontSize: '0.75rem',
  lineHeight: '1rem',
});

const boldCaptionVariant = () => textVariant({
  fontSize: '0.75rem',
  fontWeight: '600',
  lineHeight: '1rem',
});

const microVariant = () => textVariant({
  fontSize: '0.625rem',
  fontWeight: '600',
  letterSpacing: '0.2px',
  lineHeight: '0.75rem',
});

export const TEXT_VARIANT_HEADLINE = 'headline';
export const TEXT_VARIANT_SUBTITLE = 'subtitle';
export const TEXT_VARIANT_BOLD_SUBTITLE = 'bold-subtitle';
export const TEXT_VARIANT_PARAGRAPH = 'paragraph';
export const TEXT_VARIANT_BOLD_PARAGRAPH = 'bold-paragraph';
export const TEXT_VARIANT_CAPTION = 'caption';
export const TEXT_VARIANT_BOLD_CAPTION = 'bold-caption';
export const TEXT_VARIANT_MICRO = 'micro';

const textVariants = ({ textVariant }) =>
  (textVariant === TEXT_VARIANT_HEADLINE && headlineVariant)
  || (textVariant === TEXT_VARIANT_SUBTITLE && subtitleVariant)
  || (textVariant === TEXT_VARIANT_BOLD_SUBTITLE && boldSubtitleVariant)
  || (textVariant === TEXT_VARIANT_PARAGRAPH && paragraphVariant)
  || (textVariant === TEXT_VARIANT_BOLD_PARAGRAPH && boldParagraphVariant)
  || (textVariant === TEXT_VARIANT_CAPTION && captionVariant)
  || (textVariant === TEXT_VARIANT_BOLD_CAPTION && boldCaptionVariant)
  || (textVariant === TEXT_VARIANT_MICRO && microVariant)
  || paragraphVariant;

const textAlignmentVariants = ({ textAlignment }) =>
  textAlignment && css`text-align: ${ textAlignment };`;

const defaultColorVariant = () => css`color: ${ colors.dark800 };`;
const infoColorVariant = () => css`color: ${ colors.dark700 };`;
const hintColorVariant = () => css`color: ${ colors.dark600 };`;
const disabledColorVariant = () => css`color: ${ colors.dark400 };`;
const primaryColorVariant = () => css`color: ${ colors.blue500 };`;
const successColorVariant = () => css`color: ${ colors.green500 };`;
const dangerColorVariant = () => css`color: ${ colors.red500 };`;
const warningColorVariant = () => css`color: ${ colors.yellow700 };`;
const alternativeColorVariant = () => css`color: ${ colors.white };`;

export const TEXT_COLOR_VARIANT_DEFAULT = 'default';
export const TEXT_COLOR_VARIANT_INFO = 'info';
export const TEXT_COLOR_VARIANT_HINT = 'hint';
export const TEXT_COLOR_VARIANT_DISABLED = 'disabled';
export const TEXT_COLOR_VARIANT_PRIMARY = 'primary';
export const TEXT_COLOR_VARIANT_SUCCESS = 'success';
export const TEXT_COLOR_VARIANT_DANGER = 'danger';
export const TEXT_COLOR_VARIANT_WARNING = 'warning';
export const TEXT_COLOR_VARIANT_ALTERNATIVE = 'alternative';

const textColorVariants = ({ textColor }) =>
  (textColor === TEXT_COLOR_VARIANT_DEFAULT && defaultColorVariant)
  || (textColor === TEXT_COLOR_VARIANT_INFO && infoColorVariant)
  || (textColor === TEXT_COLOR_VARIANT_HINT && hintColorVariant)
  || (textColor === TEXT_COLOR_VARIANT_DISABLED && disabledColorVariant)
  || (textColor === TEXT_COLOR_VARIANT_PRIMARY && primaryColorVariant)
  || (textColor === TEXT_COLOR_VARIANT_SUCCESS && successColorVariant)
  || (textColor === TEXT_COLOR_VARIANT_DANGER && dangerColorVariant)
  || (textColor === TEXT_COLOR_VARIANT_WARNING && warningColorVariant)
  || (textColor === TEXT_COLOR_VARIANT_ALTERNATIVE && alternativeColorVariant)
  || defaultColorVariant;

export const withText = css`
  font-family: ${ typography.baseFont };
  font-variant-numeric: tabular-nums;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
  text-decoration: none;

  ${ textVariants }
  ${ textAlignmentVariants }
  ${ textColorVariants }
`;
