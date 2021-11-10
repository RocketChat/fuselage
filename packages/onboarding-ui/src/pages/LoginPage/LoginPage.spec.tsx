import ReactDOM from 'react-dom';

import LoginPage from './LoginPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LoginPage
      initialValues={undefined}
      onChangeForm={() => undefined}
      onResetPassword={() => undefined}
      onSubmit={() => undefined}
      isPasswordLess={false}
      onCreateAccount={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
