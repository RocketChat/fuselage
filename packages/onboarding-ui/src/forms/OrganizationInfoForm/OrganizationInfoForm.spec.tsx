import ReactDOM from 'react-dom';

import OrganizationInfoForm from './OrganizationInfoForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <OrganizationInfoForm
      currentStep={1}
      stepCount={1}
      organizationTypeOptions={[]}
      organizationIndustryOptions={[]}
      organizationSizeOptions={[]}
      countryOptions={[]}
      onSubmit={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
