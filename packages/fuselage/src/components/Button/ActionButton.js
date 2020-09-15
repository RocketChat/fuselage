import React from 'react';

import { Button } from '.';
import { Icon } from '../Icon';

export const ActionButton = ({ icon, ...props }) => <Button {...props} square small flexShrink={0}><Icon name={icon} size='x20'/></Button>;
