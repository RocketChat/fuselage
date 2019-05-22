import React from 'react';
import centered from '@storybook/addon-centered/react';


export const centeredWithWidth = (width) => (storyFn) => centered(() => (
	<div style={{ width }}>
		{storyFn()}
	</div>
));
