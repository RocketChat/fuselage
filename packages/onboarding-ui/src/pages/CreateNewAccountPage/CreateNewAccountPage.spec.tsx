import ReactDOM from 'react-dom';

import CreateNewAccountPage from './CreateNewAccountPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CreateNewAccountPage
      validateEmail={() => undefined}
      validatePassword={() => undefined}
      validateConfirmationPassword={() => undefined}
      onSubmit={() => undefined}
      onLogin={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
