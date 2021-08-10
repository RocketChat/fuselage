import { Box } from '@rocket.chat/fuselage';
import { RefObject } from 'react';

export interface DomObjects {
  parentRef: RefObject<typeof Box & HTMLDivElement> | null;
  imageRef: React.RefObject<Element> | null;
}

export type Dimension = {
  height: number;
  width: number;
};

export type Dimensions = {
  previewDimensions: Dimension;
  cropDimensions: Dimension;
  parentDimensions: Dimension;
  originalImageDimensions: Dimension;
  croppingLayerDimnesions: Dimension;
};

export type State = {
  dimensions: Dimensions;
  domObjects: DomObjects;
  modifierSelected: string | null;
  imageSrc: {
    current: string;
    original: string;
  };
  actionSelected: string | null;
};

export const initialState: State = {
  dimensions: {
    previewDimensions: {
      height: 0,
      width: 0,
    },
    cropDimensions: {
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
    current: '',
    original: '',
  },
  actionSelected: null,
};
