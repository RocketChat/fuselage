import React, { useState, useContext, useEffect } from 'react';
import {
  Divider,
  Text,
  Button,
  SelectInput,
  FieldGroup,
  Field,
  Label,
  Flex,
  Grid,
  Margins,
  TextAreaInput,
  TextInput,
} from '@rocket.chat/fuselage';
import {
  uiKitMessage,
  uiKitModal,
  BLOCK_CONTEXT,
  UiKitParserMessage,
  UiKitParserModal,
} from '@rocket.chat/ui-kit';

export const defaultContext = {
  action: (...args) => alert(JSON.stringify(args)),
  state: console.log,
  appId: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
};

export const kitContext = React.createContext(defaultContext);

// COMPONENTS
Grid.ItemAuto = ({ children }) => <div style={{ flex: '1' }}>{children}</div>;

const Section = ({ children }) => (
  <Margins blockEnd={4}>{children}</Margins>
);

const Thumb = ({ element, context }) => (
  <div
    style={{
      border: '1px solid',
      borderRadius: '4px',
      marginLeft: '4px',
      overflow: 'hidden',
      width: context === BLOCK_CONTEXT.SECTION ? '88px' : '20px',
      height: context === BLOCK_CONTEXT.SECTION ? '88px' : '20px',
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
    placeholde={parser.text(placeholder)}
  >
    {options.map((option) => (
      <SelectInput.Option key={option.value} value={option.value}>
        {parser.text(option.text)}
      </SelectInput.Option>
    ))}
  </SelectInput>
);

const useBlockContext = ({ blockId, actionId, appId }, context) => {
  const { action, appId: appIdFromContext, state } = useContext(kitContext);
  if ([BLOCK_CONTEXT.SECTION, BLOCK_CONTEXT.ACTION].includes(context)) {
    return ({ target: { value } }) => {
      action({ blockId, appId: appId || appIdFromContext, actionId, value });
    };
  }

  return ({ target: { value } }) => {
    state({ blockId, appId, actionId, value });
  };
};

function SectionLayoutBlock({ blockId, appId, text, fields, accessory, parser }) {
  return (
    <Section>
      <Grid>
        <Grid.Item>
          {text && <Text>{parser.text(text)}</Text>}
          {fields && <Fields fields={fields} parser={parser} />}
        </Grid.Item>

        <Grid.Item>{accessory && (
          <Accessory element={{ blockId, appId, ...accessory }} parser={parser} />
        )}</Grid.Item>
      </Grid>
    </Section>
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

function ActionsLayoutBlock({ blockId, appId, elements, parser }) {
  const breakpoints = {
    xs: 4,
    sm: 4,
    md: 4,
    lg: 3,
    xl: 3,
  };

  const [showMoreVisible, setShowMoreVisible] = useState(
    () => elements.length > 5,
  );
  const renderedElements = (showMoreVisible
    ? elements.slice(0, 5)
    : elements
  ).map((element) =>
    <Grid.Item {...breakpoints}>{parser.renderActions({ blockId, appId, ...element }, BLOCK_CONTEXT.ACTION, parser)}</Grid.Item>,
  );

  const handleShowMoreClick = () => {
    setShowMoreVisible(false);
  };

  return (
    <Grid>
      {renderedElements}
      {showMoreVisible && (<Grid.Item {...breakpoints}><Button onClick={handleShowMoreClick}>Show more...</Button></Grid.Item>)}
    </Grid>
  );
}

const Accessory = ({ blockId, appId, element, parser }) =>
  parser.renderAccessories(
    { blockId, appId, ...element },
    BLOCK_CONTEXT.SECTION,
    parser,
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
        {parser.text(field)}{' '}
      </div>
    ))}
  </div>
);

class MessageParser extends UiKitParserMessage {
  button(element, context) {
    const action = useBlockContext(element, context);
    return (
      <Button
        {...getStyle(element.style)}
        small
        data-group={element.groupId}
        key={element.actionId}
        children={this.text(element.text)}
        style={{ Section: '0 0.5rem' }}
        onClick={action}
        value={element.value}
      />
    );
  }

  divider() {
    return <Divider />;
  }

  text({ text, type = 'plain_text' } = { text: '' }) {
    return text;
  }

  section(args) {
    return (
      <Flex.Container>
        <SectionLayoutBlock {...args} parser={this} />
      </Flex.Container>
    );
  }

  actions(args) {
    return (
      <Flex.Container>
        <ActionsLayoutBlock {...args} parser={this} />
      </Flex.Container>
    );
  }

  image(element, context) {
    if ([BLOCK_CONTEXT.SECTION, BLOCK_CONTEXT.CONTEXT].includes(context)) {
      return <Thumb context={context} element={element} />;
    }
    return (
      <Flex.Container>
        <Image element={element} />
      </Flex.Container>
    );
  }

  context({ elements }/* , context*/) {
    return (
      <Flex.Container>
        {elements.map(
          (element) =>
            <Flex.Container>{
              this.renderContext(element, BLOCK_CONTEXT.CONTEXT, this)
            || element.type}</Flex.Container>,
        )}
      </Flex.Container>
    );
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
    <Section>
      <FieldGroup>
        <Field>
          {label && <Label text={label} />}
          {parser.renderInputs(element, BLOCK_CONTEXT.FORM, parser)}
        </Field>
      </FieldGroup>
    </Section>
  );
}

class ModalParser extends UiKitParserModal {
  constructor() {
    super();
    Object.getOwnPropertyNames(MessageParser.prototype).forEach((method) => {
      ModalParser.prototype[method] = ModalParser.prototype[method] || MessageParser.prototype[method];
    });
  }

  input({ element, label, blockId, appId }) {
    return (
      <InputLayoutBlock
        parser={this}
        element={{ ...element, appId, blockId }}
        label={this.text(label)}
      />
    );
  }

  plainInput(element, context) {
    const { multiline, actionId, placeholder } = element;
    const Component = multiline ? TextAreaInput : TextInput;
    const action = useBlockContext(element, context);
    return (
      <Component
        id={actionId}
        name={actionId}
        onInput={action}
        placeholder={this.text(placeholder)}
      />
    );
  }
}

const messageParser = new MessageParser();
const modalParser = new ModalParser();

export const UiKitMessage = uiKitMessage(messageParser);
export const UiKitModal = uiKitModal(modalParser);
