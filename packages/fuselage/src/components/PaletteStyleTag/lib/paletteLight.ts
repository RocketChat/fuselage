export const palette = [
  {
    category: 'Stroke',
    description: "Use as component's outline, stroke, dividers",
    list: [
      { name: 'stroke-extra-light', color: '#EBECEF' },
      { name: 'stroke-light', color: '#CBCED1' },
      { name: 'stroke-medium', color: '#9EA2A8' },
      { name: 'stroke-dark', color: '#6C727A' },
      { name: 'stroke-extra-dark', color: '#2F343D' },
      { name: 'stroke-extra-light-highlight', color: '#D1EBFE' },
      { name: 'stroke-highlight', color: '#156FF5' },
      { name: 'stroke-extra-light-error', color: '#FFC1C9' },
      { name: 'stroke-error', color: '#EC0D2A' },
    ],
  },
  {
    category: 'Surface',
    description: 'Use as a container on top of the background',
    list: [
      { name: 'surface-light', color: '#FFFFFF' },
      { name: 'surface-tint', color: '#F7F8FA' },
      { name: 'surface-room', color: '#FFFFFF' },
      { name: 'surface-neutral', color: '#E4E7EA' },
      { name: 'surface-disabled', color: '#F7F8FA' },
      { name: 'surface-hover', color: '#F2F3F5' },
      { name: 'surface-selected', color: '#D7DBE0' },
      { name: 'surface-dark', color: '#1F2329' },
      { name: 'surface-featured', color: '#5F1477' },
      { name: 'surface-featured-hover', color: '#4A105D' },
      { name: 'surface-overlay', color: 'rgba(47, 52, 61, 0.5)' },
      { name: 'surface-sidebar', color: '#E4E7EA' },
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
      { name: 'font-white', color: '#FFFFFF' },
      { name: 'font-disabled', color: '#CBCED1' },
      { name: 'font-annotation', color: '#9EA2A8' },
      { name: 'font-hint', color: '#6C737A' },
      { name: 'font-secondary-info', color: '#6C737A' },
      { name: 'font-default', color: '#2F343D' },
      { name: 'font-titles-labels', color: '#1F2329' },
      { name: 'font-info', color: '#095AD2' },
      { name: 'font-danger', color: '#D40C26' },
      { name: 'font-pure-black', color: '#2F343D' },
      { name: 'font-pure-white', color: '#FFFFFF' },
    ],
  },
  {
    category: 'Status',
    description: 'Status Background',
    list: [
      { name: 'status-background-info', color: '#D1EBFE' },
      { name: 'status-background-success', color: '#C0F6E4' },
      { name: 'status-background-danger', color: '#FFC1C9' },
      { name: 'status-background-warning', color: '#FFECAD' },
      { name: 'status-background-warning-2', color: '#FFF8E0' },
      {
        name: 'status-background-service-1',
        color: '#FAD1B0',
      },
      {
        name: 'status-background-service-2',
        color: '#EDD0F7',
      },
      {
        name: 'status-background-service-3',
        color: '#5F1477',
      },
    ],
  },
  {
    description: 'Status Font',
    list: [
      { name: 'status-font-on-info', color: '#095AD2' },
      { name: 'status-font-on-success', color: '#148660' },
      { name: 'status-font-on-danger', color: '#9B1325' },
      { name: 'status-font-on-warning', color: '#8E6300' },
      { name: 'status-font-on-warning-2', color: '#2F343D' },
      { name: 'status-font-on-service-1', color: '#974809' },
      { name: 'status-font-on-service-2 ', color: '#7F1B9F' },
      { name: 'status-font-on-service-3 ', color: '#FFFFFF' },
    ],
  },
  {
    category: 'Badge',
    description: 'Badge Background',
    list: [
      { name: 'badge-background-level-0', color: '#E4E7EA' },
      { name: 'badge-background-level-1', color: '#6C737A' },
      { name: 'badge-background-level-2', color: '#156FF5' },
      { name: 'badge-background-level-3', color: '#F38C39' },
      { name: 'badge-background-level-4', color: '#EC0D2A' },
    ],
  },
  {
    category: 'Status Bullet',
    description: 'Used to show user status',
    list: [
      { name: 'status-bullet-online', color: '#148660' },
      { name: 'status-bullet-away', color: '#AC892F' },
      { name: 'status-bullet-busy', color: '#D40C26' },
      { name: 'status-bullet-disabled', color: '#F38C39' },
      { name: 'status-bullet-offline', color: '#6C737A' },
      { name: 'status-bullet-loading', color: '#6C737A' },
    ],
  },
  {
    category: 'Elevation',
    description: 'Elevation border and shadow levels',
    list: [
      { name: 'shadow-elevation-border', color: '#EBECEF' },
      { name: 'shadow-elevation-1', color: 'rgba(47, 52, 61, 0.1)' },
      {
        name: 'shadow-elevation-2x',
        color: 'rgba(47, 52, 61, 0.08)',
      },
      {
        name: 'shadow-elevation-2y',
        color: 'rgba(47, 52, 61, 0.12)',
      },
    ],
  },
  {
    category: 'Button',
    description: 'Primary Background',
    list: [
      {
        name: 'button-background-primary-default',
        color: '#156FF5',
      },
      {
        name: 'button-background-primary-hover',
        color: '#095AD2',
      },
      {
        name: 'button-background-primary-press',
        color: '#10529E',
      },
      {
        name: 'button-background-primary-focus',
        color: '#156FF5',
      },
      {
        name: 'button-background-primary-keyfocus',
        color: '#156FF5',
      },
      {
        name: 'button-background-primary-disabled',
        color: '#D1EBFE',
      },
    ],
  },
  {
    description: 'Secondary Background',
    list: [
      {
        name: 'button-background-secondary-default',
        color: '#E4E7EA',
      },
      {
        name: 'button-background-secondary-hover',
        color: '#CBCED1',
      },
      {
        name: 'button-background-secondary-press',
        color: '#9EA2A8',
      },
      {
        name: 'button-background-secondary-focus',
        color: '#E4E7EA',
      },
      {
        name: 'button-background-secondary-keyfocus',
        color: '#E4E7EA',
      },
      {
        name: 'button-background-secondary-disabled',
        color: '#EEEFF1',
      },
    ],
  },
  {
    description: 'Secondary Danger Background',
    list: [
      {
        name: 'button-background-secondary-danger-default',
        color: '#E4E7EA',
      },
      {
        name: 'button-background-secondary-danger-hover',
        color: '#CBCED1',
      },
      {
        name: 'button-background-secondary-danger-press',
        color: '#9EA2A8',
      },
      {
        name: 'button-background-secondary-danger-focus',
        color: '#E4E7EA',
      },
      {
        name: 'button-background-secondary-danger-keyfocus',
        color: '#E4E7EA',
      },
      {
        name: 'button-background-secondary-danger-disabled',
        color: '#EEEFF1',
      },
    ],
  },
  {
    description: 'Danger Background',
    list: [
      {
        name: 'button-background-danger-default',
        color: '#EC0D2A',
      },
      {
        name: 'button-background-danger-hover',
        color: '#D40C26',
      },
      {
        name: 'button-background-danger-press',
        color: '#BB0B21',
      },
      {
        name: 'button-background-danger-focus',
        color: '#EC0D2A',
      },
      {
        name: 'button-background-danger-keyfocus',
        color: '#EC0D2A',
      },
      {
        name: 'button-background-danger-disabled',
        color: '#FFC1C9',
      },
    ],
  },
  {
    description: 'Success Background',
    list: [
      {
        name: 'button-background-success-default',
        color: '#148660',
      },
      {
        name: 'button-background-success-hover',
        color: '#106D4F',
      },
      {
        name: 'button-background-success-press',
        color: '#0D5940',
      },
      { name: 'button-background-success-focus', color: '#148660' },
      {
        name: 'button-background-success-keyfocus',
        color: '#148660',
      },
      {
        name: 'button-background-success-disabled',
        color: '#C0F6E4',
      },
    ],
  },
  {
    description: 'Font',
    list: [
      { name: 'button-font-on-primary', color: '#FFFFFF' },
      {
        name: 'button-font-on-primary-disabled',
        color: '#FFFFFF',
      },
      { name: 'button-font-on-secondary', color: '#1F2329' },
      {
        name: 'button-font-on-secondary-disabled',
        color: '#CBCED1',
      },
      { name: 'button-font-on-secondary-danger', color: '#BB0B21' },
      {
        name: 'button-font-on-secondary-danger-disabled',
        color: '#F98F9D',
      },
      { name: 'button-font-on-danger', color: '#FFFFFF' },
      {
        name: 'button-font-on-danger-disabled',
        color: '#FFFFFF',
      },
      { name: 'button-font-on-success', color: '#FFFFFF' },
      {
        name: 'button-font-on-success-disabled',
        color: '#FFFFFF',
      },
    ],
  },
];

export const light = {
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
