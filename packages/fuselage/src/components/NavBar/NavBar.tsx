import type { HTMLAttributes } from 'react';
import React from 'react';

export const NavBar = (props: HTMLAttributes<HTMLElement>) => (
  <nav className='rcx-navbar' {...props} />
);
