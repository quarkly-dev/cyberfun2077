import React from "react";
import theme from "theme";
import { Theme, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"cyberwiki"} />
		<Helmet>
			<title>
				Cyberwiki
			</title>
			<meta name={"description"} content={"Articles subdivided into categories"} />
			<meta property={"og:title"} content={"Cyberwiki"} />
			<meta property={"og:description"} content={"Articles subdivided into categories"} />
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
				<Override slot="link1" color="--primary" pointer-events="none" cursor="default" />
			</Components.Side>
			<Components.Main>
				<Override
					slot="Wrapper"
					font="1vw/1 BlenderPro, sans-serif"
					overflow-x="hidden"
					sm-font="4.5vw/1 BlenderPro, sans-serif"
					box-sizing="border-box"
					md-font="2vw/1 BlenderPro, sans-serif"
					overflow-y="auto"
					sm-position="relative"
					sm-padding=".92em 0em 1.58em 1.32em"
					width="100%"
					min-height="100vh"
					lg-font="1.5vw/1 BlenderPro, sans-serif"
					flex="1 1 auto"
					max-height="100vh"
					sm-width="100%"
					background="linear-gradient(90deg,#000000 0%,rgba(0,0,0,0) 50%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/bg-092e74bc_3.png?v=2020-11-25T13:12:51.485Z) top left/76.46em repeat-y scroll padding-box"
					padding="2em 0px 2em 1.67em"
				/>
				<Box
					quarkly-title="Shadow"
					sm-top="6em"
					sm-left={0}
					sm-display="block"
					sm-position="fixed"
					sm-right={0}
					sm-height="6em"
					display="none"
					sm-background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,--color-textDark 100%) 0% 0% /auto repeat scroll padding-box"
				/>
				<Box
					margin="0em 0em 1.67em 0em"
					height="2.5em"
					quarkly-title="Header"
					display="flex"
					align-items="center"
				>
					<Text
						letter-spacing="-4%"
						margin="0em 1em 0em 0em"
						flex="0 0 auto"
						position="relative"
						top=".15em"
						text-transform="uppercase"
						font="--title"
						color="--secondary"
						quarkly-title="Title"
					>
						CYBERWIKI
					</Text>
					<Box
						overflow-y="hidden"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) center right no-repeat scroll padding-box"
						position="relative"
						quarkly-title="Line"
						sm-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) 90% center no-repeat scroll padding-box"
						flex="1 1 auto"
						height="50px"
						overflow-x="hidden"
					/>
				</Box>
				<Box quarkly-title="Content" margin="0em 2.5em 0em 0em" sm-margin="0em .58em 0em 0em" md-margin="0em 1.67vw 0em 0em">
					<Components.Grid>
						<Components.Card>
							<Override slot="Content" href="/cyberwiki/guide_beginners" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/citiy.png?v=2020-12-04T21:11:43.037Z) 0% 0% /cover no-repeat scroll padding-box" />
							<Override slot="Date" display="none" />
							<Override slot="Name Text">
								Guide for beginners
							</Override>
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								Gangs of Night city
							</Override>
							<Override slot="Content" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/team.png?v=2020-12-04T21:11:43.025Z) 0% 0% /cover no-repeat scroll padding-box" href="/cyberwiki/gans_of_night_city" />
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
	</Theme>;
});