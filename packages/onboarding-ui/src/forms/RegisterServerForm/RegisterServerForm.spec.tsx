import ReactDOM from 'react-dom';

import RegisterServerForm from './RegisterServerForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RegisterServerForm
      currentStep={1}
      stepCount={1}
      validateEmail={() => true}
      onBackButtonClick={() => undefined}
      onClickRegisterLater={() => undefined}
      onSubmit={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
