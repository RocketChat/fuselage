import ReactDOM from 'react-dom';

import MyComponent from './MyComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
