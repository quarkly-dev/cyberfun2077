import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Em, Image, Span, Strong, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Guide for beginers
			</title>
			<meta name={"description"} content={"Information for a successful start for beginners"} />
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
							Cyberpunk 2077 beginners guide – things to know before playing
						</Text>
						<Box display="flex" align-items="center" justify-content="space-between" margin="0px 0px 1em 0px">
							<Text font="--header6" color="--textGray" margin="0 0 0 0">
								<div>
									By{" "}
									<Link
										href="https://squadstate.com/author/bsantosa"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										text-decoration-line="initial"
										color="--secondary"
									>
										Bárbara Santos
									</Link>
								</div>
							</Text>
							<Link
								href="https://squadstate.com/guide/cyberpunk-2077-beginners-guide-things-to-know-before-playing"
								font="--paragraph"
								color="--secondary"
								margin="0 0 0 0"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								Source
							</Link>
						</Box>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							2020 has been a year of mixed emotions. On one side, the world was struck by a{" "}
							<Link href="https://squadstate.com//?s=COVID-19" color="--secondary" text-decoration-line="initial">
								pandemic
							</Link>
							, on the other, we’ve been getting a lot of really promising{" "}
							<Link href="https://squadstate.com/list/the-best-games-coming-out-in-december-2020" color="--secondary" text-decoration-line="initial">
								new game releases
							</Link>
							. One of those releases is{" "}
							<Em>
								Cyberpunk 2077
							</Em>
							. The release date for this game is Dec. 10, and I personally can’t wait to play it. But what is the hype all about?
							<br />
							<br />
							<Em>
								Cyberpunk 2077
							</Em>
							{" "}is an futuristic action game set in a place called the Night City. It’s home to the wealthiest and most powerful people, and therefore it’s a huge lure to gangs and other aspiring criminals. There are gang wars at every corner, robots are a common sight, and body modifications are the latest word in fashion.
							<br />
							<br />
							The player takes on the role of V – a mercenary outlaw with easy access to weapons, gear, and hacking devices – who is hired to steal a prototype implant that grants immortality to its user.
							<br />
							<br />
							Let’s move on to what really matters: gameplay and choices. Here are four things you need to know before playing{" "}
							<Em>
								Cyberpunk 2077.
							</Em>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/car4.png?v=2020-12-03T11:24:00.123Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 1.5em 0">
							<br />
							<Span
								color="--secondary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Choosing your path
							</Span>
							<br />
							<br />
							First things first, when players first start the game, they get to fully customize their character. That means hairstyle, body shape, external markings, and pretty much anything you can imagine.
							<br />
							<br />
							Once you’ve set up your character the way you want to, it’s time to choose the life path you wish to take.
							<br />
							<br />
							There are three paths to choose from: Corporate, Nomad, and Street Kid. Let’s break these apart and see which might be most suitable for you:
						</Text>
						<List font="--paragraph" color="--textGray">
							<Text margin="0 0 1.5em 0">
								<Strong color="--secondary">
									Corporate:
								</Strong>
								{"  "}The Corporate path throws you into the game as a mean and very stressed out person, whose ambitions are to climb the corporate ladder by any and all means necessary. Simply put, nothing and no one matters to you more than yourself. You’ll be especially good at chatting your way out of unpleasant situations and making yourself appealing to others.
							</Text>
							<Text margin="0 0 1.5em 0">
								<Strong color="--secondary">
									Nomad:
								</Strong>
								{"  "}Nomads will have a rough start, with nothing but a broken down car in their possession. Nomads know the Badlands and all its clans like the back of their hand, and they are used to taking what they need, as nothing was ever given to them in the first place.
							</Text>
							<Text margin="0 0 1.5em 0">
								<Strong color="--secondary">
									The Street Kid:
								</Strong>
								{"  "}Street Kids had a rough start at life. They were born on the streets of this glamorous yet broken city, and they learned how everything and everyone works the hard way. They know what makes the city tick and which alleys to avoid. The only thing you get when starting off as a Street Kid is a broken nose.
							</Text>
						</List>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Each path will affect your character’s background story, present setting, and character traits, so choose wisely. We have a guide to explain in more detail how each path affects gameplay.
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Sem-Titulo.png?v=2020-12-03T11:26:27.080Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 1.5em 0">
							<br />
							<br />
							<Span color="--secondary">
								The Big Gang Theory
							</Span>
							<br />
							<br />
							The Night City is a megalopolis split into 6 different districts, each with its own unique architectural style and background story. Some of these districts – like Westbrook and City Center – are pleasant and relatively safe places to visit, and offer plenty of sights to see.
							<br />
							<br />
							On the other hand, you might want to steer clear from or at least watch your ass in places like the Watson District, Santo Domingo, or Pacifica. As for Heywood, it really depends on the streets you visit, as it is a district of both extreme wealth and extreme poverty.
							<br />
							<br />
							There are 8 main gangs roaming all over the Night City, each with its own misguided beliefs and unique brand of craziness.
						</Text>
						<List font="--paragraph" color="--textGray">
							<Text margin="0 0 1.5em 0">
								<Strong color="--secondary">
									Animals:
								</Strong>
								{"  "}the Animals are bodybuilders – in the classic sense. They distrust anyone that has been through any sort of body enhancement or modification. However, despite hating body modifications, they don’t seem to mind injecting themselves with horse grade growth hormones. They love a good cage fight, and pretty much any other activity that demonstrates brute physical force. They don’t have an ambitious agenda, they mostly just like to raid peaceful districts and start wars with other gangs.
							</Text>
							<Text margin="0 0 1.5em 0">
								<Strong color="--secondary">
									Maelstrom:
								</Strong>
								the Maelstrom are the absolute opposite to the Animals. They love everything to do with cybertech, from implants to illegal cyberware that’ll get them where they need to be. Their main hub is on the Watson district and they perform heists with as many as 30 members at a time.
							</Text>
							<Text margin="0 0 1.5em 0">
								<Strong color="--secondary">
									Tyger Claws:
								</Strong>
								the Tyger Claws run pretty much every illegal entertainment business in the city, so it’s safe to assume they are one of the wealthiest gangs. They are over 5k strong, with most members having an Asian background and a relationship to crime syndicates like the Yakuza and Triads. You can easily spot them by their luminous tattoos and katanas.
							</Text>
							<Text margin="0 0 1.5em 0">
								<Strong color="--secondary">
									Valentinos:
								</Strong>
								the Valentinos are religious freaks who worship Santa Muerte, “Death Saint”. They favor flamboyant looks, with gold-plated guns, colorful outfits, and way too much bling on their necks and fingers. They own a lot of legal businesses they use for money-laundering, but they also take part in gun smuggling, car theft, drug trafficking, and other illicit activities.
							</Text>
							<Text margin="0 0 1.5em 0">
								<Strong color="--secondary">
									6th Street:
								</Strong>
								the 6th Street are a gang consisting mainly of veterans who took part in the 4th Corporate War. They started off as the good guys, protecting the city’s helpless and downtrodden, but their definition of right and wrong soon became blurred. They mostly stick to low-tier crimes, such as robbery, extortion, and gun smuggling.
							</Text>
							<Text margin="0 0 1.5em 0">
								<Strong color="--secondary">
									Voodoo Boys:
								</Strong>
								the Voodoo Boys are the craziest gang of all. They perform weird magic rituals, kill, torture and rape just for the fun of it. And they like terrorizing their victims by leaving chicken blood and feathers at their doorstep, to warn them of what’s coming.
							</Text>
							<Text margin="0 0 1.5em 0">
								<Strong color="--secondary">
									Scavengers:
								</Strong>
								the Scavengers are mostly known for kidnapping people, just to snatch any cyberware they might be in possession of, including body modifications. They are absolutely ruthless and care about no one other than themselves. Abductions, mutilation and dismemberments are the Scavengers’ day to day tasks. And the bodies of the “donors” as the Scavengers like to call their victims, are rarely found, as they make use of the entire body.
							</Text>
							<Text margin="0 0 1.5em 0">
								<Strong color="--secondary">
									The Moxes:
								</Strong>
								the Moxes are an anarchist gang that enjoys gathering outcasts from any of the other gangs. They are the most diverse gang, ranging from sex workers to punks, anarchists, and so one. They are a small group and aren’t exactly territorial.
							</Text>
						</List>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							These aren’t the only gangs in town, but they are the ones you should be aware of.
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/weap.png?v=2020-12-03T11:30:39.037Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							<br />
							<Span
								color="--secondary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Choosing your weapons
								<br />
							</Span>
							<br />
							<Em
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Cyberpunk 2077
							</Em>
							{" "}has a huge arsenal of weapons, and luckily for us players, V has access to the most awesome weapons ever.
							<br />
							<br />
							The game has so many types of weapons, ranging from power weapons, to tech weapons, melee weapons and even smart weapons. This last one has guided ammunition – I am a big fan of this idea!
							<br />
							<br />
							You really should try at least one weapon per weapon type and see which ones work best for you. Of course if you become friends with, say, the Tyger Claws, you’ll probably be walking around town with a katana on your back. Your choice of path and gang will affect what hardware you have access to.
						</Text>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0" sm-margin="0 0 1.5em 0">
							<Span
								color="--secondary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Body modifications
								<br />
							</Span>
							<br />
							Like I mentioned a few times already, the people of the Night City have a big inclination towards cybernetic enhancements, and they are available to players – sweet! These enhancements change the character’s stats, and provide awesome upgrades, like the Braindance – an interface that allows the player to experience an alternate reality as if they’re there. With Braindance, players can experience the thoughts, memories, and physical sensations of another person. This is useful for investigations and certain missions.
							<br />
							<br />
							There’s only two limitations to how many improvements you can get: the amount of total improvements your body can take in, and the amount of money in your wallet.
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
								Gans of nightCity
							</Override>
							<Override slot="Content" href="/cyberwiki/gans_nightcity" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/team.png?v=2020-12-04T21:11:43.025Z) 0% 0% /cover no-repeat scroll padding-box" />
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