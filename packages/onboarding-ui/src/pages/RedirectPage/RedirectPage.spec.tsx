import ReactDOM from 'react-dom';

import RedirectPage from './RedirectPage';

const onRedirect = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RedirectPage title='Ready' countDownSeconds={5} onRedirect={onRedirect} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
