import { Reducer } from 'react';

import { Actions, ActionType } from './action';
import { initialState, State } from './state';

export const reducer: Reducer<State, Actions> = (
  state = initialState,
  { type, payload }: any
) => {
  console.log(type, payload, state);

  switch (type) {
    case ActionType.SET_PREVIEW_DIMENSIONS:
      return {
        ...state,
        dimensions: {
          ...state.dimensions,
          previewDimensions: payload,
        },
      };
    case ActionType.SET_CROP_DIMENSIONS:
      return {
        ...state,
        dimensions: {
          ...state.dimensions,
          cropDimensions: payload,
        },
      };
    case ActionType.SET_PARENT_DIMENSIONS:
      return {
        ...state,
        dimensions: {
          ...state.dimensions,
          parentDimensions: payload,
        },
      };
    case ActionType.SET_ORIGINAL_IMAGE_DIMENSIONS:
      return {
        ...state,
        dimensions: {
          ...state.dimensions,
          originalImageDimensions: payload,
        },
      };
    case ActionType.SET_CROPPING_LAYER_DIMENSIONS:
      return {
        ...state,
        dimensions: {
          ...state.dimensions,
          croppingLayerDimnesions: payload,
        },
      };
    case ActionType.SET_PARENT_REF:
      return {
        ...state,
        domObjects: {
          ...state.domObjects,
          parentRef: payload,
        },
      };
    case ActionType.SET_IMAGE_REF:
      return {
        ...state,
        domObjects: {
          ...state.domObjects,
          imageRef: payload,
        },
      };
    case ActionType.SET_ORIGINAL_IMAGE_SRC:
      return {
        ...state,
        imageSrc: {
          ...state.imageSrc,
          original: payload,
        },
      };
    case ActionType.SET_CURRENT_IMAGE_SRC:
      return {
        ...state,
        imageSrc: {
          ...state.imageSrc,
          current: payload,
        },
      };
    case ActionType.SET_IMAGE_SRC:
      return {
        ...state,
        imageSrc: payload,
      };
    case ActionType.SET_MODIFIER:
      return {
        ...state,
        modifierSelected: payload,
      };
    case ActionType.SET_CONTROL:
      return {
        ...state,
        functionSelected: payload,
      };
    case ActionType.SET_ACTION_SELECTED:
      return {
        ...state,
        actionSelected: payload,
      };
    default:
      return state;
  }
};
