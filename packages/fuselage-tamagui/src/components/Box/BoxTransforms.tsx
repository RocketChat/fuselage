import { createContext, useContext } from 'react'

type BoxTransformFn = (props: Record<string, any>) => Record<string, any>

export const BoxTransforms = createContext<BoxTransformFn | null>(null)

export const useBoxTransform = () => useContext(BoxTransforms)