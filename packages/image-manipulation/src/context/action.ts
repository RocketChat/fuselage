import { Box } from '@rocket.chat/fuselage';
import { RefObject } from 'react';

import { Dimension } from './state';

export enum ActionType {
  SET_PREVIEW_DIMENSIONS = 'SET_PREVIEW_DIMENSIONS',
  SET_CROP_DIMENSIONS = 'SET_CROP_DIMENSIONS',
  SET_PARENT_DIMENSIONS = 'SET_PARENT_DIMENSIONS',
  SET_ORIGINAL_IMAGE_DIMENSIONS = 'SET_ORIGINAL_IMAGE_DIMENSIONS',
  SET_CROPPING_LAYER_DIMENSIONS = 'SET_CROPPING_LAYER_DIMENSIONS',
  SET_PARENT_REF = 'SET_PARENT_REF',
  SET_IMAGE_REF = 'SET_IMAGE_REF',
  SET_ORIGINAL_IMAGE_SRC = 'SET_ORIGINAL_IMAGE_SRC',
  SET_CURRENT_IMAGE_SRC = 'SET_CURRENT_IMAGE_SRC',
  SET_IMAGE_SRC = 'SET_IMAGE_SRC',
  SET_MODIFIER = 'SET_MODIFIER',
  SET_CONTROL = 'SET_CONTROL',
  SET_ACTION_SELECTED = 'SET_ACTION_SELECTED',
}
``
export interface SetPreviewDimensions {
  type: ActionType.SET_PREVIEW_DIMENSIONS;
  payload: Dimension;
}

export interface SetCropDimensions {
  type: ActionType.SET_CROP_DIMENSIONS;
  payload: Dimension;
}

export interface SetParentDimensions {
  type: ActionType.SET_PARENT_DIMENSIONS;
  payload: Dimension;
}

export interface SetOriginalImageDimensions {
  type: ActionType.SET_ORIGINAL_IMAGE_DIMENSIONS;
  payload: Dimension;
}

export interface SetCroppingLayerDimensions {
  type: ActionType.SET_CROPPING_LAYER_DIMENSIONS;
  payload: Dimension;
}

export interface ParentRef {
  type: ActionType.SET_PARENT_REF;
  payload: RefObject<typeof Box & HTMLDivElement>;
}

export interface ImageRef {
  type: ActionType.SET_IMAGE_REF;
  payload: React.RefObject<Element>;
}

export interface OriginalImageSrc {
  type: ActionType.SET_ORIGINAL_IMAGE_SRC;
  payload: string | null;
}

export interface CurrentImageSrc {
  type: ActionType.SET_CURRENT_IMAGE_SRC;
  payload: string | null;
}
export interface ImageSrc {
  type: ActionType.SET_IMAGE_SRC;
  payload: {
    current: string;
    original: string;
  };
}

export interface SetModifier {
  type: ActionType.SET_MODIFIER;
  payload: string | null;
}

export interface SetFunction {
  type: ActionType.SET_CONTROL;
  payload: string | null;
}

export interface SetActionSelcted {
  type: ActionType.SET_ACTION_SELECTED;
  payload: string | null;
}

export type Actions =
  | SetPreviewDimensions
  | SetCropDimensions
  | SetParentDimensions
  | SetOriginalImageDimensions
  | SetCroppingLayerDimensions
  | ParentRef
  | ImageRef
  | OriginalImageSrc
  | CurrentImageSrc
  | ImageSrc
  | SetModifier
  | SetFunction
  | SetActionSelcted;
