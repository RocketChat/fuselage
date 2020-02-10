import React, { forwardRef } from 'react';

import { Button2 } from '.';

export const ButtonPrimary = forwardRef(function ButtonPrimary({ ...props }, ref) {
  return <Button2 ref={ref} {...props} mod-primary/>;
});

export const ButtonPrimaryDanger = forwardRef(function ButtonPrimaryDanger({ ...props }, ref) {
  return <Button2 ref={ref} {...props} mod-primary-danger/>;
});

export const ButtonDanger = forwardRef(function ButtonDanger({ ...props }, ref) {
  return <Button2 ref={ref} {...props} mod-danger/>;
});

export const ButtonGhost = forwardRef(function ButtonGhost({ ...props }, ref) {
  return <Button2 ref={ref} {...props} mod-ghost/>;
});

export const ButtonGhostDanger = forwardRef(function ButtonGhostDanger({ ...props }, ref) {
  return <Button2 ref={ref} {...props} mod-ghost-danger/>;
});

export const ButtonGhostPrimary = forwardRef(function ButtonGhostDanger({ ...props }, ref) {
  return <Button2 ref={ref} {...props} mod-ghost-primary/>;
});

export const ButtonNudeDanger = forwardRef(function ButtonNudeDanger({ ...props }, ref) {
  return <Button2 ref={ref} {...props} mod-nude-danger/>;
});

export const ButtonNudePrimary = forwardRef(function ButtonNudePrimary({ ...props }, ref) {
  return <Button2 ref={ref} {...props} mod-nude-primary/>;
});
