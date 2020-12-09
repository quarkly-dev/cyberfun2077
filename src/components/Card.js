import React, { useState } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Box, Text, Link } from '@quarkly/widgets';
const Overlay = atomize(Box)`
  pointer-events: none;
`;
const Wrapper = atomize(Box)`
  clip-path: polygon(0 0, 0 calc(100% - 2.6em), 2.6em 100%, 100% 100%, 100% 0);
`;
const ContentBg = atomize(Box)`
  clip-path: polygon(0 0, 0 calc(100% - 2.6em + 1px), calc(2.6em - 1px) 100%, 100% 100%, 100% 0);
`;
const Content = atomize(Link)`
  clip-path: polygon(0 0, 0 calc(100% - 2.6em + 1px), calc(2.6em - 1px) 100%, 100% 100%, 100% 0);
`;
const Date = atomize(Box)`
  clip-path: polygon(0 0, calc(100% - .3125em) 0, 100% .3125em, 100% 100%, 0 100%, 0 0);
`;
const Name = atomize(Box)`
  clip-path: polygon(0 0, calc(100% - 1.35em) 0, 100% 1.35em, 100% 100%, 1.35em 100%, 0 calc(100% - 1.35em), 0 0);
`;
const overrides = {
	'Wrapper': {
		kind: 'Box'
	},
	'Content': {
		kind: 'Link'
	},
	'Overlay': {
		kind: 'Box'
	},
	'Block': {
		kind: 'Box'
	},
	'Date': {
		kind: 'Box'
	},
	'Date Text': {
		kind: 'Text',
		"props": {
			"font": "600 16px/18px BlenderPro, sans-serif",
			"letter-spacing": "-0.01em",
			"children": "15.11.2020"
		}
	},
	'Name': {
		kind: 'Box'
	},
	'Name Text': {
		kind: 'Text',
		"props": {
			"font": "600 27.84px/27.84px BlenderPro, sans-serif",
			"letter-spacing": "-0.01em",
			"children": "Cyberpunk 2077 on NVIDIA GeForce RTX 30 Series"
		}
	}
};

const Card = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides, {});
	const [isHover, setHover] = useState(false);

	const onMouseEnter = () => setHover(true);

	const onMouseLeave = () => setHover(false);

	return <Wrapper
		padding="2px"
		background="--color-secondary"
		box-sizing="border-box"
		position="relative"
		sm-margin="0 0 1.32em"
		onMouseEnter={onMouseEnter}
		onMouseLeave={onMouseLeave}
		{...override('Wrapper')}
		{...rest}
	>
		<ContentBg
			top="2px"
			right="2px"
			bottom="2px"
			left="2px"
			background="--color-textDark"
			position="absolute"
		/>
		<Content
			padding="calc(90% - 4px) 0 0"
			min-height="0"
			max-height="0"
			background="--dark"
			position="relative"
			display="block"
			z-index="1"
			{...override('Content')}
		>
			        
			<Box
				width="calc(100% - 3.12em)"
				max-width="19.8em"
				position="absolute"
				bottom="1.56em"
				left="1.56em"
				box-sizing="border-box"
				align-items="flex-start"
				justify-content="flex-end"
				flex-direction="column"
				display="flex"
				{...override('Block')}
			>
				          
				<Date
					margin="0px 0px .1em 0px"
					padding=".36em .78em .31em .78em"
					min-height="0em"
					background="--color-secondary"
					box-sizing="border-box"
					display="inline-block"
					{...override('Date')}
				>
					            
					<Text
						margin="0em 0em 0em 0em"
						max-width="100%"
						min-height="0em"
						font="--date"
						letter-spacing="-3%"
						text-decoration="none"
						color="--textDark"
						{...override('Date Text')}
					>
						              
						{override('Date Text').children || 'Some Text'}
						            
					</Text>
					          
				</Date>
				          
				<Name
					margin="0em 0em 0em 0em"
					padding="1.2em 1.4em 1.35em 1.8em"
					min-height="0em"
					background="--color-secondary2"
					box-sizing="border-box"
					display="inline-block"
					{...override('Name')}
				>
					            
					<Text
						margin="0em 0em 0em 0em"
						max-width="100%"
						min-height="0em"
						font="--button"
						letter-spacing="-4%"
						text-decoration="none"
						color="--textDark"
						{...override('Name Text')}
					>
						              
						{override('Name Text').children || 'Some Text'}
						            
					</Text>
					          
				</Name>
				        
			</Box>
			        
			<Overlay
				background="--color-secondary"
				position="absolute"
				top="0"
				right="0"
				bottom="0"
				left="0"
				transition="--opacity"
				opacity={isHover ? '.1' : '0'}
			/>
			      
		</Content>
	</Wrapper>;
};

export default Object.assign(Card, {
	overrides
});
;