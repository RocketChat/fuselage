import React from 'react';

import { Icon } from '../Icon';
import { Margins, Chip, InputBox } from '../..';
import { AnimatedWrapper } from './Animated';
import { Box } from '../Box';
import { Options } from './Options';
import { useCursor } from './Select';

const Item = ({ children }) => <Margins inline={4}><Box is='li'>{children}</Box></Margins>;
const Container = ({ children, ...props }) => <Box {...props} is='label' className='rcx-autocomplete'>{children.map((c, i) => <Item key={i}>{c}</Item>)}</Box>;
const Addon = Box.extend('rcx-autocomplete__addon', 'div');

// const Focus = React.forwardRef((props, ref) => <Box ref={ref} className='rcx-select__focus' is='button' {...props}/>);

export const AutoComplete = function AutoComplete({
  children,
  value,
  onChange = () => {},
  renderEmpty,
  placeholder,
}) {
  const [cursor, handleKeyDown, setCursor, [visible, hide, show]] = useCursor(onChange);

  return (
    <Container is='label' style={{ position: 'relative' }}>
      <Chip.Wrapper role='listbox'>
        <InputBox.Input onBlur={hide} onFocus={show} onKeyDown={handleKeyDown} placeholder={placeholder} style={{ order: 1, minWidth: '150px' }} mod-undecorated value={value}/>
        {children}
      </Chip.Wrapper>
      <Addon children={<Icon name='magnifier' size='20' />}/>
      <AnimatedWrapper visible={visible}><Options renderEmpty={renderEmpty} setCursor={setCursor} cursor={cursor} value={value} options={[]} /></AnimatedWrapper>
    </Container>
  );
};

AutoComplete.displayName = 'AutoComplete';
