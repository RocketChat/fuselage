import ReactDOM from 'react-dom';

import EmailConfirmedPage from './EmailConfirmedPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmailConfirmedPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
