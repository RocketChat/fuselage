import ReactDOM from 'react-dom';

import RegisterOfflinePage from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RegisterOfflinePage
      termsHref=''
      policyHref=''
      onSubmit={() => undefined}
      onBackButtonClick={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
