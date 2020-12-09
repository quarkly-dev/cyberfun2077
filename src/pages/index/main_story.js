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
				Main story
			</title>
			<meta name={"description"} content={"Main plot and its duration"} />
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
					flex-direction="column"
					align-items="center"
					md-margin="2.5em 2.5em 3.75em 0em"
				>
					<Box quarkly-title="Article" max-width="52em" position="relative">
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							Cyberpunk 2077's main story will be 'slightly shorter' than The Witcher 3's
						</Text>
						<Box display="flex" justify-content="space-between" align-items="center" margin="0px 0px 1em 0px">
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
										color="--secondary"
										text-decoration-line="initial"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										hover-text-decoration-line="underline"
									>
										Cohen Coberly
									</Link>
									{" "}on September 21, 2020, 11:57 AM
								</Span>
							</Text>
							<Link
								href="https://www.techspot.com/news/86824-cyberpunk-2077-main-story-lightly-shorter-than-witcher.html"
								font="--paragraph"
								color="--secondary"
								margin="0 0 0 0"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								Source
							</Link>
						</Box>
						<Image width="100%" font="--paragraph" margin="0 0 1.5em 0" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2020-09-21-image-13-j%20(1).png?v=2020-12-09T09:05:54.738Z" />
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							<Strong color="--secondary">
								Highly anticipated:
							</Strong>
							{" "}Cyberpunk 2077 is just around the corner now, and the game's marketing campaign has kicked into high gear. Its official Twitter account pumps out fresh screenshots on an almost-daily basis, and the recurring "Night City Wire" events tell us about the game's various mechanics, weapons, and more.
							<br />
							<br />
							More recently, CD Projekt Red finally gave us the{" "}
							<Link
								href="https://www.techspot.com/news/86808-cyberpunk-2077-system-requirements-finally-here.html"
								text-decoration-line="initial"
								color="--secondary"
								hover-text-decoration-line="underline"
								target="_blank"
							>
								PC system requirements
							</Link>
							{" "}for Cyberpunk 2077, which were surprisingly modest given how gorgeous the game looks (with or without RTX).
							<br />
							<br />
							Today, we received some additional information about the title's expected playtime. According to CD Projekt Red, Cyberpunk 2077 will be "slightly shorter" than the studio's last big game, The Witcher 3 -- at least as far as the main story is concerned.
						</Text>
						<Image width="100%" font="--paragraph" margin="0 0 1.5em 0" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2020-09-21-image-10-j.png?v=2020-12-09T09:09:32.394Z" />
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							According to quest designer Patrick Mills, a substantial number of players never managed to finish The Witcher 3's core path. Based on information from HowLongToBeat, it seems the average player takes around 51 hours to finish that segment of the game, without participating in any other side content.
							<br />
							<br />
							51 hours may not seem like much to hardcore gamers, but for a more casual player -- which Cyberpunk 2077 has attracted plenty of, due to its astronomical hype -- it's probably at least 10 hours longer than they can handle before becoming bored or distracted by other games or life itself.
						</Text>
						<Components.Video font="--paragraph" margin="0 0 1.5em 0" video="jNC6MEA4rQk" />
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							While Mills didn't give us any specific numbers for Cyberpunk 2077, it's probably safe to assume the main story will be below the 50-hour mark; perhaps closer to 40 hours.
							<br />
							<br />
							However, content fiends and completionists can rest easy. Cyberpunk 2077 is CD Projekt Red's most reactive game yet, so there will be plenty of replay value if you decide to run through it a second, third, or fourth time.
						</Text>
						<Image width="100%" font="--paragraph" margin="0 0 1.5em 0" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2020-09-21-image-11-j.png?v=2020-12-09T09:09:45.145Z" />
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0" sm-margin="0 0 1.5em 0">
							Furthermore, even if you only plan for one playthrough, Mills' comments don't relate to Cyberpunk 2077's plentiful side content in any way -- that'll still be just as expansive as ever.
							<br />
							<br />
							Again, we don't have any concrete numbers here, but HowLongToBeat says a full, 100% run of The Witcher 3 takes about 173 hours. Cyberpunk 2077 will most likely come close to that number if you chase down every side quest and collectible.
							<br />
							<br />
							Cyberpunk 2077 is arriving on Xbox One, PlayStation 4, and PC come November 19. It will also be available on the Xbox Series X and PlayStation 5.
							<br />
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
								Final Preview
							</Override>
							<Override slot="Content" href="/index/final_preview" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-finalprev.png?v=2020-12-05T08:19:05.521Z) 0% 0% /cover no-repeat scroll padding-box" />
						</Components.Card>
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