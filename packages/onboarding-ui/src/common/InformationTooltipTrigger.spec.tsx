import ReactDOM from 'react-dom';

import InformationTooltipTrigger from './InformationTooltipTrigger';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InformationTooltipTrigger text='' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
