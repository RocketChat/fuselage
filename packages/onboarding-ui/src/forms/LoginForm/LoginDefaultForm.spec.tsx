import ReactDOM from 'react-dom';

import LoginDefaultForm from './LoginDefaultForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LoginDefaultForm
      onSendLoginLinkForm={() => undefined}
      onResetPassword={() => undefined}
      onSubmit={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
