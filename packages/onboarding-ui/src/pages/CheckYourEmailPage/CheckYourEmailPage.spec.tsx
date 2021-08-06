/* eslint-disable @typescript-eslint/no-empty-function */
import ReactDOM from 'react-dom';

import CheckYourEmailPage from './CheckYourEmailPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CheckYourEmailPage
      onResendEmailRequest={() => {}}
      onChangeEmailRequest={() => {}}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
