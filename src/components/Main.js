import React, { useState } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';
const overrides = {
	'Wrapper': {
		kind: 'Box',
		"props": {
			"min-height": "100vh",
			"sm-min-height": "auto",
			"md-font": "2vw/1 BlenderPro, sans-serif",
			"lg-font": "1.5vw/1 BlenderPro, sans-serif",
			"font": "1vw/1 BlenderPro, sans-serif",
			"max-height": "100vh",
			"overflow-x": "hidden",
			"overflow-y": "auto",
			"sm-position": "relative",
			"sm-padding": ".92em 0em 1.58em 1.32em",
			"sm-font": "4.5vw/1 BlenderPro, sans-serif",
			"width": "100%",
			"sm-width": "100%",
			"background": "linear-gradient(90deg,#000000 0%,rgba(0,0,0,0) 50%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/bg-092e74bc_3.png?v=2020-11-25T13:12:51.485Z) top left/76.46em repeat-y scroll padding-box",
			"box-sizing": "border-box",
			"padding": "2em 0px 2em 1.67em",
			"flex": "1 1 auto"
		}
	}
};
const Wrapper = atomize(Box)`
  ::-webkit-scrollbar {
    width: 1.2em;
  }
  ::-webkit-scrollbar-thumb {
    border-width: .625em .625em .625em .25em;
    border-style: solid;
    border-color: #0A0A10;
    background-color: #02D8F3;
  }
  ::-webkit-scrollbar-track {
    background: none; 
  }
`;

const Main = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, {});
	return <Wrapper box-sizing="border-box" {...override('Wrapper')} {...rest}>
		      
		{children}
		    
	</Wrapper>;
};

export default Object.assign(Main, {
	overrides
});