import { Stack, GetProps } from 'tamagui'

export type WrapperProps = GetProps<typeof Stack> & {
  disabled?: boolean
}

export const Wrapper = ({ disabled, ...props }: WrapperProps) => (
  <Stack
    ai="center"
    px="$3"
    py="$2"
    bc="transparent"
    br="$4"
    o={disabled ? 0.6 : 1}
    pointerEvents={disabled ? "none" : "auto"}
    {...props}
  />
)