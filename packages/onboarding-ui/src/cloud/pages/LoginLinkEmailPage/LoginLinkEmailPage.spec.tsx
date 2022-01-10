import ReactDOM from 'react-dom';

import LoginLinkEmailPage from './LoginLinkEmailPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LoginLinkEmailPage
      onResendEmailRequest={() => undefined}
      onChangeEmailRequest={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
