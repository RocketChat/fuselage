import ReactDOM from 'react-dom';

import StandaloneServerPage from './StandaloneServerPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <StandaloneServerPage
      currentStep={1}
      stepCount={1}
      onSubmit={() => undefined}
      onBackButtonClick={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
