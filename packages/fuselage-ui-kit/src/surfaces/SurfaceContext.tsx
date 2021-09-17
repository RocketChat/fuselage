import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';

type SurfaceType = 'banner' | 'message' | 'modal';

type SurfaceContextValue = SurfaceType | null;

export const SurfaceContext = createContext<SurfaceContextValue>(null);

type SurfaceProps = {
  children: ReactNode;
  type: SurfaceType;
};

export const Surface = ({ children, type }: SurfaceProps): ReactElement => (
  <SurfaceContext.Provider value={type}>{children}</SurfaceContext.Provider>
);

export const useSurfaceType = (): SurfaceType => {
  const type = useContext(SurfaceContext);

  if (type === null) {
    throw new Error('null surface type (missing SurfaceContext?)');
  }

  return type;
};
