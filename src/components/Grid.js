import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Grid",
	"display": "grid",
	"grid-template-columns": "repeat(auto-fill,minmax(22.5em,1fr))",
	"grid-gap": "1.66em",
	"lg-grid-template-columns": "repeat(auto-fill,minmax(20em,1fr))",
	"md-grid-template-columns": "repeat(auto-fill,minmax(25em,1fr))",
	"sm-display": "block"
};
const overrides = {};

const Grid = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Grid, { ...Box,
	defaultProps,
	overrides
});
export default Grid;