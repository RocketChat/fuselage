import ReactDOM from 'react-dom';

import TooltipWrapper from './TooltipWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TooltipWrapper children={() => null} text='' />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TooltipWrapper children={<div />} text='' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
