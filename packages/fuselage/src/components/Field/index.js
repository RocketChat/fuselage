import React from 'react';
import styled from 'styled-components';

import { rebuildClassName } from '../../helpers';
import {
  helpTextSpacing,
  helpTextColor,
  helpTextFontFamily,
  helpTextFontSize,
  helpTextFontWeight,
  helpTextLetterSpacing,
  helpTextLineHeight,
} from './theme';
import { Label } from '../Label';
import { normalized, withSelectableText, withText } from '../../mixins';


const Container = styled.div.attrs(rebuildClassName('rcx-field'))`
  ${ normalized }

  display: flex;

  flex-flow: column nowrap;
`;

const HelpText = styled.div.attrs(rebuildClassName('rcx-field__help-text'))`
  ${ normalized }
  ${ withSelectableText }

  flex: 0 0 auto;

  margin: ${ helpTextSpacing } 0 0 0;

  color: ${ helpTextColor };

  ${ withText({
    fontFamily: helpTextFontFamily,
    fontSize: helpTextFontSize,
    fontWeight: helpTextFontWeight,
    letterSpacing: helpTextLetterSpacing,
    lineHeight: helpTextLineHeight,
  }) }
`;

export const Field = styled(React.forwardRef(function Field({
  children,
  className,
  error,
  helpText,
  hidden,
  htmlFor,
  invisible,
  label,
  orientation,
  required,
  text,
  ...props
}, ref) {
  return <Container className={className} hidden={hidden} invisible={invisible} ref={ref} {...props}>
    {label
      ? <Label error={error} htmlFor={htmlFor} required={required} text={label}>
        {children}
      </Label>
      : children}

    {helpText && <HelpText>{helpText}</HelpText>}
  </Container>;
}))``;

Field.displayName = 'Field';
