import { TextEncoder } from 'node:util';

import { configure } from '@testing-library/react';

configure({ reactStrictMode: true });

global.TextEncoder = TextEncoder;
