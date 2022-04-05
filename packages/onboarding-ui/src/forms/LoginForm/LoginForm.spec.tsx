import ReactDOM from 'react-dom';

import LoginForm from './LoginForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LoginForm
      onChangeForm={() => undefined}
      isPasswordLess={false}
      onResetPassword={() => undefined}
      onSubmit={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
