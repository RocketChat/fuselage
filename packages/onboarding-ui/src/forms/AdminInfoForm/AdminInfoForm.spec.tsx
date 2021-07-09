import ReactDOM from 'react-dom';

import AdminInfoForm from './AdminInfoForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AdminInfoForm
      currentStep={1}
      stepCount={1}
      passwordRulesHint=''
      validateEmail={() => true}
      validatePassword={() => true}
      validateUsername={() => true}
      onSubmit={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
