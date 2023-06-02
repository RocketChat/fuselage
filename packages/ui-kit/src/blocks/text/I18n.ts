export type I18n = {
  type: 'i18n';
  key: string;
  args?: { [key: string]: string | number };
};
