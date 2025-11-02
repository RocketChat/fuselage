import { render } from '@testing-library/react';
import { it } from 'vitest';

import TotpForm from './TotpForm.js';

it('renders without crashing', () => {
  render(
    <TotpForm
      onChangeTotpForm={() => undefined}
      isBackupCode={false}
      onSubmit={() => undefined}
    />,
  );
});
