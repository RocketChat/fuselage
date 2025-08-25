import { Stack, GetProps } from 'tamagui'

export type WrapperProps = GetProps<typeof Stack> & {
  disabled?: boolean
}

export const Wrapper = ({ disabled, ...props }: WrapperProps) => (
  <Stack
    fd="row"
    ai="center"
    jc="flex-start"
    px="$3"
    py="$2"
    bc="$colors-n100"
    borderWidth={1}
    borderColor="$colors-n300"
    br="$4"
    o={disabled ? 0.6 : 1}
    pointerEvents={disabled ? "none" : "auto"}
    position="relative"
    minWidth={144}
    {...props}
  />
)