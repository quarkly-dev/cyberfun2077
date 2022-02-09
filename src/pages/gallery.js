import React from "react";
import theme from "theme";
import { Theme, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"gallery"} />
		<Helmet>
			<title>
				Gallery
			</title>
			<meta name={"description"} content={"Сategorized images"} />
			<meta property={"og:title"} content={"Gallery"} />
			<meta property={"og:description"} content={"Сategorized images"} />
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
				<Override slot="link2" pointer-events="none" cursor="default" color="--primary" />
			</Components.Side>
			<Components.Main>
				<Override
					slot="Wrapper"
					min-height="100vh"
					font="1vw/1 BlenderPro, sans-serif"
					background="linear-gradient(90deg,#000000 0%,rgba(0,0,0,0) 50%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/bg-092e74bc_3.png?v=2020-11-25T13:12:51.485Z) top left/76.46em repeat-y scroll padding-box"
					md-font="2vw/1 BlenderPro, sans-serif"
					sm-position="relative"
					box-sizing="border-box"
					width="100%"
					sm-width="100%"
					flex="1 1 auto"
					lg-font="1.5vw/1 BlenderPro, sans-serif"
					overflow-x="hidden"
					overflow-y="auto"
					sm-font="4.5vw/1 BlenderPro, sans-serif"
					max-height="100vh"
					sm-padding=".92em 0em 1.58em 1.32em"
					padding="2em 0px 2em 1.67em"
				/>
				<Box
					sm-position="fixed"
					sm-top="6em"
					sm-height="6em"
					display="none"
					quarkly-title="Shadow"
					sm-left={0}
					sm-right={0}
					sm-background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,--color-textDark 100%) 0% 0% /auto repeat scroll padding-box"
					sm-display="block"
				/>
				<Box
					quarkly-title="Header"
					display="flex"
					align-items="center"
					margin="0em 0em 1.67em 0em"
					height="2.5em"
				>
					<Text
						position="relative"
						top=".15em"
						font="--title"
						text-transform="uppercase"
						letter-spacing="-4%"
						flex="0 0 auto"
						quarkly-title="Title"
						color="--secondary"
						margin="0em 1em 0em 0em"
					>
						GaLlery
					</Text>
					<Box
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) center right no-repeat scroll padding-box"
						position="relative"
						quarkly-title="Line"
						sm-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) 90% center no-repeat scroll padding-box"
						flex="1 1 auto"
						height="50px"
						overflow-x="hidden"
						overflow-y="hidden"
					/>
				</Box>
				<Box quarkly-title="Content" margin="0em 2.5em 0em 0em" sm-margin="0em .58em 0em 0em" md-margin="0em 1.67vw 0em 0em">
					<Components.Grid>
						<Components.Card>
							<Override slot="Name Text">
								Сoncept_arts
							</Override>
							<Override slot="Content" href="/gallery/concept_arts" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2026.png?v=2020-12-01T10:50:14.163Z) 0% 0% /cover repeat scroll padding-box" />
							<Override slot="Date" display="none" />
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								Screenshots
							</Override>
							<Override slot="Content" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2025.png?v=2020-12-01T10:48:00.713Z) 0% 0% /cover repeat scroll padding-box" href="/gallery/screenshots" />
							<Override slot="Date" display="none" />
						</Components.Card>
						<Components.Card>
							<Override slot="Date" display="none" />
							<Override slot="Name Text">
								Wallpapers
							</Override>
							<Override slot="Content" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2027.png?v=2020-12-01T10:51:28.408Z) 0% 0% /cover repeat scroll padding-box" href="/gallery/wallpapers" />
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								Steelbook_arts
							</Override>
							<Override slot="Content" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2028.png?v=2020-12-01T10:52:52.323Z) 0% 0% /cover repeat scroll padding-box" href="/gallery/steelbook_arts" />
							<Override slot="Date" display="none" />
						</Components.Card>
					</Components.Grid>
				</Box>
			</Components.Main>
		</Box>
	</Theme>;
});