import { extractStylingProps } from './stylingProps';

it.each([[{ backgroundColor: 'primary' }, {}]] as const)(
  'should return the correct style for %s',
  (inputProps, expectedProps) => {
    const [outputProps] = extractStylingProps(inputProps);
    expect(outputProps).toStrictEqual(expectedProps);
  }
);
