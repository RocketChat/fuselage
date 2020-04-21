/**
 * @jest-environment node
 */

import { runHooksOnServer } from '../.jest/helpers';
import { useClassName } from '../src';

describe('useClassName hook on server', () => {
  const componentClassName = 'component';

  it('accepts only the component className', () => {
    const newClassName = runHooksOnServer(() => useClassName(componentClassName));
    expect(newClassName).toEqual(componentClassName);
  });

  it('composes with a true-valued boolean modifier', () => {
    const newClassName = runHooksOnServer(() => useClassName(componentClassName, { a: true }));
    expect(newClassName).toEqual(`${ componentClassName } ${ componentClassName }--a`);
  });

  it('does not compose with a false-valued boolean modifier', () => {
    const newClassName = runHooksOnServer(() => useClassName(componentClassName, { a: false }));
    expect(newClassName).toEqual(componentClassName);
  });

  it('composes with a non-boolean modifier', () => {
    const newClassName = runHooksOnServer(() => useClassName(componentClassName, { a: 'b' }));
    expect(newClassName).toEqual(`${ componentClassName } ${ componentClassName }--a-b`);
  });

  it('appends an arbitrary amount of additional classNames', () => {
    const classNames = new Array(5).fill(undefined).map((i) => `class-${ i }`);
    const newClassName = runHooksOnServer(() => useClassName(componentClassName, {}, ...classNames));
    expect(newClassName).toEqual(`${ componentClassName } ${ classNames.join(' ') }`);
  });

  it('formats a modifier name from camelCase to kebab-case', () => {
    const newClassName = runHooksOnServer(() => useClassName(componentClassName, { camelCaseModifier: true }));
    expect(newClassName).toEqual(`${ componentClassName } ${ componentClassName }--camel-case-modifier`);
  });

  it('formats a modifier value from camelCase to kebab-case', () => {
    const newClassName = runHooksOnServer(() => useClassName(componentClassName, { a: 'camelCaseValue' }));
    expect(newClassName).toEqual(`${ componentClassName } ${ componentClassName }--a-camel-case-value`);
  });
});
