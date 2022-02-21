import React from 'react';

import { Flex, Tile } from '../..';

export const example = () => (
  <Flex.Container>
    <Tile>
      {Array.from({ length: 3 }, (_, i) => (
        <Flex.Item key={i}>
          <Tile>#{i + 1}</Tile>
        </Flex.Item>
      ))}
    </Tile>
  </Flex.Container>
);

export const direction = () => (
  <Flex.Container direction='row-reverse'>
    <Tile>
      {Array.from({ length: 3 }, (_, i) => (
        <Flex.Item key={i}>
          <Tile>#{i + 1}</Tile>
        </Flex.Item>
      ))}
    </Tile>
  </Flex.Container>
);

export const wrap = () => (
  <Flex.Container wrap='wrap'>
    <Tile>
      {Array.from({ length: 12 }, (_, i) => (
        <Flex.Item key={i}>
          <Tile>#{i + 1}</Tile>
        </Flex.Item>
      ))}
    </Tile>
  </Flex.Container>
);

export const justifyContent = () => (
  <Flex.Container justifyContent='space-around'>
    <Tile>
      {Array.from({ length: 3 }, (_, i) => (
        <Flex.Item key={i}>
          <Tile>#{i + 1}</Tile>
        </Flex.Item>
      ))}
    </Tile>
  </Flex.Container>
);

export const alignItems = () => (
  <Flex.Container alignItems='end'>
    <Tile>
      {Array.from({ length: 3 }, (_, i) => (
        <Flex.Item key={i}>
          <Tile style={{ height: i * 100 }}>#{i + 1}</Tile>
        </Flex.Item>
      ))}
    </Tile>
  </Flex.Container>
);

export const alignContent = () => (
  <Flex.Container wrap='wrap' alignContent='end'>
    <Tile style={{ minHeight: 400 }}>
      {Array.from({ length: 12 }, (_, i) => (
        <Flex.Item key={i}>
          <Tile>#{i + 1}</Tile>
        </Flex.Item>
      ))}
    </Tile>
  </Flex.Container>
);

export const order = () => (
  <Flex.Container>
    <Tile>
      <Flex.Item>
        <Tile>#1</Tile>
      </Flex.Item>
      <Flex.Item order={1}>
        <Tile>#2</Tile>
      </Flex.Item>
      <Flex.Item>
        <Tile>#3</Tile>
      </Flex.Item>
    </Tile>
  </Flex.Container>
);

export const grow = () => (
  <Flex.Container>
    <Tile>
      <Flex.Item>
        <Tile>#1</Tile>
      </Flex.Item>
      <Flex.Item grow={1}>
        <Tile>#2</Tile>
      </Flex.Item>
      <Flex.Item>
        <Tile>#3</Tile>
      </Flex.Item>
    </Tile>
  </Flex.Container>
);

export const shrink = () => (
  <Flex.Container>
    <Tile>
      <Flex.Item>
        <Tile>#1</Tile>
      </Flex.Item>
      <Flex.Item shrink={1}>
        <Tile width='full'>#2</Tile>
      </Flex.Item>
      <Flex.Item>
        <Tile>#3</Tile>
      </Flex.Item>
    </Tile>
  </Flex.Container>
);

export const basis = () => (
  <Flex.Container>
    <Tile>
      <Flex.Item>
        <Tile>#1</Tile>
      </Flex.Item>
      <Flex.Item basis='400px'>
        <Tile>#2</Tile>
      </Flex.Item>
      <Flex.Item>
        <Tile>#3</Tile>
      </Flex.Item>
    </Tile>
  </Flex.Container>
);

export const align = () => (
  <Flex.Container alignItems='center'>
    <Tile style={{ minHeight: 400 }}>
      <Flex.Item>
        <Tile>#1</Tile>
      </Flex.Item>
      <Flex.Item align='end'>
        <Tile>#2</Tile>
      </Flex.Item>
      <Flex.Item>
        <Tile>#3</Tile>
      </Flex.Item>
    </Tile>
  </Flex.Container>
);
