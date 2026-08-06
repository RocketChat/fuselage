import { kebabCase } from 'change-case';

const colors = [
  'colors',
  'badge',
  'button',
  'font',
  'shadow',
  'status',
  'statusBullet',
  'stroke',
  'surface',
];

const filterByCategory = (root) => (token) =>
  token.attributes.category === root;

export default {
  source: ['src/**/*.json'],
  platforms: {
    'fuselage/json': {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: ['typography', ...colors].map((root) => ({
        destination: `${root}.json`,
        format: 'json/rocketchat',
        filter: filterByCategory(root),
      })),
    },
    'fuselage/scss': {
      transformGroup: 'scss/rocketchat',
      buildPath: 'dist/',
      files: ['typography', ...colors].map((root) => ({
        destination: `${root}.scss`,
        format: 'scss/map-flat',
        options: {
          mapName: kebabCase(root),
        },
        filter: filterByCategory(root),
      })),
    },
    'json': {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'breakpoints.json',
          format: 'custom/breakpoints-json',
          filter: (token) => token.filePath.startsWith('src/breakpoints/'),
        },
      ],
    },
    'scss': {
      transformGroup: 'scss',
      buildPath: 'dist/',
      files: [
        {
          destination: `breakpoints.scss`,
          format: 'custom/scss',
          filter: (token) => token.filePath.startsWith('src/breakpoints/'),
        },
      ],
    },
  },
};
