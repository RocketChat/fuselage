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

const base = ['breakpoints', 'typography'];

const filterByRoot = (root) => (token) => token.path[0] === root;

export default {
  source: ['src/**/*.json'],
  platforms: {
    'colors-json': {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: colors.map((root) => ({
        destination: `${root}.json`,
        format: 'json/rocketchat',
        filter: filterByRoot(root),
      })),
    },
    'colors-scss': {
      transformGroup: 'scss/rocketchat',
      buildPath: 'dist/',
      files: colors.map((root) => ({
        destination: `${root}.scss`,
        format: 'scss/map-flat',
        options: {
          mapName: kebabCase(root),
        },
        filter: filterByRoot(root),
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
        {
          destination: 'typography.json',
          format: 'json/nested',
          filter: (token) => token.filePath.startsWith('src/typography/'),
        },
      ],
    },
    'scss': {
      transformGroup: 'scss',
      buildPath: 'dist/',
      files: base.map((tokenCategory) => ({
        destination: `${tokenCategory}.scss`,
        format:
          tokenCategory === 'typography'
            ? 'custom/typography-scss'
            : 'custom/scss',
        filter: (token) => token.filePath.startsWith(`src/${tokenCategory}/`),
      })),
    },
  },
};
