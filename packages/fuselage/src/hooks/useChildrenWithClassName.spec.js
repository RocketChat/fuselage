import React from 'react';

import { testHook } from '../helpers/jest';
import { useChildrenWithClassName } from './useChildrenWithClassName';

describe('useChildrenWithClassName hook', () => {
  const dummyClassName = 'dummy';

  it('supports null as children', () => {
    const children = null;
    const patchedChildren = testHook(() => useChildrenWithClassName(dummyClassName, children));
    expect(patchedChildren).toEqual([]);
  });

  it('supports a string as children', () => {
    const children = 'a';
    const patchedChildren = testHook(() => useChildrenWithClassName(dummyClassName, children));
    expect(patchedChildren).toEqual([children]);
  });

  it('supports a string[] as children', () => {
    const children = ['a', 'b', 'c'];
    const patchedChildren = testHook(() => useChildrenWithClassName(dummyClassName, children));
    expect(patchedChildren).toEqual([...children]);
  });

  it('supports a empty fragment as children', () => {
    const children = <></>;
    const patchedChildren = testHook(() => useChildrenWithClassName(dummyClassName, children));
    expect(patchedChildren).toEqual([]);
  });

  it('adds className to one child', () => {
    const children = <div />;
    const patchedChildren = testHook(() => useChildrenWithClassName(dummyClassName, children));
    expect(patchedChildren.length).toEqual(1);
    expect(patchedChildren[0].props.className).toEqual(dummyClassName);
  });

  it('patches className on one child', () => {
    const children = <div className='a' />;
    const patchedChildren = testHook(() => useChildrenWithClassName(dummyClassName, children));
    expect(patchedChildren.length).toEqual(1);
    expect(patchedChildren[0].props.className).toEqual(`a ${ dummyClassName }`);
  });

  it('adds className to children inside a fragment', () => {
    const children = <>
      <div />
      <div />
      <div />
    </>;
    const patchedChildren = testHook(() => useChildrenWithClassName(dummyClassName, children));
    expect(patchedChildren.length).toEqual(3);
    expect(patchedChildren[0].props.className).toEqual(dummyClassName);
    expect(patchedChildren[1].props.className).toEqual(dummyClassName);
    expect(patchedChildren[2].props.className).toEqual(dummyClassName);
  });

  it('patches className on children inside a fragment', () => {
    const children = <>
      <div className='a' />
      <div className='b' />
      <div className='c' />
    </>;
    const patchedChildren = testHook(() => useChildrenWithClassName(dummyClassName, children));
    expect(patchedChildren.length).toEqual(3);
    expect(patchedChildren[0].props.className).toEqual(`a ${ dummyClassName }`);
    expect(patchedChildren[1].props.className).toEqual(`b ${ dummyClassName }`);
    expect(patchedChildren[2].props.className).toEqual(`c ${ dummyClassName }`);
  });

  it('adds className to a child inside nested fragments', () => {
    const children = <>
      <>
        <>
          <div />
        </>
      </>
    </>;
    const patchedChildren = testHook(() => useChildrenWithClassName(dummyClassName, children));
    expect(patchedChildren.length).toEqual(1);
    expect(patchedChildren[0].props.className).toEqual(dummyClassName);
  });

  it('patches className on a child inside nested fragments', () => {
    const children = <>
      <>
        <>
          <div className='a' />
        </>
      </>
    </>;
    const patchedChildren = testHook(() => useChildrenWithClassName(dummyClassName, children));
    expect(patchedChildren.length).toEqual(1);
    expect(patchedChildren[0].props.className).toEqual(`a ${ dummyClassName }`);
  });
});
