import ReactDOM from 'react-dom';

import CreateNewPassword from './CreateNewPassword';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CreateNewPassword
      validatePasswordConfirmation={() => undefined}
      onSubmit={() => undefined}
      validatePassword={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
