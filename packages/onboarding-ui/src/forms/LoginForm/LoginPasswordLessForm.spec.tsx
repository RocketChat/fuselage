import ReactDOM from 'react-dom';

import LoginPasswordLessForm from './LoginPasswordLessForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LoginPasswordLessForm
      onChangeForm={() => undefined}
      onSubmit={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
