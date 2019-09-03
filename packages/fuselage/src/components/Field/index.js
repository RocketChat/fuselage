import React from 'react';
import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers/rebuildClassName';
import { reset } from '../../mixins/reset';
import { selectableForHelp } from '../../mixins/selectableForHelp';
import { unselectable } from '../../mixins/unselectable';
import theme from './theme';
import { withTextVariant } from '../../mixins/withText';


const Container = styled.div.attrs(rebuildClassName('rcx-field__container'))`
  ${ reset }

  display: flex;

  width: 100%;

  flex-flow: column nowrap;
`;

const LabelWrapper = styled.label.attrs(rebuildClassName('rcx-field__label-wrapper'))`
  ${ reset }
  ${ unselectable }
  ${ withTextVariant(theme.label) }

  flex: 0 0 auto;

  margin: ${ theme.label.margin };

  display: flex;
  flex-flow: row nowrap;

  color: ${ theme.label.color };
`;

const LabelText = styled.span.attrs(rebuildClassName('rcx-field__label-text'))`
  overflow: hidden;
  flex: 1 1 0;

  white-space: nowrap;
  text-overflow: ellipsis;

  ${ ({ required }) => required && css`
    &::before {
      content: '* ';

      color: ${ theme.label.requiredColor };
    }
  ` }
`;

const LabelError = styled.span.attrs(rebuildClassName('rcx-field__label-error'))`
  ${ selectableForHelp }

  flex: 0 1 auto;

  color: ${ theme.label.errorColor };
`;

const HelpText = styled.span.attrs(rebuildClassName('rcx-field__help-text'))`
  ${ reset }
  ${ selectableForHelp }

  flex: 0 0 auto;

  margin: ${ theme.help.margin };

  color: ${ theme.help.color };

  font-family: ${ theme.help.fontFamily };
  font-size: ${ theme.help.fontSize };
  font-weight: ${ theme.help.fontWeight };
  line-height: ${ theme.help.lineHeight };
`;

export const Field = styled(React.forwardRef(function Field(props, ref) {
  const {
    children,
    error,
    helpText,
    htmlFor,
    label,
    required,
    ...remainingProps
  } = props;

  return <Container ref={ref} {...rebuildClassName('rcx-field')(props)} {...remainingProps}>
    {label && <LabelWrapper htmlFor={htmlFor}>
      <LabelText required={required}>{label}</LabelText>
      {error && <LabelError>{error}</LabelError>}
    </LabelWrapper>}

    {children}

    {helpText && <HelpText>{helpText}</HelpText>}
  </Container>;
}))``;
Field.displayName = 'Field';
