import React, { useState } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Box, Button } from '@quarkly/widgets';
const Button1 = atomize(Button)`
  clip-path: polygon(0 0, 0 calc(100% - .84em), .84em 100%, 100% 100%, 100% 0);
`;
const overrides = {
	'ButtonForm Wrapper': {
		kind: 'Box'
	},
	'ButtonForm Button': {
		kind: 'Button'
	}
};

const ButtonForm = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides, {});
	return <Box
		margin-bottom="0em"
		transition="margin-bottom .3s ease"
		hover-margin-bottom=".25em"
		justify-content="flex-end"
		display="flex"
		{...override('ButtonForm Wrapper')}
		{...rest}
	>
		      
		<Button1
			type="submit"
			padding="1em 1.25em 1em 1.5em"
			font="--button"
			font-weight="700"
			text-decoration="none"
			color="--textDark"
			background="--color-secondary2"
			transform="translateY(0)"
			display="inline-block"
			{...override('ButtonForm Button')}
		>
			        
			{override('ButtonForm Button').children || 'SEND'}
			      
		</Button1>
		    
	</Box>;
};

export default Object.assign(ButtonForm, {
	overrides
});
;