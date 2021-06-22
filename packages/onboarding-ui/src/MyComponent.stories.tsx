import { ReactElement } from 'react';

import MyComponent from './MyComponent';

export default {
  title: 'MyComponent',
  component: MyComponent,
};

export const _MyComponent = (): ReactElement => <MyComponent />;
