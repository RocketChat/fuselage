import ReactDOM from 'react-dom';

import LaunchingWorkspacePage from './LaunchingWorkspacePage';

const onRedirectToWorkspace = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <LaunchingWorkspacePage
      name='Kapai'
      onRedirectToWorkspace={onRedirectToWorkspace}
      isReady={false}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
