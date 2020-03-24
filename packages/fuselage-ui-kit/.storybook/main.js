module.exports = {
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-docs/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-options/register',
    '@storybook/addon-viewport/register',
  ],
  stories: [
    '../src/**/stories.{mdx,js}',
    '../src/**/*.stories.{mdx,js}',
    '../src/**/stories/index.{mdx,js}',
  ],
};
