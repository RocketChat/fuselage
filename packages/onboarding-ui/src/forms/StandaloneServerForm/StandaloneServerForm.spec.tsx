import ReactDOM from 'react-dom';

import StandaloneServerForm from './StandaloneServerForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <StandaloneServerForm
      currentStep={1}
      stepCount={1}
      onBackButtonClick={() => undefined}
      onSubmit={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
