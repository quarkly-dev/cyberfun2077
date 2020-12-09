import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Span, Image, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Multiplayer
			</title>
			<meta name={"description"} content={"Multiplayer mode description"} />
			<meta property={"og:title"} content={"Multiplayer"} />
			<meta property={"og:description"} content={"Multiplayer mode description"} />
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
				<Override slot="link" color="--primary" pointer-events="none" cursor="default" />
			</Components.Side>
			<Components.Main>
				<Box
					quarkly-title="Header"
					display="flex"
					align-items="center"
					margin="0em 0em 1.67em 0em"
					height="2.5em"
				>
					<Link href="/index" display="flex" align-items="center" text-decoration-line="initial">
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
							Cyberpunk 2077's multiplayer mode won't arrive before 2022
						</Text>
						<Box display="flex" align-items="center" justify-content="space-between" margin="0px 0px 1em 0px">
							<Text font="--header6" color="--textGray" margin="0 0 0 0">
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									By{" "}
									<Link
										href="https://www.techspot.com/community/staff/polycount.403116/"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										color="--secondary"
										text-decoration-line="initial"
										hover-text-decoration-line="underline"
									>
										Cohen Coberly
									</Link>
									{" "}on January 17, 2020, 2:31 PM
								</Span>
							</Text>
							<Link
								href="https://www.techspot.com/news/83606-cyberpunk-2077-multiplayer-mode-wont-arrive-before-2022.html"
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
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2020-01-17-image-20-j.png?v=2020-12-09T09:17:43.873Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							<Strong color="--secondary">
								In brief:
							</Strong>
							{" "}Cyberpunk 2077 is one of the most highly-anticipated games of this generation (and possibly the next), but the world got a bit of a shock yesterday when developer CD Projekt Red announced that the title needed some extra time in the oven -- a whopping five months, to be specific. Now, it seems the same holds true for the game's multiplayer mode.
							<br />
							<br />
							In an investor call held yesterday, during which CD Projekt Red discussed{" "}
							<Link
								href="https://www.techspot.com/news/83585-cyberpunk-2077-has-delayed.html"
								text-decoration-line="initial"
								color="--secondary"
								hover-text-decoration-line="underline"
								target="_blank"
							>
								Cyberpunk 2077's delay
							</Link>
							{" "}(among other things, such as the necessity of crunch), the studio offered the world two interesting information tidbits. First, its second in-development "AAA RPG" (which has long been listed on its investment{" "}
							<Link
								href="https://www.cdprojekt.com/en/capital-group/strategy/"
								color="--secondary"
								lg-text-decoration-line="initial"
								hover-text-decoration-line="underline"
								text-decoration-line="initial"
								target="_blank"
							>
								strategy page
							</Link>
							{" "}as a 2021 release) is actually Cyberpunk 2077 Multiplayer, and not a wholly new game.
							<br />
							<br />
							This detail is notable for a couple reasons. For starters, it puts an end to speculation that the studio has been preparing a new IP or The Witcher 4 -- it seems Cyberpunk is keeping the team's hands full. Additionally, it suggests that Cyberpunk 2077 Multiplayer will be standalone in some way, rather than an addition to the main game. Why else would it be considered a AAA RPG in its own right?
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2020-01-17-image-p.png?v=2020-12-09T09:18:04.032Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0" sm-margin="0 0 1.5em 0">
							The second important piece of Multiplayer-related information revealed during the conference call is a bit more disappointing. CD Projekt Red's leadership confirmed to a caller that Cyberpunk 2077's multiplayer mode is likely to miss its 2021 release target. That means it will launch in 2022 at the earliest, which isn't too surprising.
							<br />
							<br />
							2021 is already going to be an immensely busy year for CD Projekt Red. Not only will the team be occupied with fixing any post-launch bugs left over from Cyberpunk's singleplayer release later this year, but there are also the game's promised free DLCs and paid expansion packs to worry about.
							<br />
							<br />
							Delays aside, we're still looking forward to finding out what form Cyberpunk 2077's multiplayer will take in a couple years. And, of course, we can't wait to get our hands on the main game when it hits the market on September 17, 2020.
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
						more news
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
								Weapons and Life
							</Override>
							<Override slot="Content" href="/index/weapons_and_life" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-weapons.png?v=2020-12-05T08:19:16.733Z) 0% 0% /cover no-repeat scroll padding-box" />
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								PreOrder Steam
							</Override>
							<Override slot="Content" href="/index/preorder_steam" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-preorderstem.png?v=2020-12-05T08:19:16.719Z) 0% 0% /cover no-repeat scroll padding-box" />
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								Cyberpunk 2077's main story
							</Override>
							<Override slot="Content" href="/index/main_story" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-mainstory.png?v=2020-12-05T08:19:16.763Z) 0% 0% /cover no-repeat scroll padding-box" />
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