import ReactDOM from 'react-dom';

import InformationPage from './InformationPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InformationPage title='' description='' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
