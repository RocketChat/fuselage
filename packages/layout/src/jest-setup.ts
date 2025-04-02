import { TextEncoder } from 'node:util';

import { toHaveNoViolations } from 'jest-axe';

globalThis.TextEncoder = TextEncoder;

expect.extend(toHaveNoViolations);
