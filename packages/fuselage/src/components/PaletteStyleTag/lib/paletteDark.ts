export const palette = [
  {
    category: 'Stroke',
    description: "Use as component's outline, stroke, dividers",
    list: [
      { name: 'stroke-extra-light', color: '#333842' },
      { name: 'stroke-light', color: '#404754' },
      { name: 'stroke-medium', color: '#4B5362' },
      { name: 'stroke-dark', color: '#9EA2A8' },
      { name: 'stroke-extra-dark', color: '#CBCED1' },
      { name: 'stroke-extra-light-highlight', color: '#87CBFC' },
      { name: 'stroke-highlight', color: '#6292DA' },
      { name: 'stroke-extra-light-error', color: '#F49AA6' },
      { name: 'stroke-error', color: '#BB3E4E' },
    ],
  },
  {
    category: 'Surface',
    description: 'Use as a container on top of the background',
    list: [
      { name: 'surface-light', color: '#262931' },
      { name: 'surface-tint', color: '#1F2329' },
      { name: 'surface-room', color: '#1F2329' },
      { name: 'surface-neutral', color: '#2D3039' },
      { name: 'surface-disabled', color: '#24272E' },
      { name: 'surface-hover', color: '#1A1E23' },
      { name: 'surface-selected', color: '#4C5362' },
      { name: 'surface-dark', color: '#E4E7EA' },
      { name: 'surface-featured', color: '#5F1477' },
      { name: 'surface-featured-hover', color: '#4A105D' },
      { name: 'surface-overlay', color: 'rgba(0, 0, 0, 0.6)' },
      { name: 'surface-sidebar', color: '#2F343D' },
    ],
  },
  {
    category: 'Shadow',
    description: 'Use as a shadow color',
    list: [
      { name: 'shadow-highlight', color: '#D1EBFE' },
      { name: 'shadow-danger', color: '#FFE9EC' },
    ],
  },
  {
    category: 'Font',
    description: 'These should be applied according to surfaces',
    list: [
      { name: 'font-white', color: '#2F343D' },
      { name: 'font-disabled', color: '#60646C' },
      { name: 'font-annotation', color: '#9EA2A8' },
      { name: 'font-hint', color: '#9EA2A8' },
      { name: 'font-secondary-info', color: '#9EA2A8' },
      { name: 'font-default', color: '#C1C7D0' },
      { name: 'font-titles-labels', color: '#F2F3F5' },
      { name: 'font-info', color: '#739EDE' },
      { name: 'font-danger', color: '#D88892' },
      { name: 'font-pure-black', color: '#2F343D' },
      { name: 'font-pure-white', color: '#FFFFFF' },
    ],
  },
  {
    category: 'Status',
    description: 'Status Background',
    list: [
      { name: 'status-background-info', color: '#A8C3EB' },
      { name: 'status-background-success', color: '#C1EBDD' },
      { name: 'status-background-warning', color: '#FEEFBE' },
      { name: 'status-background-warning-2', color: '#3C3625' },
      { name: 'status-background-danger', color: '#FFBDC5' },
      { name: 'status-background-service-1', color: '#FCE3CF' },
      { name: 'status-background-service-2', color: '#EDD0F7' },
      { name: 'status-background-service-3', color: '#5F1477' },
    ],
  },
  {
    description: 'Status Font',
    list: [
      { name: 'status-font-on-info', color: '#739EDE' },
      { name: 'status-font-on-success', color: '#58AD90' },
      { name: 'status-font-on-warning', color: '#C7AA66' },
      { name: 'status-font-on-warning-2', color: '#FFFFFF' },
      { name: 'status-font-on-danger', color: '#D88892' },
      { name: 'status-font-on-service-1', color: '#CA9163' },
      { name: 'status-font-on-service-2 ', color: '#C393D2' },
      { name: 'status-font-on-service-3 ', color: '#FFFFFF' },
    ],
  },
  {
    category: 'Badge',
    description: 'Badge Background',
    list: [
      { name: 'badge-background-level-0', color: '#404754' },
      { name: 'badge-background-level-1', color: '#484C51' },
      { name: 'badge-background-level-2', color: '#2C65BA' },
      { name: 'badge-background-level-3', color: '#A9642D' },
      { name: 'badge-background-level-4', color: '#BB3E4E' },
    ],
  },
  {
    category: 'Status Bullet',
    description: 'Used to show user status',
    list: [
      { name: 'status-bullet-online', color: '#1CBF89' },
      { name: 'status-bullet-away', color: '#B08C30' },
      { name: 'status-bullet-busy', color: '#C75765' },
      { name: 'status-bullet-disabled', color: '#CC7F42' },
      { name: 'status-bullet-offline', color: '#8B9098' },
      { name: 'status-bullet-loading', color: '#8B9098' },
    ],
  },
  {
    category: 'Elevation',
    description: 'Elevation border and shadow levels',
    list: [
      { name: 'shadow-elevation-border', color: '#2F343D' },
      { name: 'shadow-elevation-1', color: 'rgba(9, 9, 9, 0.35)' },
      { name: 'shadow-elevation-2x', color: 'rgba(9, 9, 9, 0.3)' },
      { name: 'shadow-elevation-2y', color: 'rgba(9, 9, 9, 0.45)' },
    ],
  },
  {
    category: 'Button',
    description: 'Primary Background',
    list: [
      {
        name: 'button-background-primary-default',
        color: '#095AD2',
      },
      { name: 'button-background-primary-hover', color: '#10529E' },
      { name: 'button-background-primary-press', color: '#01336B' },
      { name: 'button-background-primary-focus', color: '#095AD2' },
      {
        name: 'button-background-primary-keyfocus',
        color: '#095AD2',
      },
      {
        name: 'button-background-primary-disabled',
        color: '#012247',
      },
    ],
  },
  {
    description: 'Secondary Background',
    list: [
      {
        name: 'button-background-secondary-default',

        color: '#353B45',
      },
      {
        name: 'button-background-secondary-hover',
        color: '#404754',
      },
      {
        name: 'button-background-secondary-press',
        color: '#4C5362',
      },
      {
        name: 'button-background-secondary-focus',

        color: '#353B45',
      },
      {
        name: 'button-background-secondary-keyfocus',

        color: '#353B45',
      },
      {
        name: 'button-background-secondary-disabled',
        color: '#353B45',
      },
    ],
  },
  {
    description: 'Secondary Danger Background',
    list: [
      {
        name: 'button-background-secondary-danger-default',

        color: '#353B45',
      },
      {
        name: 'button-background-secondary-danger-hover',
        color: '#404754',
      },
      {
        name: 'button-background-secondary-danger-press',
        color: '#4C5362',
      },
      {
        name: 'button-background-secondary-danger-focus',

        color: '#353B45',
      },
      {
        name: 'button-background-secondary-danger-keyfocus',

        color: '#353B45',
      },
      {
        name: 'button-background-secondary-danger-disabled',
        color: '#353B45',
      },
    ],
  },
  {
    description: 'Danger Background',
    list: [
      { name: 'button-background-danger-default', color: '#BB3E4E' },
      { name: 'button-background-danger-hover', color: '#95323F' },
      { name: 'button-background-danger-press', color: '#822C37' },
      { name: 'button-background-danger-focus', color: '#BB3E4E' },
      {
        name: 'button-background-danger-keyfocus',
        color: '#BB3E4E',
      },
      {
        name: 'button-background-danger-disabled',
        color: '#3D2126',
      },
    ],
  },
  {
    description: 'Success Background',
    list: [
      {
        name: 'button-background-success-default',
        color: '#1D7256',
      },
      { name: 'button-background-success-hover', color: '#175943' },
      { name: 'button-background-success-press', color: '#134937' },
      { name: 'button-background-success-focus', color: '#1D7256' },
      {
        name: 'button-background-success-keyfocus',
        color: '#1D7256',
      },
      {
        name: 'button-background-success-disabled',
        color: '#1E4B40',
      },
    ],
  },
  {
    description: 'Font',
    list: [
      { name: 'button-font-on-primary', color: '#FFFFFF' },
      { name: 'button-font-on-secondary', color: '#E4E7EA' },
      { name: 'button-font-on-secondary-danger', color: '#FFC1C9' },
      { name: 'button-font-on-danger', color: '#FFFFFF' },
      { name: 'button-font-on-success', color: '#FFFFFF' },
      {
        name: 'button-font-on-primary-disabled',

        color: '#6C727A',
      },
      {
        name: 'button-font-on-secondary-disabled',

        color: '#6C727A',
      },
      {
        name: 'button-font-on-secondary-danger-disabled',
        color: '#6B0513',
      },
      { name: 'button-font-on-danger-disabled', color: '#757575' },
      { name: 'button-font-on-success-disabled', color: '#757575' },
    ],
  },
];

export const dark = {
  ...palette.reduce(
    (rec, group) => ({
      ...rec,
      ...group.list.reduce(
        (rec, item) => ({
          ...rec,
          [item.name]: item.color,
        }),
        {} as Record<string, string>
      ),
    }),
    {} as Record<string, string>
  ),
};
