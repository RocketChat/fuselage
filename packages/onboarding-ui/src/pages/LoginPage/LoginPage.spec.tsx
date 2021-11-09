import ReactDOM from 'react-dom';

import LoginPage from './LoginPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LoginPage
      loginPasswordLessProps={{
        initialValues: undefined,
        onChangeForm: () => undefined,
        onSubmit: () => undefined,
      }}
      loginDefaultProps={{
        initialValues: undefined,
        onSendLoginLinkForm: () => undefined,
        onResetPassword: () => undefined,
        onSubmit: () => undefined,
      }}
      isPasswordLessFlow={false}
      onCreateAccount={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
