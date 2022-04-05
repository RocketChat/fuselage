import ReactDOM from 'react-dom';

import SomethingWentWrongPage from './SomethingWentWrongPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SomethingWentWrongPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
