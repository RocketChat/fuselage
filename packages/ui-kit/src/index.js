import React, {
  useState,
  useContext,
  useEffect,
} from 'react';
import { Divider, Text, Button, SelectInput, FieldGroup, Field, Label, TextAreaInput, TextInput } from '@rocket.chat/fuselage';

export const defaultContext = {
  action: (...args) => alert(JSON.stringify(args)),
  state: console.log,
  appId: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
};

export const kitContext = React.createContext(() => defaultContext);

const BLOCK_CONTEXT = {
  BLOCK: 0,
  SECTION: 1,
  ACTION: 2,
  FORM: 3,
};

// COMPONENTS

const Grid = ({ children }) => <div style={{ display: 'flex' }}>{children}</div>;
Grid.Item = ({ children }) => <div style={{ flex: '0 0' }}>{children}</div>;
Grid.ItemAuto = ({ children }) => <div style={{ flex: '1' }}>{children}</div>;

const Section = ({ children }) => <div style={{ padding: '1rem 0' }}>{children}</div>;


const Thumb = ({ element }) => <div
  style = {
    {
      border: '1px solid',
      borderRadius: '4px',
      marginLeft: '4px',
      overflow: 'hidden',
      width: '88px',
      height: '88px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      backgroundImage: `url(${ element.imageUrl })` }}/>;
const Image = ({ element }) => {
  const [{ loading, width, height }, setState] = useState({ loading: true, width: 300 });
  const maxSize = 360;
  useEffect(() => {
    const img = document.createElement('img');
    img.addEventListener('load', (e) => {
      const { naturalWidth, naturalHeight } = e.target;

      if (naturalWidth > naturalHeight) {
        const width = Math.min(naturalWidth, maxSize);
        const aspect = width / naturalWidth;
        return setState({ loading: false, width, height: naturalHeight * aspect });
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

  return <div
    style = {
      {
        borderRadius: '4px',
        marginLeft: '4px',
        overflow: 'hidden',
        width: `${ width }px`,
        height: `${ height }px`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundImage: `url(${ element.imageUrl })` }}/>;
};


const StaticSelect = ({ options, size, multiple, onChange, parser, placeholder }) => <SelectInput size={size} multiple={multiple} onInput={onChange} placeholde={parser.renderText(placeholder)}>
  {options.map((option) => <SelectInput.Option key={option.value} value={option.value}>{parser.renderText(option.text)}</SelectInput.Option>)}
</SelectInput>;

const renderElement = ({ type, ...element }, context, parser) => {
  switch (type) {
  case 'button':
    return parser.button(element, context);
  case 'image':
    return parser.image(element, context);
  case 'static_select':
    return parser.staticSelect(element, context);
  case 'multi_static_select':
    return parser.multiStaticSelect(element, context);
  case 'plain_text_input':
    return parser.plainInput(element, context);
  case 'conversations_select':
  case 'channels_select':
  case 'users_select':
    return parser.selectInput({ type, ...element }, context);
  }
};

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
  return <Grid>
    <Grid.ItemAuto>
      { text && parser.renderText(text) }
      { fields && <Fields fields={fields} parser={parser} /> }
    </Grid.ItemAuto>
    { accessory && <Accessory element={{ blockId, ...accessory }} parser={parser}/> }
  </Grid>;
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

const uiKitGeneric = (allowedItems) => (parser) => ({ blocks = [] }) => blocks
  .filter(({ type }) => !allowedItems || allowedItems.includes(type))
  .map(({ type, ...block }) => (parser[type] ? parser[type](block, BLOCK_CONTEXT.BLOCK, parser) : type));

const createRenderElement = (allowedItems) => (element, context, parser) => {
  if (allowedItems && !allowedItems.includes(element.type)) {
    return element.type;
  }
  return renderElement(element, context, parser);
};

function ActionsLayoutBlock({ blockId, elements, parser }) {
  const [showMoreVisible, setShowMoreVisible] = useState(() => elements.length > 5);
  const renderedElements = (showMoreVisible ? elements.slice(0, 5) : elements)
    .map((element) => parser.renderActions({ blockId, ...element }, BLOCK_CONTEXT.ACTION, parser));

  const handleShowMoreClick = () => {
    setShowMoreVisible(false);
  };

  return <Grid>
    {renderedElements}
    {showMoreVisible && <Button onClick={handleShowMoreClick}>Show more...</Button> }
  </Grid>;
}

const Accessory = ({ blockId, element, parser }) => <div className='body__accessory' style={{ display: 'flex', margin: '0 0 4px 8px', position: 'relative' }}>
  {parser.renderAccessories({ blockId, ...element }, BLOCK_CONTEXT.SECTION, parser)}
</div>;

const Fields = ({ fields, parser }) => <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap', wordBreak: 'break-word' }}>{fields.map((field, i) => (<div key={i} style={{ width: 'calc(50% - 16px)', padding: '0.5rem' }}> {
  parser.renderText(field)
} </div>)) }</div>;

class MessageParser {
  button(element, context) {
    const action = useBlockContext(element, context);
    return <Button
      data-group={element.groupId}
      key={element.actionId}
      children={this.renderText(element.text)}
      style={{ margin: '0 0.5rem' }}
      onClick={action}
      value={element.value}
      {...getStyle(element.style)}
    />;
  }

  divider() {
    return <Divider />;
  }

  renderText({ text } = { text: '' }) {
    return text;
  }

  section(args) {
    return <Section><SectionLayoutBlock {...args} parser={this} /></Section>;
  }

  actions(args) {
    return <Section><ActionsLayoutBlock {...args} parser={this} /></Section>;
  }

  image(element, context) {
    if (context === BLOCK_CONTEXT.SECTION) {
      return <Thumb element={element}/>;
    }
    return <Section><Image element={element}/></Section>;
  }

  context({ elements }) {
    return elements.map((element) => <Text caption>{ this.renderText(element)}</Text>);
  }

  multiStaticSelect(element, context) {
    const action = useBlockContext(element, context);
    return <StaticSelect size={3} multiple {...element} onChange={action} parser={this}/>;
  }

  staticSelect(element, context) {
    const action = useBlockContext(element, context);
    return <StaticSelect {...element} onChange={action} parser={this}/>;
  }

  selectInput(element, context) {
    const action = useBlockContext(element, context);
    return <SelectInput onChange={action} placeholder={element.type} disabled/>;
  }

  renderAccessories = createRenderElement(['image', 'button', 'static_select', 'conversations_select', 'channels_select', 'users_select', 'overflow', 'datepicker']);

  renderActions = createRenderElement(['button', 'static_select', 'conversations_select', 'channels_select', 'users_select', 'overflow', 'datepicker']);
}

function InputLayoutBlock({ label, element, parser }) {
  return (<FieldGroup><Field>
    {label && <Label text={label} /> }
    {parser.renderInputs(element, BLOCK_CONTEXT.FORM, parser)}
  </Field></FieldGroup>);
}

class ModalParser extends MessageParser {
  input({ element, label }) {
    return <InputLayoutBlock parser={this} element={element} label={this.renderText(label)}/>;
  }

  plainInput({ multiline, actionId, placeholder }) {
    const Component = multiline ? TextAreaInput : TextInput;
    return <Component id={actionId} name={actionId} placeholder={this.renderText(placeholder)}/>;
  }

  renderInputs = createRenderElement(['static_select', 'multi_static_select', 'plain_text_input', 'conversations_select', 'channels_select', 'users_select']);
}


const messageParser = new MessageParser();
const modalParser = new ModalParser();

export const uiKitMessage = uiKitGeneric(['section', 'divider', 'image', 'actions', 'context']);
export const uiKitModal = uiKitGeneric(['section', 'divider', 'image', 'actions', 'context', 'input']);

export const UiKitMessage = uiKitMessage(messageParser);
export const UiKitModal = uiKitModal(modalParser);
