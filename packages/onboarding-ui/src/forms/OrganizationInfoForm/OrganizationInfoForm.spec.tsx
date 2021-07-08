import ReactDOM from 'react-dom';

import OrganizationInfoForm from './OrganizationInfoForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <OrganizationInfoForm
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
