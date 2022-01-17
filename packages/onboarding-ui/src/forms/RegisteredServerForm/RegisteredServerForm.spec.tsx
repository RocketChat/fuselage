import ReactDOM from 'react-dom';

import RegisteredServerForm from './RegisteredServerForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RegisteredServerForm
      currentStep={1}
      stepCount={1}
      validateEmail={() => true}
      onBackButtonClick={() => undefined}
      onClickContinue={() => undefined}
      onSubmit={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
