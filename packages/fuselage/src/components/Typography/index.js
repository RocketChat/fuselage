import styled from 'styled-components';

import { rebuildClassName } from '../../helpers/rebuildClassName';
import { reset } from '../../mixins/reset';
import { withTextVariant, withTextAlignment, withTextColor } from '../../mixins/withText';
import typography from '../../theme/typography';


const textVariants = ({ textVariant }) =>
  (textVariant === 'headline' && withTextVariant(typography.variants.headline))
  || (textVariant === 'subtitle' && withTextVariant(typography.variants.subtitle))
  || (textVariant === 'boldSubtitle' && withTextVariant(typography.variants.boldSubtitle))
  || (textVariant === 'paragraph' && withTextVariant(typography.variants.paragraph))
  || (textVariant === 'boldParagraph' && withTextVariant(typography.variants.boldParagraph))
  || (textVariant === 'caption' && withTextVariant(typography.variants.caption))
  || (textVariant === 'boldCaption' && withTextVariant(typography.variants.boldCaption))
  || (textVariant === 'micro' && withTextVariant(typography.variants.micro))
  || withTextVariant(typography.variants.paragraph);

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

export const Headline = styled.h1.attrs(({ level = 1 }) => ({
  as: `h${ level }`,
})).attrs(rebuildClassName('rcx-heading'))`
  ${ reset }
  ${ withTextVariant(typography.variants.headline) }
  ${ textAlignmentVariants }
  ${ textColorVariants }
`;

export const Subtitle = styled.h1.attrs(({ level = 2 }) => ({
  as: `h${ level }`,
})).attrs(rebuildClassName('rcx-subtitle'))`
  ${ reset }
  ${ ({ emphasis }) => withTextVariant(emphasis ? typography.variants.boldSubtitle : typography.variants.subtitle) }
  ${ textAlignmentVariants }
  ${ textColorVariants }
`;

export const Paragraph = styled.p.attrs(rebuildClassName('rcx-paragraph'))`
  ${ reset }
  ${ ({ emphasis }) => withTextVariant(emphasis ? typography.variants.boldParagraph : typography.variants.paragraph) }
  ${ textAlignmentVariants }
  ${ textColorVariants }
`;

export const Text = styled.div`
  ${ reset }
  ${ textVariants }
  ${ textAlignmentVariants }
  ${ textColorVariants }
`;
