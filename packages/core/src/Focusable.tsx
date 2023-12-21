import {
  Stack,
  styled,
} from '@tamagui/web'


export const Focusable = styled(Stack, {


  name: 'Focusable',

  acceptsClassName: true,
  userSelect: 'none',
  cursor: 'pointer',

  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'transparent',
  alignItems: 'center',
  flexDirection: 'row',
  pressStyle: {
    transform: `translateY(1px);`
  },
  focusStyle: {
    shadowColor: '0 0 0 2px var(--rcx-button-primary-focus-shadow-color, var(--rcx-color-shadow-highlight, var(--rcx-color-blue-200, #D1EBFE)))',
  },

  variants: {

    primary: (value, { props }) => {
      switch (true) {
        case value && !props.disabled: {
          return {

            backgroundColor: "$backgroundPrimaryDefault",
            borderColor: "$primary_default",
            color: "$fontOnPrimary",

            hoverStyle: {
              backgroundColor: "$backgroundPrimaryHover",
              borderColor: "$primary_hover",
            },

            pressStyle: {
              backgroundColor: "$backgroundPrimaryPress",
              borderColor: "$primary_press",
            },
            focusStyle: {
              backgroundColor: "$backgroundPrimaryFocus",
              borderColor: "$primary_focus",
            },
          }
        }
        case value && props.disabled: {
          return {
            backgroundColor: "$backgroundPrimaryDisabled",
            borderColor: "$primary_disabled",
            color: "$fontOnPrimaryDisabled",
          }
        }
      }

    },

    secondary: (value, { props }) => {
      switch (true) {
        case value && !props.disabled: {
          return {

            backgroundColor: "$backgroundSecondaryDefault",
            borderColor: "$secondary_default",
            color: "$fontOnSecondary",

            hoverStyle: {
              backgroundColor: "$backgroundSecondaryHover",
              borderColor: "$secondary_hover",
            },

            pressStyle: {
              backgroundColor: "$backgroundSecondaryPress",
              borderColor: "$secondary_press",
            },
            focusStyle: {
              backgroundColor: "$backgroundSecondaryFocus",
              borderColor: "$secondary_focus",
            },
          }
        }
        case value && props.disabled: {
          return {
            backgroundColor: "$backgroundSecondaryDisabled",
            borderColor: "$secondary_disabled",
            color: "$fontOnSecondaryDisabled",
          }
        }
      }
    },
    danger: (value, { props }) => {
      switch (true) {
        case value && !props.secondary: {
          return {

            backgroundColor: "$backgroundDangerDefault",
            borderColor: "$danger_default",
            color: "$fontOnDanger",

            hoverStyle: {
              backgroundColor: "$backgroundDangerHover",
              borderColor: "$danger_hover",
            },

            pressStyle: {
              backgroundColor: "$backgroundDangerPress",
              borderColor: "$danger_press",
            },
            focusStyle: {
              backgroundColor: "$backgroundDangerFocus",
              borderColor: "$danger_focus",
            },
          }
        }
        case value && props.secondary: {
          return {

            backgroundColor: "$backgroundSecondaryDangerDefault",
            borderColor: "$secondary_danger_default",
            color: "$on_secondary_danger",

            hoverStyle: {
              backgroundColor: "$backgroundSecondaryDangerHover",
              borderColor: "$secondary_danger_hover",
            },

            pressStyle: {
              backgroundColor: "$backgroundSecondaryDangerPress",
              borderColor: "$secondary_danger_press",
            },
            focusStyle: {
              backgroundColor: "$backgroundSecondaryDangerFocus",
              borderColor: "$secondary_danger_focus",
            },
          }
        }
      }
    },
    warning: (value, { props }) => {
      switch (true) {
        case value && !props.secondary: {
          return {

            backgroundColor: "$backgroundWarningDefault",
            borderColor: "$warning_default",
            color: "$fontOnWarning",

            hoverStyle: {
              backgroundColor: "$backgroundWarningHover",
              borderColor: "$warning_hover",
            },

            pressStyle: {
              backgroundColor: "$backgroundWarningPress",
              borderColor: "$warning_press",
            },
            focusStyle: {
              backgroundColor: "$backgroundWarningFocus",
              borderColor: "$warning_focus",
            },
          }
        }
        case value && props.secondary: {
          return {

            backgroundColor: "$backgroundSecondaryWarningDefault",
            borderColor: "$secondary_warning_default",
            color: "$on_secondary_warning",

            hoverStyle: {
              backgroundColor: "$backgroundSecondaryWarningHover",
              borderColor: "$secondary_warning_hover",
            },

            pressStyle: {
              backgroundColor: "$backgroundSecondaryWarningPress",
              borderColor: "$secondary_warning_press",
            },
            focusStyle: {
              backgroundColor: "$backgroundSecondaryWarningFocus",
              borderColor: "$secondary_warning_focus",
            },
          }
        }
      }
    },
    success: (value, { props }) => {
      switch (true) {
        case value && !props.secondary: {
          return {

            backgroundColor: "$backgroundSuccessDefault",
            borderColor: "$success_default",
            color: "$fontOnSuccess",

            hoverStyle: {
              backgroundColor: "$backgroundSuccessHover",
              borderColor: "$success_hover",
            },

            pressStyle: {
              backgroundColor: "$backgroundSuccessPress",
              borderColor: "$success_press",
            },
            focusStyle: {
              backgroundColor: "$backgroundSuccessFocus",
              borderColor: "$success_focus",
            },
          }
        }
        case value && props.secondary: {
          return {

            backgroundColor: "$backgroundSecondarySuccessDefault",
            borderColor: "$secondary_success_default",
            color: "$on_secondary_success",

            hoverStyle: {
              backgroundColor: "$backgroundSecondarySuccessHover",
              borderColor: "$secondary_success_hover",
            },

            pressStyle: {
              backgroundColor: "$backgroundSecondarySuccessPress",
              borderColor: "$secondary_success_press",
            },
            focusStyle: {
              backgroundColor: "$backgroundSecondarySuccessFocus",
              borderColor: "$secondary_success_focus",
            },
          }
        }
      }
    },

    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
        disabled: true,
        focusable: undefined,
      }
    }
  } as const,
})
