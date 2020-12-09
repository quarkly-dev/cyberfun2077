import React, { useState } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Box, Link } from '@quarkly/widgets';
const Button = atomize(Link)`
  clip-path: polygon(0 0, 0 calc(100% - .84em), .84em 100%, 100% 100%, 100% 0);
`;
const overrides = {
	'ButtonOrder Wrapper': {
		kind: 'Box'
	},
	'ButtonOrder Link': {
		kind: 'Link'
	}
};

const ButtonOrder = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides, {});
	return <Box
		margin-bottom="0em"
		transition="margin-bottom .3s ease"
		hover-margin-bottom=".25em"
		{...override('ButtonOrder Wrapper')}
		{...rest}
	>
		      
		<Button
			href="https://www.cyberpunk.net/us/en/pre-order"
			padding="1em 1.9em 1em 2.4em"
			font="--button"
			text-decoration="none"
			color="--textLight"
			background="--color-primary"
			transform="translateY(0)"
			display="inline-block"
			{...override('ButtonOrder Link')}
		>
			        
			{override('ButtonOrder Link').children || 'PRE-ORDER_'}
			      
		</Button>
		    
	</Box>;
};

export default Object.assign(ButtonOrder, {
	overrides
});
;