import ReactDOM from 'react-dom';

import NewAccountForm from './NewAccountForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <NewAccountForm
      validateEmail={() => undefined}
      validatePassword={() => undefined}
      validateConfirmationPassword={() => undefined}
      onSubmit={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
