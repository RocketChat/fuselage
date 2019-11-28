import React, { useState, useContext, useEffect } from 'react';
import {
  Divider,
  Text,
  Button,
  SelectInput,
  FieldGroup,
  Field,
  Label,
  TextAreaInput,
  TextInput,
} from '@rocket.chat/fuselage';

import {
  uiKitMessage,
  uiKitModal,
  BLOCK_CONTEXT,
  UiKitParserMessage,
  UiKitParserModal,
} from './index.ts';

export const defaultContext = {
  action: (...args) => alert(JSON.stringify(args)),
  state: console.log,
  appId: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
};

export const kitContext = React.createContext(defaultContext);

// COMPONENTS

const Grid = ({ children }) => <div style={{ display: 'flex' }}>{children}</div>;

Grid.Item = ({ children }) => <div style={{ flex: '0 0' }}>{children}</div>;
Grid.ItemAuto = ({ children }) => <div style={{ flex: '1' }}>{children}</div>;

const Section = ({ children }) => (
  <div style={{ padding: '1rem 0' }}>{children}</div>
);

const Thumb = ({ element }) => (
  <div
    style={{
      border: '1px solid',
      borderRadius: '4px',
      marginLeft: '4px',
      overflow: 'hidden',
      width: '88px',
      height: '88px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      backgroundImage: `url(${ element.imageUrl })`,
    }}
  />
);
const Image = ({ element }) => {
  const maxSize = 360;
  const [{ loading, width, height }, setState] = useState({
    loading: true,
    width: maxSize,
  });
  useEffect(() => {
    const img = document.createElement('img');
    img.addEventListener('load', (e) => {
      const { naturalWidth, naturalHeight } = e.target;

      if (naturalWidth > naturalHeight) {
        const width = Math.min(naturalWidth, maxSize);
        const aspect = width / naturalWidth;
        return setState({
          loading: false,
          width,
          height: naturalHeight * aspect,
        });
      }
      const height = Math.min(naturalHeight, maxSize);
      const aspect = height / naturalHeight;
      return setState({
        loading: false,
        width: naturalWidth * aspect,
        height,
      });
    });
    img.src = element.imageUrl;
  }, []);

  if (loading) {
    return 'loading';
  }

  return (
    <div
      style={{
        borderRadius: '4px',
        marginLeft: '4px',
        overflow: 'hidden',
        width: `${ width }px`,
        height: `${ height }px`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundImage: `url(${ element.imageUrl })`,
      }}
    />
  );
};

const StaticSelect = ({
  options,
  size,
  multiple,
  onChange,
  parser,
  placeholder,
}) => (
  <SelectInput
    size={size}
    multiple={multiple}
    onInput={onChange}
    placeholde={parser.renderText(placeholder)}
  >
    {options.map((option) => (
      <SelectInput.Option key={option.value} value={option.value}>
        {parser.renderText(option.text)}
      </SelectInput.Option>
    ))}
  </SelectInput>
);

const useBlockContext = ({ blockId, actionId }, context) => {
  const { action, appId, state } = useContext(kitContext);
  if ([BLOCK_CONTEXT.SECTION, BLOCK_CONTEXT.ACTION].includes(context)) {
    return ({ target: { value } }) => {
      action({ blockId, appId, actionId, value });
    };
  }
  return ({ target: { value } }) => {
    state({ blockId, appId, actionId, value });
  };
};

function SectionLayoutBlock({ blockId, text, fields, accessory, parser }) {
  return (
    <Grid>
      <Grid.ItemAuto>
        {text && <Text>{parser.renderText(text)}</Text>}
        {fields && <Fields fields={fields} parser={parser} />}
      </Grid.ItemAuto>
      {accessory && (
        <Accessory element={{ blockId, ...accessory }} parser={parser} />
      )}
    </Grid>
  );
}

const getStyle = (style) => {
  switch (style) {
  case 'primary':
  case 'danger':
    return {
      [style]: true,
    };
  }
};

function ActionsLayoutBlock({ blockId, elements, parser }) {
  const [showMoreVisible, setShowMoreVisible] = useState(
    () => elements.length > 5,
  );
  const renderedElements = (showMoreVisible
    ? elements.slice(0, 5)
    : elements
  ).map((element) =>
    parser.renderActions({ blockId, ...element }, BLOCK_CONTEXT.ACTION, parser),
  );

  const handleShowMoreClick = () => {
    setShowMoreVisible(false);
  };

  return (
    <Grid>
      {renderedElements}
      {showMoreVisible && (
        <Button onClick={handleShowMoreClick}>Show more...</Button>
      )}
    </Grid>
  );
}

const Accessory = ({ blockId, element, parser }) => (
  <div
    className='body__accessory'
    style={{ display: 'flex', margin: '0 0 4px 8px', position: 'relative' }}
  >
    {parser.renderAccessories(
      { blockId, ...element },
      BLOCK_CONTEXT.SECTION,
      parser,
    )}
  </div>
);

const Fields = ({ fields, parser }) => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap',
      wordBreak: 'break-word',
    }}
  >
    {fields.map((field, i) => (
      <div key={i} style={{ width: 'calc(50% - 16px)', padding: '0.5rem' }}>
        {' '}
        {parser.renderText(field)}{' '}
      </div>
    ))}
  </div>
);

class MessageParser extends UiKitParserMessage {
  button(element, context) {
    const action = useBlockContext(element, context);
    return (
      <Button
        data-group={element.groupId}
        key={element.actionId}
        children={this.renderText(element.text)}
        style={{ margin: '0 0.5rem' }}
        onClick={action}
        value={element.value}
        {...getStyle(element.style)}
      />
    );
  }

  divider() {
    return <Divider />;
  }

  renderText({ text } = { text: '' }) {
    return text;
  }

  section(args) {
    return (
      <Section>
        <SectionLayoutBlock {...args} parser={this} />
      </Section>
    );
  }

  actions(args) {
    return (
      <Section>
        <ActionsLayoutBlock {...args} parser={this} />
      </Section>
    );
  }

  image(element, context) {
    if (context === BLOCK_CONTEXT.SECTION) {
      return <Thumb element={element} />;
    }
    return (
      <Section>
        <Image element={element} />
      </Section>
    );
  }

  context({ elements }) {
    return elements.map((element) => (
      <Text caption>{this.renderText(element)}</Text>
    ));
  }

  multiStaticSelect(element, context) {
    const action = useBlockContext(element, context);
    return (
      <StaticSelect
        size={3}
        multiple
        {...element}
        onChange={action}
        parser={this}
      />
    );
  }

  staticSelect(element, context) {
    const action = useBlockContext(element, context);
    return <StaticSelect {...element} onChange={action} parser={this} />;
  }

  selectInput(element, context) {
    const action = useBlockContext(element, context);
    return (
      <SelectInput onChange={action} placeholder={element.type} disabled />
    );
  }
}

function InputLayoutBlock({ label, element, parser }) {
  return (
    <FieldGroup>
      <Field>
        {label && <Label text={label} />}
        {parser.renderInputs(element, BLOCK_CONTEXT.FORM, parser)}
      </Field>
    </FieldGroup>
  );
}

class ModalParser extends UiKitParserModal {
  constructor() {
    super();
    Object.getOwnPropertyNames(MessageParser.prototype).forEach((method) => {
      ModalParser.prototype[method] = ModalParser.prototype[method] || MessageParser.prototype[method];
    });
  }

  input({ element, label }) {
    return (
      <InputLayoutBlock
        parser={this}
        element={element}
        label={this.renderText(label)}
      />
    );
  }

  plainInput({ multiline, actionId, placeholder }) {
    const Component = multiline ? TextAreaInput : TextInput;
    return (
      <Component
        id={actionId}
        name={actionId}
        placeholder={this.renderText(placeholder)}
      />
    );
  }
}

const messageParser = new MessageParser();
const modalParser = new ModalParser();

export const UiKitMessage = uiKitMessage(messageParser);
export const UiKitModal = uiKitModal(modalParser);
