import { action } from '@storybook/addon-actions';
import { countries } from 'countries-list';
import type { Validate } from 'react-hook-form';

export const logSubmit =
  <T extends (...args: any[]) => any>(onSubmit: T) =>
  (...args: Parameters<T>): ReturnType<T> => {
    action('submit')(...args);
    return onSubmit(...args);
  };

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const simulateNetworkDelay = () => delay(3000 * Math.random());

const fetchMock =
  <T extends (...args: any[]) => any>(endpoint: string, handler: T) =>
  async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    action(`fetch(${endpoint})`)(...args);
    await simulateNetworkDelay();
    return handler(...args);
  };

export const validateUsername = fetchMock(
  '/username/validate',
  (username: string) => {
    if (username === 'admin') {
      return `Username "${username}" is not available`;
    }

    return true;
  }
);

export const validateEmail = fetchMock('/email/validate', (email: string) => {
  if (email === 'admin@rocket.chat') {
    return `Email "${email}" is already in use`;
  }

  return true;
});

export const validatePassword: Validate<string> = (password: string) => {
  if (password.length < 6) {
    return `Password is too short`;
  }

  return true;
};

export const organizationTypes: [string, string][] = [
  ['community', 'Community'],
  ['enterprise', 'Enterprise'],
  ['government', 'Government'],
  ['nonprofit', 'Nonprofit'],
];

export const organizationIndustryOptions: [string, string][] = [
  ['aerospaceDefense', 'Aerospace and Defense'],
  ['blockchain', 'Blockchain'],
  ['consulting', 'Consulting'],
  ['consumerGoods', 'Consumer Packaged Goods'],
  ['contactCenter', 'Contact Center'],
  ['education', 'Education'],
  ['entertainment', 'Entertainment'],
  ['financialServices', 'Financial Services'],
  ['gaming', 'Gaming'],
  ['healthcare', 'Healthcare'],
  ['hospitalityBusinness', 'Hospitality Businness'],
  ['insurance', 'Insurance'],
  ['itSecurity', 'IT Security'],
  ['logistics', 'Logistics'],
  ['manufacturing', 'Manufacturing'],
  ['media', 'Media'],
  ['pharmaceutical', 'Pharmaceutical'],
  ['realEstate', 'Real Estate'],
  ['religious', 'Religious'],
  ['retail', 'Retail'],
  ['socialNetwork', 'Social Network'],
  ['technologyProvider', 'Technology Provider'],
  ['technologyServices', 'Technology Services'],
  ['telecom', 'Telecom'],
  ['utilities', 'Utilities'],
  ['other', 'Other'],
];

export const organizationSizeOptions: [string, string][] = [
  ['0', '1-10 people'],
  ['1', '11-50 people'],
  ['2', '51-100 people'],
  ['3', '101-250 people'],
  ['4', '251-500 people'],
  ['5', '501-1000 people'],
  ['6', '1001-4000 people'],
  ['7', '4000 or more people'],
];

export const countryOptions: [string, string][] = [
  ...Object.entries(countries).map<[string, string]>(([code, { name }]) => [
    code,
    name,
  ]),
  ['worldwide', 'Worldwide'],
];
