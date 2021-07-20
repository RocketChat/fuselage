import { FC, createContext, useReducer, Reducer, useEffect } from 'react';
import { initialState, State } from './state';
import { Actions, ActionType } from './action';

export const ManipulationContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Actions>;
}>({ state: initialState, dispatch: () => undefined });

const reducer: Reducer<State, Actions> = (
  state = initialState,
  { type, payload }: any
) => {
  // console.log(type, payload, state);
  switch (type) {
    case ActionType.SET_PREVIEW_DIMENSIONS:
      return {
        ...state,
        dimensions: {
          ...state.dimensions,
          previewDimensions: payload,
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
    default:
      return state;
  }
};

const ManipulationContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const { width, height } = state.dimensions?.previewDimensions;
    dispatch({
      type: ActionType.SET_CROPPING_LAYER_DIMENSIONS,
      payload: {
        height: height - height * 0.1,
        width: width - width * 0.1,
      },
    });
  }, [state.dimensions.previewDimensions]);

  return (
    <ManipulationContext.Provider value={{ state, dispatch }}>
      {children}
    </ManipulationContext.Provider>
  );
};

export default ManipulationContextProvider;
