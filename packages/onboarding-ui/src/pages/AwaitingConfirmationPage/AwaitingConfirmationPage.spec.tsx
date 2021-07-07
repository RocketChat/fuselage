import ReactDOM from 'react-dom';

import AwaitingConfirmationPage from './AwaitingConfirmationPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AwaitingConfirmationPage
      securityCode=''
      emailAddress=''
      onResendEmailRequest={() => undefined}
      onChangeEmailRequest={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
