import React, { useState } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Box, Image } from '@quarkly/widgets';
const overrides = {
	'SideMenu': {
		kind: 'Box'
	},
	'Header': {
		kind: 'Box'
	},
	'Header Image': {
		kind: 'Image'
	},
	'Header Line': {
		kind: 'Box'
	},
	'Header Line Image': {
		kind: 'Image'
	},
	'Button Open': {
		kind: 'Box'
	},
	'Button Open Line': {
		kind: 'Box'
	},
	'Button Close': {
		kind: 'Box'
	},
	'Button Close Line': {
		kind: 'Box'
	},
	'Content': {
		kind: 'Box'
	}
};

const SideMenu = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides),
	      [isOpen, setOpen] = useState(false),
	      onOpen = () => setOpen(true),
	      onClose = () => setOpen(false),
	      stateOpen = isOpen ? ':open' : ':closed';

	return <Box {...override('SideMenu')} {...rest}>
		<Box box-sizing="border-box" {...override('Header')}>
			<Image {...override('Header Image')} />
			<Box {...override('Header Line')}>
				<Image {...override('Header Line Image')} />
			</Box>
			<Box onPointerDown={onOpen} {...override('Button Open')}>
				<Box {...override('Button Open Line', 'Button Open Line1', `Button Open Line1 ${stateOpen}`)} />
				<Box {...override('Button Open Line', 'Button Open Line2', `Button Open Line2 ${stateOpen}`)} />
			</Box>
		</Box>
		<Box ref={props.propRef} {...override('Content', `Content ${stateOpen}`)}>
			<Box onPointerDown={onClose} {...override('Button Close')}>
				<Box {...override('Button Close Line', 'Button Close Line1', `Button Close Line1 ${stateOpen}`)} />
				<Box {...override('Button Close Line', 'Button Close Line2', `Button Close Line2 ${stateOpen}`)} />
			</Box>
			{children}
		</Box>
	</Box>;
};

export default Object.assign(SideMenu, {
	overrides
});