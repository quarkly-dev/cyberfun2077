import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Image, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Gans of NightCity
			</title>
			<meta name={"description"} content={"Gangs guide"} />
			<meta property={"og:title"} content={"Gans of NightCity"} />
			<meta property={"og:description"} content={"Gangs guide"} />
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
			font="1vw/1 BlenderPro, sans-serif"
			sm-flex-direction="column"
			sm-max-height="100vh"
			background="--dark"
		>
			<Components.Side>
				<Override slot="link1" color="--primary" pointer-events="none" cursor="default" />
			</Components.Side>
			<Components.Main>
				<Box
					quarkly-title="Header"
					display="flex"
					align-items="center"
					margin="0em 0em 1.67em 0em"
					height="2.5em"
				>
					<Link href="/cyberwiki" display="flex" align-items="center" text-decoration-line="initial">
						<Icon
							category="md"
							icon={MdKeyboardArrowLeft}
							color="--secondary"
							position="relative"
							top=".15em"
							size="1.5em"
							margin="0px .33em 0px 0px"
						/>
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
							back
						</Text>
					</Link>
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
					margin="2.5em 2.5em 5em 0em"
					sm-margin="0em .58em 2.5em 0em"
					display="flex"
					justify-content="center"
					md-margin="2.5em 2.5em 3.75em 0em"
				>
					<Box quarkly-title="Article" max-width="52em" position="relative">
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							List of gangs in Cyberpunk 2077
						</Text>
						<Box display="flex" align-items="center" justify-content="space-between" margin="0px 0px 1em 0px">
							<Text font="--header6" color="--textGray" margin="0 0 0 0">
								By{" "}
								<Link href="https://www.windowscentral.com/author/Samuel%20Tolbert" color="--secondary" text-decoration-line="initial">
									SAMUEL TOLBERT
								</Link>
								{" "}Posted: 4 Nov 2020
							</Text>
							<Link
								href="https://www.windowscentral.com/list-gangs-cyberpunk-2077"
								font="--paragraph"
								color="--secondary"
								margin="0 0 0 0"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								Source
							</Link>
						</Box>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/cyberpunk20772.png?v=2020-12-09T09:23:33.330Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Much of{" "}
							<Link
								href="https://www.windowscentral.com/everything-we-know-cyberpunk-2077"
								color="--secondary"
								text-decoration-line="initial"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Cyberpunk 2077
							</Link>
							{" "}is spent dealing with different gangs, the factions that make up Night City's underbelly. According to CD Projekt Red, you can't exactly join a particular gang; however, you'll often act as an in-between, taking on jobs and dealing with the gangs as friends or as foes, depending on your choices and{" "}
							<Link
								href="https://www.windowscentral.com/list-lifepaths-cyberpunk-2077"
								color="--secondary"
								text-decoration-line="initial"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								chosen Lifepath
							</Link>
							.
							<br />
							<br />
							Many of the gangs also have different rivalries with each other, meaning you'll be choosing who to help at different points. Here's a list of all the gangs in Cyberpunk 2077.
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							<Em>
								Cyberpunk 2077 gangs
							</Em>
							{" "}6th Street
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/6str.jpg?v=2020-12-03T06:58:01.199Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Initially founded by American veterans, 6th Street was meant to be a militia that protected neighborhoods from gangs. Over time, the group expanded into gun-running and smuggling, becoming more and more like an actual gang. They attract new members from retired security forces and military. Many are patriots for the New United States (NUSA) and can easily be noticed with their NUSA-themed attire.
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							<Em>
								Cyberpunk 2077 gangs
							</Em>
							{" "}Aldecaldos
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/alde.jpg?v=2020-12-03T07:02:08.852Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							The Aldecaldos are a gang situated in the Badlands outside Night City. We're currently scarce for details otherwise.
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							<Em>
								Cyberpunk 2077 gangs
							</Em>
							{" "}Animals
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/cyberpunk-2077-animals.jpg?v=2020-12-03T07:10:31.560Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							A gang utterly obsessed with muscle-enhancing bioware and cyberware, the Animals frequently sell out their services as muscle, working as bodyguards or bouncers if the money is good. The Animals also have an interest in the underground fight scene. Taking them head-on is very dangerous due to their extreme strength and constitution. They're currently involved in a Turf War with the Voodoo Boys.
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							<Em>
								Cyberpunk 2077 gangs
							</Em>
							{" "}Maelstrom
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/cyberpunk-2077-maelstrom.jpg?v=2020-12-03T07:03:34.376Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							One of the most dangerous gangs, Maelstrom, are utterly obsessed with cyberware body modification to the point that nearly induces cyber-psychosis, which causes an individual to dissociate and stop caring for other human beings. Maelstrom are incredibly violent and unpredictable and always pack deadly combat upgrades. They're easily identifiable by their red eye-replacement optic hardware.
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							<Em>
								Cyberpunk 2077 gangs
							</Em>
							{" "}Moxes
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/cyberpunk-2077-moxes.jpg?v=2020-12-03T07:05:03.796Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							<br />
							The Moxes are something of a gang union, focused on protecting sex workers after the brutal death of a well-regarded brothel owner named Elizabeth Borden at the hands of Tyger Claws members. While they operate many brothels for income, they mostly stay out of the way of direct confrontation, except with the Tyger Claws.
							<br />
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							<Em>
								Cyberpunk 2077 gangs
							</Em>
							{" "}Scavengers
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/cyberpunk-2077-scavengers.jpg?v=2020-12-03T07:05:56.647Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							The Scavengers are only a gang in a very loose sense of the term, lacking a real hierarchy or organization outside of individual groups. They have a particular focus on black market organ theft, chopping up unsuspecting victims to sell off their organs or cyberware.
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							<Em>
								Cyberpunk 2077 gangs
							</Em>
							{" "}Tyger Claws
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/cyberpunk-2077-tyger-claws.jpg?v=2020-12-03T07:11:18.078Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							The Tyger Claws stay quiet and break the knees of people who ask too many questions. The gang uses motorcycles to get around and also have limited cyberware such as reflex boosters, preferring to rely more on martial arts and high-tech equipment, the latter of which is often obtained from Arasaka Corporation, which maintains secret ties with the Tyger Claws. They also operate many businesses such as restaurants and brothels, which can be used as fronts for illegal activity.
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							<Em>
								Cyberpunk 2077 gangs
							</Em>
							{" "}Valentinos
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/cyberpunk-2077-valentinos.jpg?v=2020-12-03T07:13:46.805Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Many of the Valentinos are of Mexican descent, though they welcome in others as well. A sense of family and respect is kept throughout the entire gang in celebrating Chicano culture. The Valentinos focus on drug trafficking and car theft, though they also operate some legitimate businesses.
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							<Em>
								Cyberpunk 2077 gangs
							</Em>
							{" "}Voodoo Boys
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/cyberpunk-2077-voodoo-boys.jpg?v=2020-12-03T07:14:47.071Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							The Voodoo Boys are one of the most technically-focused gangs, intent on breaching the Blackwall that separates the old internet from the modern net. Since Haiti was wiped out due to climate change in 2062, the Voodoo Boys also protect the Haitian refugees living in Night City. The gang's primary form of income is through digital theft.
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							<Em>
								Cyberpunk 2077 gangs
							</Em>
							{" "}Wraiths
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/cyberpunk-2077-wraiths.jpg?v=2020-12-03T07:15:45.382Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0" sm-margin="0 0 1.5em 0">
							The Wraiths are of the gangs located in the Badlands. Not much else is known about them at this time.
						</Text>
					</Box>
				</Box>
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
						more ARTICLES
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
				<Box quarkly-title="Content" margin="2.5em 2.5em 2.5em 0em" sm-margin="0em .58em 0em 0em">
					<Components.Grid>
						<Components.Card>
							<Override slot="Name Text">
								Guide for beginers
							</Override>
							<Override slot="Content" href="/cyberwiki/guide_beginers" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/citiy.png?v=2020-12-04T21:11:43.037Z) 0% 0% /cover no-repeat scroll padding-box" />
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								Transport
							</Override>
							<Override slot="Content" href="/cyberwiki/transport" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/cycle.png?v=2020-12-04T21:11:43.037Z) 0% 0% /cover no-repeat scroll padding-box" />
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								Weapons
							</Override>
							<Override slot="Content" href="/cyberwiki/weapons" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/pistols.png?v=2020-12-04T21:11:43.025Z) 0% 0% /cover no-repeat scroll padding-box" />
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