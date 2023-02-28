import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

type AddonProps = ComponentProps<typeof Box>;

const Addon = (props: AddonProps) => <Box rcx-autocomplete__addon {...props} />;

export default Addon;
