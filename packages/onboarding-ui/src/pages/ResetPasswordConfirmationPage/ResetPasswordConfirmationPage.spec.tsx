import ReactDOM from 'react-dom';

import ResetPasswordConfirmationPage from './ResetPasswordConfirmationPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResetPasswordConfirmationPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
