import React from "react";
import theme from "theme";
import { Theme, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				404
			</title>
			<meta name={"description"} content={"Error page"} />
			<meta property={"og:title"} content={"404"} />
			<meta property={"og:description"} content={"Error page"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/og-image%20(1).png?v=2020-12-09T09:42:56.805Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/1.png?v=2020-12-07T08:46:45.707Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3%20(1).png?v=2020-12-07T08:46:45.723Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3%20(1).png?v=2020-12-07T08:46:45.723Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3%20(1).png?v=2020-12-07T08:46:45.723Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3%20(1).png?v=2020-12-07T08:46:45.723Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2.png?v=2020-12-07T08:46:45.726Z"} />
		</Helmet>
		<Components.Fonts />
		<Box
			quarkly-title="Page"
			display="flex"
			sm-flex-direction="column"
			sm-max-height="100vh"
			background="--dark"
		>
			<Components.Side>
				<Override slot="buttonOrder" sm-position="relative" sm-top={0} />
				<Override slot="link4">
					Reviews
				</Override>
			</Components.Side>
			<Components.Main background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/bg-404.png?v=2020-12-07T09:19:01.711Z) 0% 0% /100% 100% no-repeat scroll padding-box">
				<Override slot="Wrapper" justify-content="center" display="flex" align-items="center" />
				<Box
					quarkly-title="Shadow"
					sm-top="6em"
					sm-left={0}
					sm-height="6em"
					display="none"
					sm-position="fixed"
					sm-right={0}
					sm-background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,--color-textDark 100%) 0% 0% /auto repeat scroll padding-box"
					sm-display="block"
				/>
				<Box
					quarkly-title="Content"
					margin="0em 2.5em 0em 0em"
					sm-margin="0em .58em 0em 0em"
					md-margin="0em 1.67vw 0em 0em"
					text-align="center"
				>
					<Text font="500 5.125em/1 BlenderPro, sans-serif" margin="16px 0px 0.58em 0px" color="--secondary">
						Error_404
					</Text>
					<Components.ButtonOrder>
						<Override slot="ButtonOrder Link" href="/index" color="--textDark" background="--color-secondary2">
							back to home page
						</Override>
					</Components.ButtonOrder>
				</Box>
			</Components.Main>
		</Box>
	</Theme>;
});