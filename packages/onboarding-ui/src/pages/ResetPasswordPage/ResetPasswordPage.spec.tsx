import ReactDOM from 'react-dom';

import ResetPasswordPage from './ResetPasswordPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ResetPasswordPage
      validateEmail={() => undefined}
      onSubmit={() => undefined}
      onLogin={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
