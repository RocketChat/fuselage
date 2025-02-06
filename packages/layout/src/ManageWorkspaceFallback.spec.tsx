import { render } from '@testing-library/react';

import ManageWorkspaceFallback from './ManageWorkspaceFallback';

it('renders without crashing', () => {
  render(<ManageWorkspaceFallback onManageWorkspaceClick={() => undefined} />);
});
