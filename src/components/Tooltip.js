import React from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Text } from '@quarkly/widgets';
const Tooltip = atomize(Text)`
  clip-path: polygon(.2em 0, 100% 0, 100% 100%, 0 100%, 0 .2em);
`;
const overrides = {
	'Text': {
		kind: 'Text'
	}
};

const Tooltip1 = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides, {});
	return <Tooltip
		padding=".1em .25em .15em .45em"
		min-height="initial"
		font="--tooltip"
		letter-spacing="-4%"
		text-decoration="none"
		color="--textLight"
		background="--color-primary"
		display="inline-block"
		{...override('Text')}
		{...rest}
	>
		      
		{override('Text').children || 'Some Text'}
	</Tooltip>;
};

export default Object.assign(Tooltip1, {
	overrides
});
;