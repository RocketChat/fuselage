import ReactDOM from 'react-dom';

import OauthAuthorizationPage from './OauthAuthorizationPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <OauthAuthorizationPage
      clientName={undefined}
      onClickAuthorizeOAuth={() => undefined}
      error={{
        message: undefined,
        onGoBack: () => undefined,
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
