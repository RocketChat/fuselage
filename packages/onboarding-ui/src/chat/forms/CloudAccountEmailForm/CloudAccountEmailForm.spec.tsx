import ReactDOM from 'react-dom';

import CloudAccountEmailForm from './CloudAccountEmailForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CloudAccountEmailForm
      currentStep={1}
      stepCount={1}
      validateEmail={() => true}
      onSubmit={() => undefined}
      onBackButtonClick={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
