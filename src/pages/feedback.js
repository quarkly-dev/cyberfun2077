import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Formspree } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Feedback
			</title>
			<meta name={"description"} content={"Feedback form"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/og-image%20(1).png?v=2020-12-09T09:42:56.805Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Fonts />
		<Box
			quarkly-title="Page"
			display="flex"
			font="1vw/1 BlenderPro, sans-serif"
			sm-flex-direction="column"
			sm-max-height="100vh"
			background="--dark"
		>
			<Components.Side>
				<Override slot="link6" color="--primary" pointer-events="none" cursor="default" />
			</Components.Side>
			<Components.Main>
				<Override slot="Wrapper">
					<div>
						<Link
							href="/index"
							display="flex"
							align-items="center"
							text-decoration-line="initial"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<div />
							<div>
								back
							</div>
						</Link>
						<div />
					</div>
					<div>
						<div>
							<div>
								Contact Form
							</div>
							<div>
								<div>
									Some Text
								</div>
								<div>
									Some Text
								</div>
								Submit
							</div>
						</div>
					</div>
				</Override>
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
						Feedback
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
				<Box
					quarkly-title="Content"
					margin="2.5em 2.5em 0em 0em"
					display="flex"
					justify-content="center"
					md-margin="2.5em 2.5em 3.75em 0em"
					sm-margin="2.5em .58em 2.5em 0em"
				>
					<Box quarkly-title="Form" width="100%" max-width="40em">
						<Text font="--header1" color="--secondary" margin="0 0 1.2em 0">
							Contact Form
						</Text>
						{" "}
						<Formspree
							errorMessage="Something went wrong :("
							completeText="Thank уou! Your message has been sent."
							endpoint="https://formspree.io/f/mwkwrppo"
							display="flex"
							flex-direction="column"
							font="--paragraph"
							color="--textLight"
						>
							<Box quarkly-title="Form" font="400 .84em/1 BlenderPro, sans-serif">
								<Text
									margin="0 0 .75em 0"
									font="--header4"
									color="--secondary"
									sm-font="--baseSm"
									text-transform="uppercase"
								>
									Your Name
								</Text>
								<Input
									name="name"
									margin-right="4px"
									display="block"
									width="100%"
									sm-width="100%"
									background="none"
									border-color="--color-secondary"
									border-radius={0}
									margin="0 0 2em 0"
									font="--paragraph"
									padding="1em 1em 1em 1em"
									type="text"
									color="--textLight"
									required
								/>
								<Text
									margin="0 0 .75em 0"
									font="--header4"
									color="--secondary"
									sm-font="--baseSm"
									text-transform="uppercase"
								>
									Email
								</Text>
								<Input
									name="email"
									margin-right="4px"
									display="block"
									width="100%"
									sm-width="100%"
									background="none"
									border-color="--color-secondary"
									border-radius={0}
									margin="0 0 2em 0"
									font="--paragraph"
									padding="1em 1em 1em 1em"
									color="--textLight"
									type="email"
									required
								/>
								<Text
									margin="0 0 .75em 0"
									font="--header4"
									color="--secondary"
									sm-font="--baseSm"
									text-transform="uppercase"
								>
									Message
								</Text>
								<Input
									name="message"
									display="block"
									type="text"
									width="100%"
									height="15em"
									text-align="left"
									as="textarea"
									margin="0 0 1.5em 0"
									sm-width="100%"
									required
									background="none"
									border-color="--color-secondary"
									border-radius={0}
									font="--paragraph"
									padding="1em 1em 1em 1em"
									color="--textLight"
								/>
								<Components.ButtonForm />
							</Box>
						</Formspree>
					</Box>
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