import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Span, Strong, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Weapons and life
			</title>
			<meta name={"description"} content={"About weapons and the way of life in the game"} />
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
							CD Projekt Red shows off Cyberpunk 2077's weapons and Lifepath system
						</Text>
						<Box display="flex" justify-content="space-between" margin="0px 0px 1em 0px" align-items="center">
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
										text-decoration-line="initial"
										color="--secondary"
										hover-text-decoration-line="underline"
									>
										Cohen Coberly
									</Link>
									{"  "}Posted: on August 10, 2020, 2:31 PM
								</Span>
							</Text>
							<Link
								href="https://www.techspot.com/news/86313-cd-projekt-red-shows-off-cyberpunk-2077-weapons.html"
								font="--paragraph"
								color="--secondary"
								margin="0 0 0 0"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								Source
							</Link>
						</Box>
						<Components.Video margin="0 0 1.5em 0" video="Do51eJowSyg" />
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								<Span color="--secondary">
									Highly anticipated:
								</Span>
							</Strong>
							{" "}CD Projekt Red's (CDPR) highly-anticipated first-person open-world sci-fi RPG, Cyberpunk 2077, is right around the corner. In the months leading up to the game's release, CDPR has been hosting occasional "Night City Wire" (NCW) events to reveal additional details about the title and keep the hype train rolling.
							<br />
							<br />
							The first{" "}
							<Link
								href="https://www.techspot.com/news/85775-watch-cd-projekt-red-reveals-new-trailer-gameplay.html"
								text-decoration-line="initial"
								color="--secondary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								hover-text-decoration-line="underline"
								target="_blank"
							>
								NCW episode
							</Link>
							{" "}was released in late June, giving us a glimpse of Cyberpunk 2077's unique take on virtual reality, known as "Braindance."
							<br />
							<br />
							Today, the{" "}
							<Link
								href="https://www.techspot.com/news/86274-cd-projekt-red-details-cyberpunk-2077-lifepath-combat.html"
								text-decoration-line="initial"
								color="--secondary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								hover-text-decoration-line="underline"
								target="_blank"
							>
								second episode
							</Link>
							{" "}of NCW hit the web, focusing on three new aspects of the game: its weapons, its "Lifepath" system, and Samurai, an iconic band in the Cyberpunk universe, led by frontman Johnny Silverhand (played by Keanu Reeves).
							<br />
							<br />
							The Lifepath system was shown first. As we've known for a while, Cyberpunk 2077 will feature three distinct Dragon Age: Origin-like Prologues, which act as your character's background story. Available options include the Nomad, the Street Kid, and the Corpo.
						</Text>
						<Components.Video margin="0 0 1.5em 0" video="JV8BTZ6_PWQ" />
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							In addition to guiding you through a different prologue sequence, each Lifepath unlocks unique new missions and dialogue options throughout the game. Street Kids are used to operating within the seedy underbelly of Night City, and as such will have an easier time cooperating with gangs, identifying drugs, and thinking on their feet in tense situations.
							<br />
							<br />
							Nomads, by contrast, hail from the "Badlands," a vast desert expanse surrounding Night City. Nomads value honor, integrity, and freedom (rare traits in Night City). It's unclear how this history will help them throughout the game, but we'd assume they'll unlock a few new options when chatting with other outsiders or newcomers to the city.
							<br />
							<br />
							The Corpo lifepath is ideal for those who love intrigue, skullduggery, and ruthlessness. As a Corpo, you'll be able to work with other corporate entities and individuals much easier, and perhaps strike deals that wouldn't be available to players who choose the other two lifepaths.
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2020-08-10-image-11-j.png?v=2020-12-09T09:13:50.553Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							With Lifepaths out of the way, let's move on to weapons. In the latest episode of NCW, we see shotguns, rifles, snipers, SMGs, pistols, and melee weapons. Notably, the combat seems to have been substantially improved compared to previous gameplay demos. The weapons look more impactful, and the enemy hit reactions have been given some extra "oomph."
							<br />
							<br />
							Perhaps more importantly, we now know all of the major weapon categories (five in total). There are Cyberware weapons, which are mostly wrist-mounted gadgets like the iconic Mantis Blades or the flashy Nanowire; a plasma whip that can slice through enemies and hack them from afar.
							<br />
							<br />
							There are also standard melee weapons, such as katanas, hammers, stun batons, bats, and sledgehammers. Each of these weapons will handle differently, and possess their own special properties.
						</Text>
						<Components.Video margin="0 0 1.5em 0" video="Q4ON7H7RnBE" />
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Aside from Cyberware and Melee gear, you can take advantage of three different types of firearms -- Smart, Tech, and Power weapons.
							<br />
							<br />
							Power weapons do more damage than other weapon types and let you ricochet bullets off of walls. Tech weapons, when charged up, can shoot through walls, while Smart weapons can lock on to distant targets, giving you the chance to curve your bullets around obstacles to strike down your enemies.
							<br />
							<br />
							If that's not enough choice, CDPR also described Cyberpunk 2077's weapon modification system, which is split into two main categories: software mods and attachments.
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2020-08-10-image-19-j.png?v=2020-12-09T09:14:26.906Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Attachments include things like silencers, expanded magazines, scopes, and stocks, whereas software mods are under-the-hood upgrades that can boost your damage, increase your fire rate, or even change your damage type.
							<br />
							<br />
							We won't focus too much on the Samurai portion of Night City Wire: Episode 2 here, as there just isn't much to discuss. In short, the real-life band "Refused" is handling all the music for Samurai, and it's as loud, hard-hitting, and gritty as you'd expect -- you can listen to the fictional band's latest song below.
						</Text>
						<Components.Video margin="0 0 1.5em 0" video="VOXOdflScCY" />
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0" sm-margin="0 0 1.5em 0">
							All in all, Cyberpunk 2077 is looking better than ever. After two delays and almost five years of development, this sci-fi epic is finally close to becoming a real product, and with a little luck, it might just live up to the hype.
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