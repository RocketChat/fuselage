import ReactDOM from 'react-dom';

import AdminInfoForm from './AdminInfoForm';
import { onSubmit } from './AdminInfoForm.stories';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdminInfoForm onSubmit={onSubmit} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
