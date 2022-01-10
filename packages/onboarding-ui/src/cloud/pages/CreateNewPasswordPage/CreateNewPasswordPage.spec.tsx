import ReactDOM from 'react-dom';

import CreateNewPasswordPage from './CreateNewPasswordPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CreateNewPasswordPage
      validatePassword={() => undefined}
      validatePasswordConfirmation={() => undefined}
      onSubmit={() => undefined}
      onLogin={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
