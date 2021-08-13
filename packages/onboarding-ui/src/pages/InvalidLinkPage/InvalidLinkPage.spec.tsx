import ReactDOM from 'react-dom';

import InvalidLinkPage from './InvalidLinkPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InvalidLinkPage onRequestNewLink={() => undefined} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
