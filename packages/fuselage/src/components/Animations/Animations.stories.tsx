import { useDebouncedValue } from '@rocket.chat/fuselage-hooks';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useEffect, useState, type ReactNode } from 'react';

import { PropsVariationSection } from '../../../.storybook/helpers';
import { Box } from '../Box';
import type { BoxProps } from '../Box/Box';
import { Skeleton } from '../Skeleton';
import { TextInput } from '../TextInput';

// ADR Constants
const SRT_MS = 230;
const CRT_MS = 400;
// const FPS = 60;
// const FRAMES_AT_SRT = Math.round(SRT_MS / (1000 / FPS)); // 14

// Base component for stories
const Circle = ({
  animationDelay,
  style,
  ...props
}: BoxProps & { animationDelay?: string }) => (
  <Box
    width={100}
    height={100}
    backgroundColor='red'
    borderRadius='50%'
    style={{
      ...style,
      animationDelay,
    }}
    {...props}
  />
);

export default {
  title: 'Animation',
  component: Circle,
} satisfies Meta<typeof Circle>;

const MicroInteraction = ({
  transformFn,
  transition,
  children,
  wrong,
  style,
  ...props
}: {
  transformFn: (isPressed: boolean) => string;
  transition: string;
  wrong?: boolean;
  children: ReactNode;
} & BoxProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Box
      width={120}
      height={80}
      p={8}
      m={8}
      color='white'
      backgroundColor={wrong ? 'red' : 'green'}
      borderRadius={8}
      style={{
        cursor: 'pointer',
        transform: transformFn(isPressed),
        transition,
        ...style,
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      {...props}
    >
      {children}
    </Box>
  );
};

// 1) Micro-interactions (SRT = 230ms)
export const MicroInteractionClickScale230ms: StoryObj = {
  render: () => {
    return (
      <Box display='flex' flexDirection='row' alignItems='center'>
        <MicroInteraction
          wrong
          transformFn={(isPressed) => (isPressed ? 'scale(0.92)' : 'scale(1)')}
          transition='transform 120ms ease'
        >
          120ms SRT
        </MicroInteraction>
        <MicroInteraction
          transformFn={(isPressed) => (isPressed ? 'scale(0.92)' : 'scale(1)')}
          transition='none'
        >
          No animation
        </MicroInteraction>
        <MicroInteraction
          transformFn={(isPressed) => (isPressed ? 'scale(0.92)' : 'scale(1)')}
          transition={`transform ${SRT_MS}ms ease`}
        >
          230ms SRT
        </MicroInteraction>
        <MicroInteraction
          transformFn={(isPressed) => (isPressed ? 'scale(0.92)' : 'scale(1)')}
          transition={`transform ${SRT_MS}ms ease`}
          style={{
            transitionDelay: '20ms',
          }}
        >
          230ms SRT + 40ms delay (20ms each way)
        </MicroInteraction>
        <MicroInteraction
          wrong
          transformFn={(isPressed) => (isPressed ? 'scale(0.92)' : 'scale(1)')}
          transition={`transform ${SRT_MS}ms ease`}
          style={{
            transitionDelay: '100ms',
          }}
        >
          230ms SRT + 200ms delay (100ms each way)
        </MicroInteraction>
        <MicroInteraction
          wrong
          transformFn={(isPressed) => (isPressed ? 'scale(0.92)' : 'scale(1)')}
          transition={`transform ${SRT_MS}ms ease`}
          style={{
            transitionDelay: '200ms',
          }}
        >
          230ms SRT + 400ms delay (200ms each way)
        </MicroInteraction>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `No animation or debounce should be less than 230 ms. Otherwise, no animation or debounce is really required.
Micro-interactions should have a precise duration of 230 ms. No explicit animation delay must be added (i.e. 0 ms delay) but a 40 ms buffer should be considered for performance issues.`,
      },
    },
  },
};

export const MicroInteractionChaining: StoryObj = {
  render: () => {
    const [transitionEnded, setTransitionEnded] = useState(false);
    return (
      <Box display='flex' flexDirection='row' alignItems='center'>
        <MicroInteraction
          wrong
          onTransitionEnd={() => setTransitionEnded(true)}
          transformFn={(isPressed) => {
            if (!isPressed && transitionEnded) {
              setTransitionEnded(false);
            }
            return isPressed
              ? `scale(1.2) ${transitionEnded ? 'translateY(10px)' : ''}`
              : 'scale(1)';
          }}
          transition={`transform ${SRT_MS}ms ease`}
        >
          Translate after scale
        </MicroInteraction>
        <MicroInteraction
          transformFn={(isPressed) =>
            isPressed ? 'scale(1.2) translateY(10px)' : 'scale(1)'
          }
          transition={`transform ${SRT_MS}ms ease`}
        >
          Scale and translate
        </MicroInteraction>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Micro-interactions should NOT be sequentally chained. If multiple micro-interactions are required, they should be combined into a single animation with a duration of 230 ms.`,
      },
    },
  },
};

// Base component for stories
const CircleWithContainer = ({
  animationDelay,
  style,
  containerMinWidth,
  ...props
}: BoxProps & { animationDelay?: string; containerMinWidth?: number }) => (
  <Box
    width={1000}
    height={props.height}
    display='flex'
    flexDirection='row'
    alignItems='start'
    justifyContent='start'
    position='relative'
  >
    <style>
      {`
        @keyframes moveMyCircle${props.width} {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(${1000 - Number(props.width)}px);
          }
        }
        .moveMyCircle${props.width} {
          animation-name: moveMyCircle${props.width};
          animation-duration: 0.5s;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: linear;
        }
      `}
    </style>
    <Circle
      animationDelay={animationDelay}
      position='absolute'
      className={`moveMyCircle${props.width}`}
      style={style}
      {...props}
    />
  </Box>
);

export const DifferentSizesMovingToTheEdgeOfTheContainer: StoryObj = {
  render: () => {
    return (
      <>
        <PropsVariationSection
          component={CircleWithContainer}
          common={{}}
          xAxis={{
            '0.5s': {},
          }}
          yAxis={{
            tiny: {
              width: 10,
              height: 10,
            },
            small: {
              width: 40,
              height: 40,
            },
            medium: {
              width: 250,
              height: 250,
            },
            large: {
              width: 600,
              height: 600,
            },
          }}
        />
      </>
    );
  },
};

export const DebouncingInstantaneousInteractions: StoryObj = {
  render: () => {
    const [text, setText] = useState('Hello');
    const [result, setResult] = useState<string[]>([]);
    const debouncedText = useDebouncedValue(text, CRT_MS);

    useEffect(() => {
      setResult(() =>
        Array.from({ length: 20 }, (_, index) => `${debouncedText} ${index}`),
      );
    }, [debouncedText]);
    return (
      <Box display='flex' flexDirection='column' alignItems='center'>
        <TextInput
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        {result.map((item) => (
          <Box key={item}>{item}</Box>
        ))}
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Debounces should be fixed at 400 ms.`,
      },
    },
  },
};

export const DebouncingLatentInteractions: StoryObj = {
  render: () => {
    const [text, setText] = useState('Hello');
    const [result, setResult] = useState<string[]>([]);
    const [isDirty, setIsDirty] = useState(false);
    const debouncedText = useDebouncedValue(text, CRT_MS);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setResult(() =>
          Array.from({ length: 20 }, (_, index) => `${debouncedText} ${index}`),
        );
        setIsDirty(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }, [debouncedText]);
    return (
      <Box
        display='flex'
        flexDirection='column'
        alignItems='stretch'
        width={500}
      >
        <style>
          {`
            .fadeIn {
              height: 28px;
              transition: height ${SRT_MS}ms ease;
            }
            .fadeOut {
              height: 0px;
            }
          `}
        </style>
        <TextInput
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setIsDirty(true);
            return setText(e.target.value);
          }}
        />
        <Box width='100%' className={isDirty ? 'fadeIn' : 'fadeOut'}>
          {isDirty && <Skeleton width='100%' height={28} />}
        </Box>
        {result.map((item) => (
          <Box key={item}>{item}</Box>
        ))}
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `If there is an accumulation of the input debounce and the network latency, a feedback animation should be triggered.`,
      },
    },
  },
};
