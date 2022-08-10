import ReactDOM from 'react-dom';

import ManageWorkspaceFallback from './ManageWorkspaceFallback';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ManageWorkspaceFallback onManageWorkspaceClick={() => undefined} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
