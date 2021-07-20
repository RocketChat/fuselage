import { RefObject } from 'react';
import { Box } from '@rocket.chat/fuselage';

export interface DomObjects {
  parentRef: RefObject<typeof Box & HTMLDivElement> | null;
  imageRef: RefObject<typeof Box & HTMLImageElement> | null;
}

export type Dimension = {
  height: number;
  width: number;
};

export type Dimensions = {
  previewDimensions: Dimension;
  parentDimensions: Dimension;
  originalImageDimensions: Dimension;
  croppingLayerDimnesions: Dimension;
};

export type State = {
  dimensions: Dimensions;
  domObjects: DomObjects;
  modifierSelected: string | null;
  imageSrc: {
    current: string | null;
    original: string | null;
  };
};

export const initialState: State = {
  dimensions: {
    previewDimensions: {
      height: 0,
      width: 0,
    },
    parentDimensions: {
      height: 0,
      width: 0,
    },
    originalImageDimensions: {
      width: 0,
      height: 0,
    },
    croppingLayerDimnesions: {
      width: 0,
      height: 0,
    },
  },
  domObjects: {
    parentRef: null,
    imageRef: null,
  },
  modifierSelected: null,
  imageSrc: {
    current: null,
    original: null,
  },
};
