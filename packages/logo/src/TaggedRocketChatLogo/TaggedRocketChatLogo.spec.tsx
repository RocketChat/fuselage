import ReactDOM from 'react-dom';

import TaggedRocketChatLogo from './TaggedRocketChatLogo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaggedRocketChatLogo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
