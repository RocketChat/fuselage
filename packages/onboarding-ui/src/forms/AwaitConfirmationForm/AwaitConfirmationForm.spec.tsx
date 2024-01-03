import ReactDOM from 'react-dom';

import AwaitConfirmationForm from './AwaitConfirmationForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AwaitConfirmationForm
      currentStep={4}
      stepCount={4}
      securityCode='Funny Tortoise In The Hat'
      emailAddress='emailname@email.com'
      onResendEmailRequest={() => true}
      onChangeEmailRequest={() => true}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
