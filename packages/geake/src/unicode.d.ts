declare module 'unicode/category/*' {
  const category: {
    [codePoint: number]: {
      value: string;
      name: string;
      category: string;
      class: string;
      bidirectional_category: string;
      mapping: string;
      decimal_digit_value: string;
      digit_value: string;
      numeric_value: string;
      mirrored: string;
      unicode_name: string;
      comment: string;
      uppercase_mapping: string;
      lowercase_mapping: string;
      titlecase_mapping: string;
      symbol: string;
    };
  };

  export = category;
}
