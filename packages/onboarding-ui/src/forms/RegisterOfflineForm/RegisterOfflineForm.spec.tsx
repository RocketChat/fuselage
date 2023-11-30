import ReactDOM from 'react-dom';

import RegisterOfflineForm from './RegisterOfflineForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RegisterOfflineForm
      termsHref=''
      policyHref=''
      clientKey=''
      onCopySecurityCode={() => undefined}
      onBackButtonClick={() => undefined}
      onSubmit={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
