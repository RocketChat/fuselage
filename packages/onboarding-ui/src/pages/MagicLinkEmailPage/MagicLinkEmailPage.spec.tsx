import ReactDOM from 'react-dom';

import MagicLinkEmailPage from './MagicLinkEmailPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MagicLinkEmailPage
      onResendEmailRequest={() => undefined}
      onChangeEmailRequest={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
