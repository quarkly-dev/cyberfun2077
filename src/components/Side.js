import React, { useState, useCallback, useMemo } from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Image, Link, Text, Box } from "@quarkly/widgets";
import Tooltip from "./Tooltip";
import ButtonOrder from "./ButtonOrder";
import SideMenu from "./SideMenu";
const defaultProps = {
	"font": "1vw/1 BlenderPro, sans-serif",
	"md-font": "1.5vw/1 BlenderPro, sans-serif",
	"sm-font": "4vw/1 BlenderPro, sans-serif",
	"flex": "1 0 auto",
	"display": "flex",
	"width": "100%",
	"max-width": "23.54em",
	"sm-max-width": "100%",
	"sm-height": "6.84em",
	"sm-position": "relative",
	"sm-z-index": "10"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Top",
			"sm-width": "100%",
			"sm-display": "flex",
			"sm-flex-direction": "column",
			"sm-align-items": "center",
			"sm-margin": "4em 0px 0px 0px",
			"sm-flex": "0 0 auto"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"max-width": "100%",
			"width": "16.4em",
			"margin": "0em 0em 2.875em 0em",
			"sm-position": "fixed",
			"sm-left": "1.58em",
			"sm-top": "1.25em",
			"src": "https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Logo2.svg?v=2020-12-08T10:45:55.276Z"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Menu",
			"padding": "0em 0em 0.8em 0em",
			"sm-display": "flex",
			"sm-flex-direction": "column",
			"sm-align-items": "center",
			"sm-flex": "0 0 auto"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/index",
			"text-decoration-line": "initial",
			"color": "--textDark",
			"hover-color": "--primary",
			"transition": "--color",
			"display": "block",
			"active-color": "--secondary",
			"children": "News",
			"text-transform": "uppercase",
			"letter-spacing": "-0.01em",
			"font": "600 4em/.99 BlenderPro, sans-serif",
			"sm-padding": ".21em 0 .21em 0",
			"sm-display": "flex"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "/cyberwiki",
			"text-decoration-line": "initial",
			"color": "--textDark",
			"hover-color": "--primary",
			"transition": "--color",
			"display": "block",
			"active-color": "--secondary",
			"children": "Cyberwiki",
			"text-transform": "uppercase",
			"font": "600 4em/.99 BlenderPro, sans-serif",
			"letter-spacing": "-0.01em",
			"sm-padding": ".21em 0 .21em 0",
			"sm-display": "flex"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "/gallery",
			"text-decoration-line": "initial",
			"color": "--textDark",
			"hover-color": "--primary",
			"transition": "--color",
			"display": "block",
			"active-color": "--secondary",
			"children": "Gallery",
			"text-transform": "uppercase",
			"font": "600 4em/.99 BlenderPro, sans-serif",
			"letter-spacing": "-0.01em",
			"sm-padding": ".21em 0 .21em 0",
			"sm-display": "flex"
		}
	},
	"link3": {
		"kind": "Text",
		"props": {
			"href": "/reviews",
			"text-decoration-line": "initial",
			"cursor": "default",
			"display": "flex",
			"align-items": "flex-end",
			"margin": "0 0 0 0",
			"sm-padding": ".21em 0 .21em 0",
			"sm-display": "flex"
		}
	},
	"link-logo": {
		"kind": "Link",
		"props": {
			"href": "/index"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0 0 0 0",
			"text-transform": "uppercase",
			"letter-spacing": "-0.01em",
			"font": "600 4em/.99 BlenderPro, sans-serif",
			"lg-color": "#B0A600",
			"color": "#B0A600",
			"children": "Guide"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0 0 0 0",
			"text-transform": "uppercase",
			"letter-spacing": "-0.01em",
			"font": "600 4em/.99 BlenderPro, sans-serif",
			"lg-color": "#B0A600",
			"color": "#B0A600",
			"children": "Forum"
		}
	},
	"tooltip": {
		"kind": "Tooltip",
		"props": {
			"sm-display": "none",
			"margin": "0px 0px .9em 3.55984px"
		}
	},
	"tooltip1": {
		"kind": "Tooltip",
		"props": {
			"sm-display": "none",
			"margin": "0px 0px .9em 3.55984px"
		}
	},
	"tooltipOverride": {
		"kind": "Override",
		"props": {
			"slot": "Text",
			"margin": "0 0 .66em .33em",
			"position": "relative",
			"xs-margin": "0 0 .9em .3em",
			"children": "Coming soon"
		}
	},
	"tooltipOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Text",
			"margin": "0 0 .66em .33em",
			"position": "relative",
			"xs-margin": "0 0 .9em .3em",
			"children": "Coming soon"
		}
	},
	"link4": {
		"kind": "Text",
		"props": {
			"href": "/reviews",
			"text-decoration-line": "initial",
			"cursor": "default",
			"display": "flex",
			"align-items": "flex-end",
			"margin": "0 0 0 0",
			"sm-padding": ".21em 0 .21em 0",
			"sm-display": "flex",
			"children": "Forum"
		}
	},
	"link5": {
		"kind": "Link",
		"props": {
			"display": "block",
			"text-decoration-line": "initial",
			"color": "--textDark",
			"hover-color": "--primary",
			"transition": "--color",
			"position": "relative",
			"z-index": "1",
			"children": "System requirements",
			"text-transform": "uppercase",
			"letter-spacing": "-0.02em",
			"font": "600 1.62em/1.3 BlenderPro, sans-serif",
			"sm-padding": ".25em 0px .25em 0px",
			"sm-flex": "0 0 auto",
			"href": "/system_req"
		}
	},
	"link6": {
		"kind": "Link",
		"props": {
			"display": "block",
			"text-decoration-line": "initial",
			"position": "relative",
			"z-index": "1",
			"text-transform": "uppercase",
			"letter-spacing": "-0.02em",
			"font": "600 1.62em/1.3 BlenderPro, sans-serif",
			"sm-padding": ".25em 0px .25em 0px",
			"sm-flex": "0 0 auto",
			"lg-color": "#B0A600",
			"margin": "0 0 0 0",
			"color": "--textDark",
			"cursor": "pointer",
			"children": "Feedback",
			"href": "/feedback",
			"transition": "--color",
			"hover-color": "--primary"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Bottom",
			"position": "absolute",
			"bottom": 0,
			"right": "1.45em",
			"sm-position": "relative",
			"sm-left": 0,
			"sm-display": "flex",
			"sm-flex-direction": "column",
			"sm-align-items": "center",
			"sm-height": "4.5em",
			"sm-width": "100%",
			"sm-margin": "1.6em 0px 3.2em 0px",
			"sm-flex": "1 0 auto"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"overflow-x": "hidden",
			"overflow-y": "hidden",
			"position": "relative",
			"left": "1em",
			"quarkly-title": "Image",
			"height": "23.12em",
			"width": "19.27em",
			"min-height": "0",
			"margin": "-2.5em 0em 0em 0em",
			"sm-display": "none"
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2966ee9e18daba084c145dd2897d79e0%201.png?v=2020-11-23T14:35:25.253Z",
			"width": "100%",
			"position": "absolute",
			"left": 0,
			"bottom": "-4em",
			"sm-display": "none"
		}
	},
	"Content": {
		"props": {
			"background": `
				url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Vector.svg?v=2020-11-23T13:55:51.651Z) calc(100% + 1px) 0/1.82em repeat-y,
				url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/bg_line.png?v=2020-12-07T10:39:16.720Z) top left/23.54em no-repeat,
				url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/bg_menu.png?v=2020-12-07T11:05:30.038Z) bottom left/23.54em no-repeat scroll padding-box,
				linear-gradient(90deg,#F8ED03 24.56%,#FCF103 84.29%)
			`,
			"overflow": "hidden",
			"box-sizing": "border-box",
			"width": "100%",
			"max-width": "23.54em",
			"flex": "1 0 auto",
			"sm-display": "flex",
			"xs-min-height": "55em",
			"xs-height": "100vh",
			"xs-display": "flex",
			"xs-flex-direction": "column",
			"xs-justify-content": "space-between",
			"height": "100vh",
			"position": "fixed",
			"top": 0,
			"left": 0,
			"sm-max-width": "100%",
			"padding": "2.1em 2.8em 0em 2.8em",
			"lg-padding": "3.1em 2.8em 0em 2.8em",
			"sm-background": `
				url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/bg_line.png?v=2020-12-07T10:39:16.720Z) top left/23.54em no-repeat,
				url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/bg_menu.png?v=2020-12-07T11:05:30.038Z) bottom left/23.54em no-repeat,
				linear-gradient(90deg,#F8ED03 24.56%,#FCF103 84.29%)
			`,
			"sm-flex-direction": "column",
			"sm-align-items": "center"
		}
	},
	"Header": {
		"props": {
			"display": "none",
			"sm-display": "flex",
			"sm-background": ",--color-secondary2",
			"sm-align-items": "center",
			"sm-justify-content": "space-between",
			"sm-padding": "1.25em 1.58em 2em 1.58em",
			"sm-width": "100%",
			"sm-position": "fixed",
			"sm-right": 0,
			"sm-left": 0,
			"sm-top": 0
		}
	},
	"Header Image": {
		"props": {
			"max-width": "100%",
			"width": "16.4em",
			"sm-flex": "0 0 auto",
			"src": "https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Logo2.svg?v=2020-12-08T10:45:55.276Z"
		}
	},
	"Header Line": {
		"props": {
			"sm-position": "absolute",
			"sm-left": 0,
			"sm-right": 0,
			"sm-bottom": 0,
			"sm-width": "100%",
			"sm-height": "1.25em",
			"sm-min-width": 0,
			"sm-min-height": 0,
			"sm-display": "flex",
			"sm-overflow-x": "hidden",
			"sm-overflow-y": "hidden",
			"sm-align-items": "center",
			"sm-justify-content": "center"
		}
	},
	"Header Line Image": {
		"props": {
			"src": "https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Vector.svg?v=2020-11-23T13:55:51.651Z",
			"sm-transform": "rotate(90deg)",
			"sm-position": "relative",
			"sm-width": "1.31em",
			"sm-min-width": 0,
			"sm-min-height": 0,
			"sm-bottom": "-1px"
		}
	},
	"Button Open": {
		"props": {
			"sm-padding": "2px 2px 2px 2px",
			"sm-flex": "0 0 auto",
			"sm-cursor": "pointer",
			"sm-position": "absolute",
			"sm-right": "1.58em",
			"sm-width": "3.2em",
			"sm-height": "3.2em",
			"sm-background": "transparent",
			"sm-border-width": "2px",
			"sm-border-style": "solid",
			"sm-border-color": "--color-textDark",
			"sm-display": "flex",
			"sm-flex-direction": "column",
			"sm-align-items": "center",
			"sm-justify-content": "center",
			"sm-top": "1.2em"
		}
	},
	"Button Open Border": {
		"props": {
			"sm-background": "--color-secondary2",
			"sm-width": "3.55em",
			"sm-height": "2.89em",
			"sm-display": "flex",
			"sm-align-items": "center",
			"sm-justify-content": "center"
		}
	},
	"Button Open Line": {
		"props": {
			"sm-height": "2px",
			"sm-min-height": 0,
			"sm-background": "--color-textDark",
			"sm-margin": ".16em 0px .16em 0px",
			"sm-min-width": 0,
			"sm-transition": "--transform"
		}
	},
	"Button Open Lines": {
		"props": {
			"sm-display": "flex",
			"sm-flex-direction": "column",
			"sm-align-items": "flex-end",
			"sm-justify-content": "center"
		}
	},
	"Button Open Line1": {
		"props": {
			"sm-width": "1em"
		}
	},
	"Button Open Line2": {
		"props": {
			"sm-margin": "2.432px 0 2.432px 0",
			"sm-width": "1em"
		}
	},
	"Button Open Line1 :open": {
		"props": {
			"sm-width": "1.56em",
			"sm-transform": "translateY(calc(.1em + 2px)) rotate(225deg)"
		}
	},
	"Button Open Line2 :open": {
		"props": {
			"sm-width": "1.56em",
			"sm-transform": "translateY(calc(-.05em - 2px)) rotate(135deg)"
		}
	},
	"Button Close": {
		"props": {
			"sm-padding": "2px 2px 2px 2px",
			"sm-flex": "0 0 auto",
			"sm-cursor": "pointer",
			"sm-position": "absolute",
			"sm-right": "1.58em",
			"sm-top": "1.2em",
			"display": "none",
			"sm-width": "3.2em",
			"sm-height": "3.2em",
			"sm-background": "transparent",
			"sm-border-width": "2px",
			"sm-border-style": "solid",
			"sm-border-color": "--color-textDark",
			"sm-display": "flex",
			"sm-flex-direction": "column",
			"sm-align-items": "center",
			"sm-justify-content": "center"
		}
	},
	"Button Close Border": {
		"props": {
			"sm-background": "--color-secondary2",
			"sm-width": "3.55em",
			"sm-height": "2.89em",
			"sm-display": "flex",
			"sm-align-items": "center",
			"sm-justify-content": "center"
		}
	},
	"Button Close Line": {
		"props": {
			"sm-height": "2px",
			"sm-min-height": 0,
			"sm-background": "--color-textDark",
			"sm-margin": ".16em 0px .16em 0px",
			"sm-min-width": 0,
			"sm-transition": ",--transform"
		}
	},
	"Button Close Lines": {
		"props": {
			"sm-display": "flex",
			"sm-flex-direction": "column",
			"sm-align-items": "flex-end",
			"sm-justify-content": "center"
		}
	},
	"Button Close Line1": {
		"props": {
			"sm-width": "1.58em"
		}
	},
	"Button Close Line2": {
		"props": {
			"sm-width": ".92em",
			"sm-margin": "2.432px 0 2.432px 0"
		}
	},
	"Content :closed": {
		"props": {
			"sm-transform": "translateY(-100%)"
		}
	},
	"Content :open": {
		"props": {
			"sm-transform": "translateY(0%)"
		}
	},
	"Button Close Line1 :open": {
		"props": {
			"sm-width": "1.56em",
			"sm-transform": "translateY(calc(.1em + 2px)) rotate(225deg)"
		}
	},
	"Button Close Line2 :open": {
		"props": {
			"sm-width": "1.56em",
			"sm-transform": "translateY(calc(-.05em - 2px)) rotate(135deg)"
		}
	},
	"buttonOrder": {
		"props": {
			"position": "absolute",
			"bottom": "3em",
			"left": "0em",
			"sm-position": "relative",
			"sm-top": 0
		},
		"overrides": {
			"ButtonOrder Link": {
				"props": {
					"children": "PRE-ORDER_",
					"href": "https://www.cyberpunk.net/us/en/pre-order",
					"target": "_blank"
				}
			}
		}
	}
};

const Side = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const [size, setSize] = useState({});
	const measuredRef = useCallback(node => {
		if (node !== null) {
			setSize(node.getBoundingClientRect());
		}
	}, []);
	useMemo(() => {
		// Desktop
		if (size.height / size.width < 2.15) {
			overrides.box3.props.height = 'auto';
			overrides.image1.props.display = 'none';
		} // Mobile


		if (size.width < 768 && size.height / size.width < 1.92) {
			overrides.box2.props['sm-display'] = 'none';
		}

		console.log(size.width < 768, size.height / size.width < 1.92, size.height, size.width);
	}, [size.width, size.height]);
	return <SideMenu propRef={measuredRef} {...rest}>
		<Override
			slot="Content"
			background="url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Vector.svg?v=2020-11-23T13:55:51.651Z) top right/1.82em no-repeat,#FBF105 url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Group%2018.png?v=2020-11-23T13:50:55.081Z) top left/23.54em no-repeat scroll padding-box"
			padding="3.125em 2.8em 0em 2.8em"
			box-sizing="border-box"
			width="100%"
			max-width="23.54em"
			flex="1 0 auto"
			xs-min-height="55em"
			xs-height="100vh"
			xs-display="flex"
			xs-flex-direction="column"
			xs-justify-content="space-between"
			height="100vh"
			position="fixed"
			top={0}
			left={0}
			sm-max-width="100%"
		/>
		<Override
			slot="Header"
			display="none"
			sm-display="flex"
			sm-background=",--color-secondary2"
			sm-align-items="center"
			sm-justify-content="space-between"
			sm-padding="1.25em 1.58em 2em 1.58em"
			sm-width="100%"
			sm-position="fixed"
			sm-right={0}
			sm-left={0}
			sm-top={0}
		/>
		<Override
			slot="Header Image"
			src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Group%2012.svg?v=2020-11-23T13:49:58.380Z"
			max-width="100%"
			width="16.4em"
			sm-flex="0 0 auto"
		/>
		<Override
			slot="Header Line"
			sm-position="absolute"
			sm-left={0}
			sm-right={0}
			sm-bottom={0}
			sm-width="100%"
			sm-height="1.25em"
			sm-min-width={0}
			sm-min-height={0}
			sm-display="flex"
			sm-overflow-x="hidden"
			sm-overflow-y="hidden"
			sm-align-items="center"
			sm-justify-content="center"
		/>
		<Override
			slot="Header Line Image"
			src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Vector.svg?v=2020-11-23T13:55:51.651Z"
			sm-transform="rotate(90deg)"
			sm-position="relative"
			sm-width="1.31em"
			sm-min-width={0}
			sm-min-height={0}
			sm-bottom="-1px"
		/>
		<Override
			slot="Button Open"
			sm-background="--color-textDark"
			sm-padding="2px 2px 2px 2px"
			sm-flex="0 0 auto"
			sm-cursor="pointer"
			sm-position="absolute"
			sm-right="1.58em"
			sm-top="1.52em"
		/>
		<Override
			slot="Button Open Border"
			sm-background="--color-secondary2"
			sm-width="3.55em"
			sm-height="2.89em"
			sm-display="flex"
			sm-align-items="center"
			sm-justify-content="center"
		/>
		<Override
			slot="Button Open Line"
			sm-height="2px"
			sm-min-height={0}
			sm-background="--color-textDark"
			sm-margin=".16em 0px .16em 0px"
			sm-min-width={0}
		/>
		<Override
			slot="Button Open Lines"
			sm-display="flex"
			sm-flex-direction="column"
			sm-align-items="flex-end"
			sm-justify-content="center"
		/>
		<Override slot="Button Open Line1" sm-width="1.58em" />
		<Override slot="Button Open Line2" sm-width=".92em" sm-margin="2.432px 0 2.432px 0" />
		<Override
			slot="Button Close"
			sm-background="--color-textDark"
			sm-padding="2px 2px 2px 2px"
			sm-flex="0 0 auto"
			sm-cursor="pointer"
			sm-position="absolute"
			sm-right="1.58em"
			sm-top="1.52em"
			display="none"
			sm-display="block"
		/>
		<Override
			slot="Button Close Border"
			sm-background="--color-secondary2"
			sm-width="3.55em"
			sm-height="2.89em"
			sm-display="flex"
			sm-align-items="center"
			sm-justify-content="center"
		/>
		<Override
			slot="Button Close Line"
			sm-height="2px"
			sm-min-height={0}
			sm-background="--color-textDark"
			sm-margin=".16em 0px .16em 0px"
			sm-min-width={0}
		/>
		<Override
			slot="Button Close Lines"
			sm-display="flex"
			sm-flex-direction="column"
			sm-align-items="flex-end"
			sm-justify-content="center"
		/>
		<Override slot="Button Close Line1" sm-width="1.58em" />
		<Override slot="Button Close Line2" sm-width=".92em" sm-margin="2.432px 0 2.432px 0" />
		<Override slot="Content :closed" />
		<Override slot="Content :open" />
		<Box {...override("box")}>
			<Link {...override("link-logo")}>
				<Image {...override("image")} />
			</Link>
			<Box {...override("box1")}>
				<Link {...override("link")} />
				<Link {...override("link1")} />
				<Link {...override("link2")} />
				<Text {...override("link3")}>
					<Text {...override("text")} />
					<Tooltip {...override("tooltip")}>
						<Override {...override("tooltipOverride")} />
					</Tooltip>
				</Text>
				<Text {...override("link4")}>
					<Text {...override("text1")} />
					<Tooltip {...override("tooltip1")}>
						<Override {...override("tooltipOverride1")} />
					</Tooltip>
				</Text>
			</Box>
			<Link {...override("link5")} />
			<Link {...override("link6")} />
		</Box>
		<Box {...override("box2")}>
			<Box {...override("box3")}>
				<Image {...override("image1")} />
			</Box>
			<ButtonOrder {...override("buttonOrder")}>
				<Override {...override("buttonOrderOverride")} />
			</ButtonOrder>
		</Box>
		{children}
	</SideMenu>;
};

Object.assign(Side, { ...SideMenu,
	defaultProps,
	overrides
});
export default Side;