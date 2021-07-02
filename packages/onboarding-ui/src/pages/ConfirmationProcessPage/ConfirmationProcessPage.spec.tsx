import ReactDOM from 'react-dom';

import ConfirmationProcessPage from './ConfirmationProcessPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConfirmationProcessPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
