import type { Meta, StoryFn } from "@storybook/react"
import { Button } from "./Button"
import { Spinner, XStack, YStack, Anchor, Text, Stack, View } from 'tamagui'
import { useState } from "react"
import { action } from '@storybook/addon-actions'

// PropsVariationSection equivalent for Tamagui - matching Fuselage exactly
const PropsVariationSection = ({ 
  component: Component, 
  common = {}, 
  xAxis = {}, 
  yAxis = {} 
}: {
  component: any;
  common?: any;
  xAxis?: Record<string, any>;
  yAxis?: Record<string, any>;
}) => {
  const xAxisKeys = Object.keys(xAxis);
  const yAxisKeys = Object.keys(yAxis);

  return (
    <Stack
      marginBlock={16}
      marginInline="auto"
      style={{ 
        display: 'table',
        borderCollapse: 'collapse',
        width: '100%'
      }}
    >
      {/* Header */}
      <Stack style={{ display: 'table-header-group' }}>
        <Stack style={{ display: 'table-row' }}>
          <Stack style={{ display: 'table-cell' }} aria-hidden />
          {xAxisKeys.map((xVariation, key) => (
            <Stack 
              key={key} 
              style={{ 
                display: 'table-cell',
                color: '#9EA2A8',
                fontSize: '12px',
                fontWeight: '500',
                padding: '8px 16px',
                textAlign: 'center'
              }}
            >
              {xVariation}
            </Stack>
          ))}
        </Stack>
      </Stack>

      {/* Body */}
      <Stack style={{ display: 'table-row-group' }}>
        {yAxisKeys.map((yVariation, y) => (
          <Stack key={y} style={{ display: 'table-row' }}>
            <Stack 
              style={{ 
                display: 'table-cell',
                color: '#9EA2A8',
                fontSize: '12px',
                fontWeight: '500',
                padding: '8px 16px',
                textAlign: 'right',
                verticalAlign: 'middle'
              }}
            >
              {yVariation}
            </Stack>
            {xAxisKeys.map((xKey, x) => (
              <Stack
                key={x}
                style={{ 
                  display: 'table-cell',
                  margin: 'none',
                  paddingBlock: 8,
                  paddingInline: 16,
                  textAlign: 'left',
                  verticalAlign: 'middle'
                }}
              >
                <Stack 
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                  }}
                >
                  <Component
                    {...common}
                    {...xAxis[xKey]}
                    {...yAxis[yVariation]}
                  />
                </Stack>
              </Stack>
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

const meta: Meta<typeof Button> = {
  title: "INPUTS/Button",
  component: Button,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryFn<typeof Button> = () => (
  <Button onPress={action('click')}>Button</Button>
);

export const Loading: StoryFn<typeof Button> = () => (
  <Button loading onPress={action('click')}>
    Button
  </Button>
);

export const LoadingInteraction: StoryFn<typeof Button> = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Button
      icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <line x1="16" y1="4" x2="20" y2="4"/>
        <line x1="18" y1="2" x2="18" y2="6"/>
      </svg>}
      loading={isLoading}
      onPress={() => setIsLoading(!isLoading)}
    >
      Button
    </Button>
  );
};

LoadingInteraction.parameters = {
  docs: {
    description: {
      story: 'Click the button to see the loading state.',
    },
  },
};

export const Truncated: StoryFn<typeof Button> = () => (
  <Stack maxWidth={160} justifyContent="flex-start">
    <Button onPress={action('click')}>Button with loooooooooooong text</Button>
  </Stack>
);

export const Variants: StoryFn<typeof Button> = () => (
  <YStack padding="$2" alignItems="flex-start">
    <XStack style={{ marginBottom: 16 }}>
        <Button primary style={{ marginRight: 16 }}>Primary</Button>
        <Button secondary>Secondary</Button>
      </XStack>
    <XStack style={{ marginBottom: 16 }}>
        <Button danger style={{ marginRight: 16 }}>Danger</Button>
      <Button secondary danger>
        Secondary Danger
      </Button>
      </XStack>
    <XStack style={{ marginBottom: 16 }}>
        <Button warning style={{ marginRight: 16 }}>Warning</Button>
      <Button secondary warning>
        Secondary Warning
      </Button>
      </XStack>
    <XStack style={{ marginBottom: 16 }}>
        <Button success style={{ marginRight: 16 }}>Success</Button>
        <Button secondary success>
        Secondary Success
        </Button>
      </XStack>
    </YStack>
);

export const Sizes: StoryFn<typeof Button> = () => (
    <XStack alignItems='center' justifyContent="flex-start">
    <Button small style={{ marginRight: 16 }}>Small</Button>
    <Button medium style={{ marginRight: 16 }}>Medium</Button>
    <Button>Default</Button>
    </XStack>
);

export const AsLink: StoryFn<typeof Button> = () => (
  <Button is='a' href='https://rocket.chat' external>
    Button
  </Button>
);

export const States = () => (
  <>
    <PropsVariationSection
      component={Button}
      common={{ onClick: action('click') }}
      xAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus focus-visible' },
        disabled: { disabled: true },
      }}
      yAxis={{
        'icon + text': {
          children: 'Button',
          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <line x1="8" y1="9" x2="16" y2="9"/>
            <line x1="8" y1="13" x2="16" y2="13"/>
          </svg>,
        },
        'text': {
          children: 'Button',
        },
        'primary': {
          children: 'Button',
          primary: true,
        },
        'secondary': {
          children: 'Button',
          secondary: true,
        },
        'danger': {
          children: 'Button',
          danger: true,
        },
        'secondary-danger': {
          children: 'Button',
          secondary: true,
          danger: true,
        },
        'warning': {
          children: 'Button',
          warning: true,
        },
        'secondary-warning': {
          children: 'Button',
          secondary: true,
          warning: true,
        },
        'success': {
          children: 'Button',
          success: true,
        },
        'secondary-success': {
          children: 'Button',
          secondary: true,
          success: true,
        },
      }}
    />
    <PropsVariationSection
      component={Button}
      common={{
        small: true,
        onClick: action('click'),
      }}
      xAxis={{
        default: {},
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus focus-visible' },
        disabled: { disabled: true },
      }}
      yAxis={{
        'icon + text': {
          children: 'Button',
          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <line x1="8" y1="9" x2="16" y2="9"/>
            <line x1="8" y1="13" x2="16" y2="13"/>
          </svg>,
        },
        'text': {
          children: 'Button',
        },
        'primary': {
          children: 'Button',
          primary: true,
        },
        'secondary': {
          children: 'Button',
          secondary: true,
        },
        'danger': {
          children: 'Button',
          danger: true,
        },
        'secondary-danger': {
          children: 'Button',
          secondary: true,
          danger: true,
        },
        'warning': {
          children: 'Button',
          warning: true,
        },
        'secondary-warning': {
          children: 'Button',
          secondary: true,
          warning: true,
        },
        'success': {
          children: 'Button',
          success: true,
        },
        'secondary-success': {
          children: 'Button',
          secondary: true,
          success: true,
        },
      }}
    />
  </>
);

export const AsIconButton: StoryFn<typeof Button> = () => (
    <div style={{ 
      position: 'relative',
      width: '100%',
      height: '100px'
    }}>
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#1F2329" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        {/* Horizontal line */}
        <line x1="4" y1="12" x2="20" y2="12"/>
        {/* Arrowhead pointing left */}
        <polyline points="8,8 4,12 8,16"/>
        {/* Short vertical line on the right */}
        <line x1="20" y1="12" x2="20" y2="16"/>
      </svg>
    </div>
);
AsIconButton.parameters = {
  docs: {
    description: {
      story:
        'See full IconButton documentation [here](../?path=/docs/inputs-iconbutton)',
    },
  },
};