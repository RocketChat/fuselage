import type { AllHTMLAttributes } from 'react';

export type FuselageBoxHTMLAttributes<T> = Omit<AllHTMLAttributes<T>, 'is'>;
