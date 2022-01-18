import ReactDOM from 'react-dom';

import RegisteredServerPage from './RegisteredServerPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RegisteredServerPage
      currentStep={1}
      stepCount={1}
      onSubmit={() => undefined}
      onBackButtonClick={() => undefined}
      onClickContinue={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
