import {
  TextInput as TextInputComponent,
  Select as SelectComponent,
  CheckBox as CheckBoxComponent,
  ToggleSwitch as ToggleSwitchComponent,
  RadioButton as RadioButtonComponent,
  EmailInput as EmailInputComponent,
  PasswordInput as PasswordInputComponent,
  SearchInput as SearchInputComponent,
  TextAreaInput as TextAreaComponent,
  NumberInput as NumberInputComponent,
  TelephoneInput as TelephoneInputComponent,
  UrlInput as UrlInputComponent,
  MultiSelect as MultiSelectComponent,
  MultiSelectFiltered as MultiSelectFilteredComponent,
  Slider as SliderComponent,
} from '@rocket.chat/fuselage';

import {
  withLabelId,
  withAriaLabelledBy,
  withAriaLabelledByAndId,
  withVisuallyHiddenLabel,
} from './withLabelHelpers';

// TODO: Some inputs are still not supported due to requiring a different a11y approach

// with id
export const TextInput = withLabelId(TextInputComponent);
export const EmailInput = withLabelId(EmailInputComponent);
export const PasswordInput = withLabelId(PasswordInputComponent);
export const SearchInput = withLabelId(SearchInputComponent);
export const TextAreaInput = withLabelId(TextAreaComponent);
export const TelephoneInput = withLabelId(TelephoneInputComponent);
export const NumberInput = withLabelId(NumberInputComponent);
export const UrlInput = withLabelId(UrlInputComponent);

// with aria-labelledby
export const Select = withAriaLabelledBy(SelectComponent);

// with aria-labelledby + id for aria-controls
export const MultiSelect = withAriaLabelledByAndId(MultiSelectComponent);
export const MultiSelectFiltered = withAriaLabelledByAndId(
  MultiSelectFilteredComponent,
);
export const Slider = withAriaLabelledBy(
  SliderComponent,
) as typeof SliderComponent;

// with visually hidden label
export const CheckBox = withVisuallyHiddenLabel(CheckBoxComponent);
export const ToggleSwitch = withVisuallyHiddenLabel(ToggleSwitchComponent);
export const RadioButton = withVisuallyHiddenLabel(RadioButtonComponent);
