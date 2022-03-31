import ReactDOM from 'react-dom';

import CreateFirstMemberForm from './CreateFirstMemberForm';

const onSubmit = jest.fn();
const onBackButtonClick = jest.fn();
const validatePassword = jest.fn();

const props = {
  currentStep: 1,
  stepCount: 1,
  workspaceName: 'Kapai',
  onSubmit,
  onBackButtonClick,
  validatePassword,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateFirstMemberForm {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
