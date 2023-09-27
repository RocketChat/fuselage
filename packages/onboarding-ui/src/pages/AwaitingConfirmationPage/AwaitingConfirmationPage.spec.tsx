import ReactDOM from 'react-dom';

import AwaitingConfirmationPage from './AwaitingConfirmationPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AwaitingConfirmationPage
      currentStep={4}
      stepCount={4}
      securityCode=''
      emailAddress=''
      onResendEmailRequest={() => undefined}
      onChangeEmailRequest={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
