import ReactDOM from 'react-dom';

import OrganizationInfoForm from './OrganizationInfoForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrganizationInfoForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
