import type { StoryFn, Meta } from '@storybook/react-webpack5';

import BreadcrumbItem from './BreadcrumbItem';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export const Default: StoryFn<typeof Breadcrumbs> = (props) => (
  <Breadcrumbs {...props}>
    <BreadcrumbItem href='#'>Home</BreadcrumbItem>
    <BreadcrumbItem href='#'>Components</BreadcrumbItem>
    <BreadcrumbItem href='#' selected>Breadcrumbs</BreadcrumbItem>
  </Breadcrumbs>
);

export const WithTitle: StoryFn<typeof Breadcrumbs> = (props) => (
  <Breadcrumbs {...props}>
    <BreadcrumbItem title='Home page' href='#'>Home</BreadcrumbItem>
    <BreadcrumbItem title='Components list' href='#'>Components</BreadcrumbItem>
    <BreadcrumbItem title='Current page' href='#' selected>Breadcrumbs</BreadcrumbItem>
  </Breadcrumbs>
);
