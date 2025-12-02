import type { Meta } from '@storybook/react-webpack5';

import { Tile } from '../Tile';

import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';

export default {
  title: 'Layout/Flex',
  subcomponents: {
    FlexContainer,
    FlexItem,
  },
} satisfies Meta;

export const Example = () => (
  <FlexContainer>
    <Tile>
      {Array.from({ length: 3 }, (_, i) => (
        <FlexItem key={i}>
          <Tile>#{i + 1}</Tile>
        </FlexItem>
      ))}
    </Tile>
  </FlexContainer>
);

export const Direction = () => (
  <FlexContainer direction='row-reverse'>
    <Tile>
      {Array.from({ length: 3 }, (_, i) => (
        <FlexItem key={i}>
          <Tile>#{i + 1}</Tile>
        </FlexItem>
      ))}
    </Tile>
  </FlexContainer>
);

export const Wrap = () => (
  <FlexContainer wrap='wrap'>
    <Tile>
      {Array.from({ length: 12 }, (_, i) => (
        <FlexItem key={i}>
          <Tile>#{i + 1}</Tile>
        </FlexItem>
      ))}
    </Tile>
  </FlexContainer>
);

export const JustifyContent = () => (
  <FlexContainer justifyContent='space-around'>
    <Tile>
      {Array.from({ length: 3 }, (_, i) => (
        <FlexItem key={i}>
          <Tile>#{i + 1}</Tile>
        </FlexItem>
      ))}
    </Tile>
  </FlexContainer>
);

export const AlignItems = () => (
  <FlexContainer alignItems='end'>
    <Tile>
      {Array.from({ length: 3 }, (_, i) => (
        <FlexItem key={i}>
          <Tile style={{ height: i * 100 }}>#{i + 1}</Tile>
        </FlexItem>
      ))}
    </Tile>
  </FlexContainer>
);

export const AlignContent = () => (
  <FlexContainer wrap='wrap' alignContent='end'>
    <Tile style={{ minHeight: 400 }}>
      {Array.from({ length: 12 }, (_, i) => (
        <FlexItem key={i}>
          <Tile>#{i + 1}</Tile>
        </FlexItem>
      ))}
    </Tile>
  </FlexContainer>
);

export const Order = () => (
  <FlexContainer>
    <Tile>
      <FlexItem>
        <Tile>#1</Tile>
      </FlexItem>
      <FlexItem order={1}>
        <Tile>#2</Tile>
      </FlexItem>
      <FlexItem>
        <Tile>#3</Tile>
      </FlexItem>
    </Tile>
  </FlexContainer>
);

export const Grow = () => (
  <FlexContainer>
    <Tile>
      <FlexItem>
        <Tile>#1</Tile>
      </FlexItem>
      <FlexItem grow={1}>
        <Tile>#2</Tile>
      </FlexItem>
      <FlexItem>
        <Tile>#3</Tile>
      </FlexItem>
    </Tile>
  </FlexContainer>
);

export const Shrink = () => (
  <FlexContainer>
    <Tile>
      <FlexItem>
        <Tile>#1</Tile>
      </FlexItem>
      <FlexItem shrink={1}>
        <Tile width='full'>#2</Tile>
      </FlexItem>
      <FlexItem>
        <Tile>#3</Tile>
      </FlexItem>
    </Tile>
  </FlexContainer>
);

export const Basis = () => (
  <FlexContainer>
    <Tile>
      <FlexItem>
        <Tile>#1</Tile>
      </FlexItem>
      <FlexItem basis='400px'>
        <Tile>#2</Tile>
      </FlexItem>
      <FlexItem>
        <Tile>#3</Tile>
      </FlexItem>
    </Tile>
  </FlexContainer>
);

export const Align = () => (
  <FlexContainer alignItems='center'>
    <Tile style={{ minHeight: 400 }}>
      <FlexItem>
        <Tile>#1</Tile>
      </FlexItem>
      <FlexItem align='end'>
        <Tile>#2</Tile>
      </FlexItem>
      <FlexItem>
        <Tile>#3</Tile>
      </FlexItem>
    </Tile>
  </FlexContainer>
);
