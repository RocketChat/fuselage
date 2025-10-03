import { TextEncoder } from 'node:util';

import { configure } from '@testing-library/react';

configure({ reactStrictMode: true });

Object.assign(globalThis, { TextEncoder });
