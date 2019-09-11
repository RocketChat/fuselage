import React, { createContext, useContext } from 'react';
import styled, { css } from 'styled-components';

import { rebuildClassName } from '../../helpers';
import { normalized, withTruncatedText, withText, withSelectableText } from '../../mixins';
import {
  spacing,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  color,
  requiredColor,
  errorColor,
} from './theme';

const Wrapper = styled.div.attrs(rebuildClassName('rcx-label__wrapper'))`
  ${ normalized }
  ${ withText({
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
  }) }

  display: flex;

  flex: 0 0 auto;

  flex-flow: row nowrap;
`;

const topPositioned = css`
  flex-flow: column nowrap;
  align-items: stretch;

  & > ${ Wrapper } {
    margin: 0 0 ${ spacing } 0;
  }
`;

const startPositioned = css`
  flex-flow: row nowrap;
  align-items: center;

  & > ${ Wrapper } {
    margin: 0 ${ spacing } 0 0;
  }
`;

const endPositioned = css`
  flex-flow: row-reverse nowrap;
  align-items: center;

  & > ${ Wrapper } {
    margin: 0 0 0 ${ spacing };
  }
`;

const Container = styled.label.attrs(rebuildClassName('rcx-label'))`
  ${ normalized }

  display: flex;

  ${ ({ position }) =>
    (position === 'top' && topPositioned)
    || (position === 'start' && startPositioned)
    || (position === 'end' && endPositioned) }
`;

const withRequiredMark = css`
  &::before {
    content: '* ';

    color: ${ requiredColor };
  }
`;

const Text = styled.span.attrs(rebuildClassName('rcx-label__text'))`
  ${ normalized }
  ${ withTruncatedText }
  ${ withSelectableText }

  flex: 1 1 0;

  color: ${ color };

  ${ ({ required }) => required && withRequiredMark }
`;

const Error = styled.span.attrs(rebuildClassName('rcx-label__error'))`
  ${ normalized }
  ${ withTruncatedText }
  ${ withSelectableText }

  flex: 0 1 auto;
  margin-left: ${ spacing };

  color: ${ errorColor };
`;

const LabelContext = createContext(false);

export const Label = styled(React.forwardRef(function Label({
  children,
  className,
  error,
  position,
  required,
  text,
  ...props
}, ref) {
  const isInsideLabel = useContext(LabelContext);

  return <LabelContext.Provider value={true}>
    <Container
      as={isInsideLabel ? 'span' : 'label'}
      className={className}
      position={position}
      ref={ref}
      {...props}
    >
      {(text || error) && <Wrapper>
        {text && <Text required={required}>{text}</Text>}
        {error && <Error>{error}</Error>}
      </Wrapper>}

      {children}
    </Container>
  </LabelContext.Provider>;
}))``;

Label.defaultProps = {
  position: 'top',
};

Label.displayName = 'Label';
