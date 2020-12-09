import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Cyberwiki
			</title>
			<meta name={"description"} content={"Articles subdivided into categories"} />
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
				<Override slot="link1" color="--primary" pointer-events="none" cursor="default" />
			</Components.Side>
			<Components.Main>
				<Override
					slot="Wrapper"
					min-height="100vh"
					md-font="2vw/1 BlenderPro, sans-serif"
					lg-font="1.5vw/1 BlenderPro, sans-serif"
					font="1vw/1 BlenderPro, sans-serif"
					max-height="100vh"
					overflow-x="hidden"
					overflow-y="auto"
					sm-position="relative"
					sm-padding=".92em 0em 1.58em 1.32em"
					sm-font="4.5vw/1 BlenderPro, sans-serif"
					width="100%"
					sm-width="100%"
					background="linear-gradient(90deg,#000000 0%,rgba(0,0,0,0) 50%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/bg-092e74bc_3.png?v=2020-11-25T13:12:51.485Z) top left/76.46em repeat-y scroll padding-box"
					box-sizing="border-box"
					padding="2em 0px 2em 1.67em"
					flex="1 1 auto"
				/>
				<Box
					quarkly-title="Shadow"
					sm-position="fixed"
					sm-top="6em"
					sm-left={0}
					sm-right={0}
					sm-height="6em"
					display="none"
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
						quarkly-title="Title"
						font="--title"
						color="--secondary"
						text-transform="uppercase"
						letter-spacing="-4%"
						margin="0em 1em 0em 0em"
						flex="0 0 auto"
						position="relative"
						top=".15em"
					>
						CYBERWIKI
					</Text>
					<Box
						flex="1 1 auto"
						height="50px"
						overflow-x="hidden"
						overflow-y="hidden"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) center right no-repeat scroll padding-box"
						position="relative"
						quarkly-title="Line"
						sm-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) 90% center no-repeat scroll padding-box"
					/>
				</Box>
				<Box quarkly-title="Content" margin="0em 2.5em 0em 0em" sm-margin="0em .58em 0em 0em" md-margin="0em 1.67vw 0em 0em">
					<Components.Grid>
						<Components.Card>
							<Override slot="Name Text">
								Guide for beginers
							</Override>
							<Override slot="Content" href="/cyberwiki/guide_beginers" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/citiy.png?v=2020-12-04T21:11:43.037Z) 0% 0% /cover no-repeat scroll padding-box" />
							<Override slot="Date" display="none" />
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								Gans of nighcity
							</Override>
							<Override slot="Content" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/team.png?v=2020-12-04T21:11:43.025Z) 0% 0% /cover no-repeat scroll padding-box" href="/cyberwiki/gans_nightcity" />
							<Override slot="Date" display="none" />
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								Transport
							</Override>
							<Override slot="Content" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/cycle.png?v=2020-12-04T21:11:43.037Z) 0% 0% /cover no-repeat scroll padding-box" href="/cyberwiki/transport" />
							<Override slot="Date" display="none" />
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								Weapons
							</Override>
							<Override slot="Content" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/pistols.png?v=2020-12-04T21:11:43.025Z) 0% 0% /cover no-repeat scroll padding-box" href="/cyberwiki/weapons" />
							<Override slot="Date" display="none" />
						</Components.Card>
					</Components.Grid>
				</Box>
			</Components.Main>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});