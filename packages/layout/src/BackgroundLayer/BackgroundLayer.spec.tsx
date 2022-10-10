import ReactDOM from 'react-dom';

import BackgroundLayer from './BackgroundLayer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BackgroundLayer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
