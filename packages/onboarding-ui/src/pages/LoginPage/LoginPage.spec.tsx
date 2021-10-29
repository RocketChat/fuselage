import ReactDOM from 'react-dom';

import LoginPage from './LoginPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LoginPage
      loginPasswordLessProps={{
        initialValues: undefined,
        onChangeForm(): void {
          throw new Error('Function not implemented.');
        },
        onSubmit() {
          throw new Error('Function not implemented.');
        },
      }}
      loginDefaultProps={{
        initialValues: undefined,
        onSendLoginLinkForm(): void {
          throw new Error('Function not implemented.');
        },
        onResetPassword(): void {
          throw new Error('Function not implemented.');
        },
        onSubmit() {
          throw new Error('Function not implemented.');
        },
      }}
      isPasswordLessFlow={false}
      onCreateAccount={function (): void {
        throw new Error('Function not implemented.');
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
