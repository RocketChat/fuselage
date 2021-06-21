import ReactDOM from 'react-dom';

import RocketChatLogo from './RocketChatLogo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RocketChatLogo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
