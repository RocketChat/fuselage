import ReactDOM from 'react-dom';

import ResetPasswordForm from './ResetPasswordForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ResetPasswordForm
      onSubmit={() => undefined}
      validateEmail={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
