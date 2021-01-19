import { Box, Divider, InputBox, Margins } from '@rocket.chat/fuselage';
import {
  BlockContext,
  ElementType,
  uiKitModal,
  UiKitParserModal,
} from '@rocket.chat/ui-kit';
import React from 'react';

import { Actions as ActionsLayoutBlock } from '../Actions';
import { Block } from '../Block';
import { ModalImage } from '../Image';
import { Input as InputLayoutBlock, PlainInput } from '../Input';
import { Overflow } from '../Overflow';
import { Section as SectionLayoutBlock } from '../Section';
import { MultiStaticSelect, StaticSelect } from '../StaticSelect';
import { UIKitButton } from '../UIKitButton';
import { useBlockContext } from '../hooks';
import { mrkdwn, plainText, text } from '../text';

class ModalParser extends UiKitParserModal {
  mrkdwn(...args) {
    return mrkdwn(...args);
  }

  plainText(...args) {
    return plainText(...args);
  }

  text(...args) {
    return text(...args);
  }

  overflow(element, context) {
    return <Overflow context={context} {...element} parser={this} />;
  }

  button(element, context, key) {
    return (
      <UIKitButton
        element={element}
        context={context}
        key={key}
        parser={this}
      />
    );
  }

  divider(_, __, key) {
    return <Divider mb='x24' key={key} />;
  }

  section(args, context, index) {
    return <SectionLayoutBlock key={index} {...args} parser={this} />;
  }

  actions(args, _, key) {
    return <ActionsLayoutBlock {...args} key={key} parser={this} />;
  }

  datePicker(element, context, key) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{ loading, value, error }, action] = useBlockContext(
      element,
      context
    );
    const { actionId, placeholder } = element;
    return (
      <InputBox
        key={key}
        error={error}
        value={value}
        disabled={loading}
        id={actionId}
        name={actionId}
        rows={6}
        onInput={action}
        placeholder={this.plainText(placeholder)}
        type='date'
      />
    );
  }

  context({ elements }, context, key) {
    return (
      <Block key={key}>
        <Box display='flex' alignItems='center' m='neg-x4'>
          {elements.map((element, i) => (
            <Margins all='x4' key={i}>
              {[ElementType.PLAIN_TEXT, ElementType.MARKDOWN].includes(
                element.type
              ) ? (
                <Box is='span' fontScale='c1' color='info'>
                  {this.renderContext(element, BlockContext.CONTEXT, this)}
                </Box>
              ) : (
                this.renderContext(element, BlockContext.CONTEXT, this) ||
                element.type
              )}
            </Margins>
          ))}
        </Box>
      </Block>
    );
  }

  multiStaticSelect(element, context, key) {
    return (
      <MultiStaticSelect
        {...element}
        key={key}
        parser={this}
        context={context}
      />
    );
  }

  staticSelect(element, context, key) {
    return (
      <StaticSelect key={key} context={context} {...element} parser={this} />
    );
  }

  // selectInput(element, context, key) {
  //   const [{ loading, value }, action] = useBlockContext(element, context);
  //   return (
  //     <SelectInput key={key} value={value} onChange={action} mod-loading={loading} placeholder={element.type} disabled />
  //   );
  // }

  input({ element, label, blockId, appId }, context, index) {
    return (
      <InputLayoutBlock
        key={index}
        index={index}
        parser={this}
        context={context}
        element={{ ...element, appId, blockId }}
        label={this.plainText(label)}
      />
    );
  }

  image(element, context, index) {
    return <ModalImage key={index} element={element} context={context} />;
  }

  plainInput(element, context, index) {
    return (
      <PlainInput
        parser={this}
        element={element}
        context={context}
        index={index}
      />
    );
  }
}

export const modalParser = new ModalParser();
export const UiKitModal = (blocks, conditions = {}) =>
  uiKitModal(modalParser, { engine: 'rocket.chat', ...conditions })(blocks);
