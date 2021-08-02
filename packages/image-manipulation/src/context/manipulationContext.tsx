import { FC, createContext, useReducer, useEffect } from 'react';

import { Actions, ActionType } from './action';
import { reducer } from './reducer';
import { initialState, State } from './state';

export const ManipulationContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Actions>;
}>({ state: initialState, dispatch: () => undefined });

const ManipulationContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const { width, height } = state.dimensions?.cropDimensions;
    const LAYER_PADDING = 0.1;

    dispatch({
      type: ActionType.SET_CROPPING_LAYER_DIMENSIONS,
      payload: {
        height: height - height * LAYER_PADDING,
        width: width - width * LAYER_PADDING,
      },
    });
  }, [state.dimensions.cropDimensions]);

  return (
    <ManipulationContext.Provider value={{ state, dispatch }}>
      {children}
    </ManipulationContext.Provider>
  );
};

export default ManipulationContextProvider;
