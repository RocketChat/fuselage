export const palette = [
  {
    category: 'Stroke',
    description: "Use as component's outline, stroke, dividers",
    list: [
      { name: 'stroke-extra-light', token: '', color: '#333842' },
      { name: 'stroke-light', token: '', color: '#404754' },
      { name: 'stroke-medium', token: '', color: '#4B5362' },
      { name: 'stroke-dark', token: 'N600', color: '#9EA2A8' },
      { name: 'stroke-extra-dark', token: 'N400', color: '#CBCED1' },
      { name: 'stroke-extra-light-highlight', token: '', color: '#87CBFC' },
      { name: 'stroke-highlight', token: '', color: '#6292DA' },
      { name: 'stroke-extra-light-error', token: '', color: '#F49AA6' },
      { name: 'stroke-error', token: '', color: '#BB3E4E' },
    ],
  },
  {
    category: 'Surface',
    description: 'Use as a container on top of the background',
    list: [
      { name: 'surface-light', token: 'N900', color: '#262931' },
      { name: 'surface-tint', token: '', color: '#1F2329' },
      { name: 'surface-room', token: '', color: '#1F2329' },
      { name: 'surface-neutral', token: '', color: '#2D3039' },
      { name: 'surface-disabled', token: 'N800', color: '#24272E' },
      { name: 'surface-hover', token: '', color: '#1A1E23' },
      { name: 'surface-selected', token: '', color: '#4C5362' },
      { name: 'surface-dark', token: 'N400', color: '#E4E7EA' },
      { name: 'surface-featured', token: '', color: '#5F1477' },
      { name: 'surface-featured-hover', token: '', color: '#4A105D' },
      { name: 'surface-overlay', token: '', color: 'rgba(0, 0, 0, 0.6)' },
      { name: 'surface-sidebar', token: '', color: '#2F343D' },
    ],
  },
  {
    category: 'Shadow',
    description: 'Use as a shadow color',
    list: [
      { name: 'shadow-highlight', token: '', color: '#D1EBFE' },
      { name: 'shadow-danger', token: '', color: '#FFE9EC' },
    ],
  },
  {
    category: 'Font',
    description: 'These should be applied according to surfaces',
    list: [
      { name: 'font-white', token: 'N800', color: '#2F343D' },
      { name: 'font-disabled', token: '', color: '#60646C' },
      { name: 'font-annotation', token: 'N600', color: '#9EA2A8' },
      { name: 'font-hint', token: 'N600', color: '#9EA2A8' },
      { name: 'font-secondary-info', token: '', color: '#9EA2A8' },
      { name: 'font-default', token: 'N400', color: '#C1C7D0' },
      { name: 'font-titles-labels', token: '', color: '#F2F3F5' },
      { name: 'font-info', token: '', color: '#739EDE' },
      { name: 'font-danger', token: '', color: '#D88892' },
      { name: 'font-pure-black', token: '', color: '#2F343D' },
      { name: 'font-pure-white', token: '', color: '#FFFFFF' },
    ],
  },
  {
    category: 'Status',
    description: 'Status Background',
    list: [
      { name: 'status-background-info', token: '', color: '#A8C3EB' },
      { name: 'status-background-success', token: '', color: '#C1EBDD' },
      { name: 'status-background-warning', token: '', color: '#FEEFBE' },
      { name: 'status-background-warning-2', token: '', color: '#3C3625' },
      { name: 'status-background-danger', token: '', color: '#FFBDC5' },
      { name: 'status-background-service-1', token: '', color: '#FCE3CF' },
      { name: 'status-background-service-2', token: '', color: '#EDD0F7' },
      { name: 'status-background-service-3', token: '', color: '#5F1477' },
    ],
  },
  {
    description: 'Status Font',
    list: [
      { name: 'status-font-on-info', token: '', color: '#739EDE' },
      { name: 'status-font-on-success', token: '', color: '#58AD90' },
      { name: 'status-font-on-warning', token: '', color: '#C7AA66' },
      { name: 'status-font-on-warning-2', token: '', color: '#FFFFFF' },
      { name: 'status-font-on-danger', token: '', color: '#D88892' },
      { name: 'status-font-on-service-1', token: '', color: '#CA9163' },
      { name: 'status-font-on-service-2 ', token: '', color: '#C393D2' },
      { name: 'status-font-on-service-3 ', token: '', color: '#FFFFFF' },
    ],
  },
  {
    category: 'Badge',
    description: 'Badge Background',
    list: [
      { name: 'badge-background-level-0', token: '', color: '#404754' },
      { name: 'badge-background-level-1', token: '', color: '#484C51' },
      { name: 'badge-background-level-2', token: '', color: '#2C65BA' },
      { name: 'badge-background-level-3', token: '', color: '#A9642D' },
      { name: 'badge-background-level-4', token: '', color: '#BB3E4E' },
    ],
  },
  {
    category: 'Status Bullet',
    description: 'Used to show user status',
    list: [
      { name: 'status-bullet-online', token: '', color: '#1CBF89' },
      { name: 'status-bullet-away', token: '', color: '#B08C30' },
      { name: 'status-bullet-busy', token: '', color: '#C75765' },
      { name: 'status-bullet-disabled', token: '', color: '#CC7F42' },
      { name: 'status-bullet-offline', token: '', color: '#8B9098' },
      { name: 'status-bullet-loading', token: '', color: '#8B9098' },
    ],
  },
  {
    category: 'Elevation',
    description: 'Elevation border and shadow levels',
    list: [
      { name: 'shadow-elevation-border', token: '', color: '#2F343D' },
      { name: 'shadow-elevation-1', token: '', color: 'rgba(9, 9, 9, 0.35)' },
      { name: 'shadow-elevation-2x', token: '', color: 'rgba(9, 9, 9, 0.3)' },
      { name: 'shadow-elevation-2y', token: '', color: 'rgba(9, 9, 9, 0.45)' },
    ],
  },
  {
    category: 'Button',
    description: 'Primary Background',
    list: [
      {
        name: 'button-background-primary-default',
        token: '',
        color: '#095AD2',
      },
      { name: 'button-background-primary-hover', token: '', color: '#10529E' },
      { name: 'button-background-primary-press', token: '', color: '#01336B' },
      { name: 'button-background-primary-focus', token: '', color: '#095AD2' },
      {
        name: 'button-background-primary-keyfocus',
        token: '',
        color: '#095AD2',
      },
      {
        name: 'button-background-primary-disabled',
        token: '',
        color: '#012247',
      },
    ],
  },
  {
    description: 'Secondary Background',
    list: [
      {
        name: 'button-background-secondary-default',
        token: 'N800',
        color: '#353B45',
      },
      {
        name: 'button-background-secondary-hover',
        token: '',
        color: '#404754',
      },
      {
        name: 'button-background-secondary-press',
        token: '',
        color: '#4C5362',
      },
      {
        name: 'button-background-secondary-focus',
        token: 'N800',
        color: '#353B45',
      },
      {
        name: 'button-background-secondary-keyfocus',
        token: 'N800',
        color: '#353B45',
      },
      {
        name: 'button-background-secondary-disabled',
        token: '',
        color: '#353B45',
      },
    ],
  },
  {
    description: 'Secondary Danger Background',
    list: [
      {
        name: 'button-background-secondary-danger-default',
        token: 'N800',
        color: '#353B45',
      },
      {
        name: 'button-background-secondary-danger-hover',
        token: '',
        color: '#404754',
      },
      {
        name: 'button-background-secondary-danger-press',
        token: '',
        color: '#4C5362',
      },
      {
        name: 'button-background-secondary-danger-focus',
        token: 'N800',
        color: '#353B45',
      },
      {
        name: 'button-background-secondary-danger-keyfocus',
        token: 'N800',
        color: '#353B45',
      },
      {
        name: 'button-background-secondary-danger-disabled',
        token: '',
        color: '#353B45',
      },
    ],
  },
  {
    description: 'Danger Background',
    list: [
      { name: 'button-background-danger-default', token: '', color: '#BB3E4E' },
      { name: 'button-background-danger-hover', token: '', color: '#95323F' },
      { name: 'button-background-danger-press', token: '', color: '#822C37' },
      { name: 'button-background-danger-focus', token: '', color: '#BB3E4E' },
      {
        name: 'button-background-danger-keyfocus',
        token: '',
        color: '#BB3E4E',
      },
      {
        name: 'button-background-danger-disabled',
        token: '',
        color: '#3D2126',
      },
    ],
  },
  {
    description: 'Success Background',
    list: [
      {
        name: 'button-background-success-default',
        token: '',
        color: '#1D7256',
      },
      { name: 'button-background-success-hover', token: '', color: '#175943' },
      { name: 'button-background-success-press', token: '', color: '#134937' },
      { name: 'button-background-success-focus', token: '', color: '#1D7256' },
      {
        name: 'button-background-success-keyfocus',
        token: '',
        color: '#1D7256',
      },
      {
        name: 'button-background-success-disabled',
        token: '',
        color: '#1E4B40',
      },
    ],
  },
  {
    description: 'Font',
    list: [
      { name: 'button-font-on-primary', token: 'white', color: '#FFFFFF' },
      { name: 'button-font-on-secondary', token: 'N400', color: '#E4E7EA' },
      { name: 'button-font-on-secondary-danger', token: '', color: '#FFC1C9' },
      { name: 'button-font-on-danger', token: 'white', color: '#FFFFFF' },
      { name: 'button-font-on-success', token: 'white', color: '#FFFFFF' },
      {
        name: 'button-font-on-primary-disabled',
        token: 'N700',
        color: '#6C727A',
      },
      {
        name: 'button-font-on-secondary-disabled',
        token: 'N700',
        color: '#6C727A',
      },
      {
        name: 'button-font-on-secondary-danger-disabled',
        token: '',
        color: '#6B0513',
      },
      { name: 'button-font-on-danger-disabled', token: '', color: '#757575' },
      { name: 'button-font-on-success-disabled', token: '', color: '#757575' },
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
