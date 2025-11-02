import { render } from '@testing-library/react';

import AdminInfoForm from './AdminInfoForm.js';

it('renders without crashing', () => {
  render(
    <AdminInfoForm
      currentStep={1}
      stepCount={1}
      passwordRulesHint=''
      validateEmail={() => true}
      validatePassword={() => true}
      validateUsername={() => true}
      onSubmit={() => undefined}
    />,
  );
});
