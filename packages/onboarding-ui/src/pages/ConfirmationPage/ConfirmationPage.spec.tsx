import ReactDOM from 'react-dom';

import ConfirmationPage from './ConfirmationPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ConfirmationPage title='Title' subTitle='Description' />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
