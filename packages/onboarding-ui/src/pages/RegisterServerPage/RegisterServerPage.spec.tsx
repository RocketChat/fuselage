import ReactDOM from 'react-dom';

import RegisterServerPage from './RegisterServerPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RegisterServerPage
      currentStep={1}
      stepCount={1}
      onSubmit={() => undefined}
      onBackButtonClick={() => undefined}
      onClickRegisterLater={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
