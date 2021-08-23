import ReactDOM from 'react-dom';

import CheckYourEmailPage from './CheckYourEmailPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CheckYourEmailPage
      onResendEmailRequest={() => undefined}
      onChangeEmailRequest={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
