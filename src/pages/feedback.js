import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Formspree } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"feedback"} />
		<Helmet>
			<title>
				Feedback
			</title>
			<meta name={"description"} content={"Feedback form"} />
			<meta property={"og:title"} content={"Feedback"} />
			<meta property={"og:description"} content={"Feedback form"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/og-image%20(1).png?v=2020-12-09T09:42:56.805Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/1.png?v=2020-12-09T09:56:06.625Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2.png?v=2020-12-09T09:56:14.634Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2.png?v=2020-12-09T09:56:14.634Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2.png?v=2020-12-09T09:56:14.634Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2.png?v=2020-12-09T09:56:14.634Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3.png?v=2020-12-09T09:56:27.017Z"} />
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
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							href="/index"
							text-decoration-line="initial"
							word-break="normal"
							white-space="normal"
							display="flex"
							align-items="center"
							overflow-wrap="normal"
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
						letter-spacing="-4%"
						top=".15em"
						font="--title"
						text-transform="uppercase"
						margin="0em 1em 0em 0em"
						flex="0 0 auto"
						position="relative"
						quarkly-title="Title"
						color="--secondary"
					>
						Feedback
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
				<Box
					sm-margin="2.5em .58em 2.5em 0em"
					quarkly-title="Content"
					margin="2.5em 2.5em 0em 0em"
					display="flex"
					justify-content="center"
					md-margin="2.5em 2.5em 3.75em 0em"
				>
					<Box quarkly-title="Form" width="100%" max-width="40em">
						<Text font="--header1" color="--secondary" margin="0 0 1.2em 0">
							Contact Form
						</Text>
						{" "}
						<Formspree
							errorMessage="Something went wrong :("
							completeText="Thank уou! Your message has been sent."
							endpoint="https://formspree.io/f/myybnyar"
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
									display="block"
									padding="1em 1em 1em 1em"
									color="--textLight"
									border-radius={0}
									margin="0 0 2em 0"
									margin-right="4px"
									width="100%"
									sm-width="100%"
									border-color="--color-secondary"
									font="--paragraph"
									type="text"
									required
									background="none"
								/>
								<Text
									font="--header4"
									color="--secondary"
									sm-font="--baseSm"
									text-transform="uppercase"
									margin="0 0 .75em 0"
								>
									Email
								</Text>
								<Input
									sm-width="100%"
									background="none"
									border-color="--color-secondary"
									color="--textLight"
									margin-right="4px"
									width="100%"
									type="email"
									required
									display="block"
									border-radius={0}
									margin="0 0 2em 0"
									padding="1em 1em 1em 1em"
									name="email"
									font="--paragraph"
								/>
								<Text
									sm-font="--baseSm"
									text-transform="uppercase"
									margin="0 0 .75em 0"
									font="--header4"
									color="--secondary"
								>
									Message
								</Text>
								<Input
									display="block"
									width="100%"
									height="15em"
									as="textarea"
									padding="1em 1em 1em 1em"
									color="--textLight"
									type="text"
									margin="0 0 1.5em 0"
									required
									border-color="--color-secondary"
									text-align="left"
									sm-width="100%"
									font="--paragraph"
									name="message"
									background="none"
									border-radius={0}
								/>
								<Components.ButtonForm />
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Components.Main>
		</Box>
	</Theme>;
});