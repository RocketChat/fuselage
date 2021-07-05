import ReactDOM from 'react-dom';

import AdminInfoForm from './AdminInfoForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdminInfoForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
