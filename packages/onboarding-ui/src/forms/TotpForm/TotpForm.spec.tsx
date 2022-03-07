import ReactDOM from 'react-dom';

import TotpForm from './TotpForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TotpForm
      onChangeTotpForm={() => undefined}
      isBackupCode={false}
      onSubmit={() => undefined}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
