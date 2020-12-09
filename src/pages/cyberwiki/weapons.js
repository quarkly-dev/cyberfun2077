import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, Image, Strong, Span, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Weapons
			</title>
			<meta name={"description"} content={"Game information about weapons available in the game "} />
			<meta property={"og:title"} content={"Weapons"} />
			<meta property={"og:description"} content={"Game information about weapons available in the game "} />
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
							Cyberpunk 2077 weapons shown so far
						</Text>
						<Box display="flex" align-items="center" justify-content="space-between" margin="0px 0px 1em 0px">
							<Text font="--header6" color="--textGray" margin="0 0 0 0">
								<Text color="--secondary" display="inline-block" margin="0 0.5em 0 0">
									By 
Henry Stenhouse
								</Text>
								Posted: 19 Nov 2020 8:30 pm
							</Text>
							<Link
								href="https://ag.hyperxgaming.com/article/10702/all-cyberpunk-2077-weapons-shown-so-far"
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
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/1.jpg?v=2020-12-04T11:02:56.357Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							We’ve split our weapons into the core categories listed by CD Projekt Red, but it’s worth mentioning a few extra details first. Because Cyberpunk is an RPG, you’ll grow more skilled with guns over time, improving reload speed, stability and more. There are also different rarities of gun types, ranging all the way up to Legendary weapons which come with unique attributes. Exploration will be key to finding the best gear.{" "}
							<br />
							<br />
							In our list of all weapons in Cyberpunk 2077, we’ve included any details we know about each weapon, and also included a few unnamed weapons that were given a very brief showcase during the Nighty City episode. Bear in mind that some weapons may change before the launch of the game. We'd also like to credit VG247's excellent interview (
							<Link
								href="https://www.vg247.com/2020/08/10/cyberpunk-2077-legendary-weapons-guns/"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
							>
								read it here
							</Link>
							) which divulged some more information a few other weapons we'll be able to use.
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 0.27em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							Tech weapons
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2.jpg?v=2020-12-04T11:04:47.802Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							For the tinkerers of the future world, Tech weapons are where it’s at. These unconventional guns use electromagnetic equipment to hurl chunky projectiles extremely quickly. This means they’re perfect for firing through cover or, y’know, another person. Whichever makes for the quickest path to your target.
							<br />
						</Text>
						<Text font="--paragraph" color="--textGray" margin="0 0 1.5em 0">
							<Span
								color="--secondary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								<Strong>
									DB-2 Satara
								</Strong>
							</Span>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3.jpg?v=2020-12-04T11:04:47.806Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							An electric, double-barrelled shotgun. Fires slowly and ejects after each shot, but packs a serious punch.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								Tsunami Nekomata
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/4.jpg?v=2020-12-04T11:14:29.331Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							A semi-auto sniper rifle which can be charged up to fire a penetrating blast.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								M-179 Achilles
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/5.jpg?v=2020-12-04T11:15:37.749Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							This weapon appears to fire a compact, shotgun-style blast, but with a faster rate of fire than the Satara.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								RT-46
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/6.jpg?v=2020-12-04T11:17:29.130Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							We’re not sure if this image is actually the RT-46, but it looks pretty close to a powerful, charge-shot pistol.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								Power weapons
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/7.jpg?v=2020-12-04T11:19:14.086Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Power weapons will be the closest to your standard video game weapons, forgoing fancy tricks in favor of the classic tactic of putting lots of bullets into your enemies. Expect your usual mix of rifles and shotguns, but with the added bonus of ricochet bullets that can be bounced off walls to hit hiding enemies. You’ll see a line tracing the ricochet path when you aim, letting you pick off cowardly foes.
						</Text>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
							>
								Tsunami Nue
							</Strong>
							<br />
							<br />
							Looks like your standard pistol.
						</Text>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
							>
								SDR-22
							</Strong>
							<br />
							<br />
							Appears to be a traditional assault rifle.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								Carnage
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/8.jpg?v=2020-12-04T11:21:14.346Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							It’s your pump-action shotgun. Was there ever any doubt there would be one of these?
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								Unnamed Sawn-Off
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/9.jpg?v=2020-12-04T11:22:18.290Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							We also get a look at a sawn-off style double-barrel shotgun in the Nighty City footage.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								HJSH-18 Masamune
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/10.jpg?v=2020-12-04T11:22:51.071Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Named after the famous Japanese swordsmith. We get a short glimpse of the reload animation for this rifle which comes with a handy scope on top.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								DT-9
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/11.jpg?v=2020-12-04T11:23:55.012Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							There’s a brief flash of another gun shown in the breakdown, which we believe to be the DT-9 LMG. it has a heavy, slow rate of fire, and comes with a tripod on the front that you can presumably place in order to increase stability.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								M-10AF Lexington
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/12.jpg?v=2020-12-04T11:24:27.936Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							A 9mm pistol that can swap between single shots and full auto.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								Smart weapons
							</Strong>
							<br />
						</Text>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							These compact weapons appear to all have some form of homing aim-assist built in. You’ll need to achieve a Smart Link with your target before you can home in on them effectively, but there'll be nowhere to hide once you're locked on.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								DBB-4 Palica
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/13.jpg?v=2020-12-04T11:27:05.914Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							This looks like a one-handed, homing shotgun. Fires a bunch of pellets which float in the air before zooming towards a target.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								TKI-20 Shingen
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/14.jpg?v=2020-12-04T11:28:49.164Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							A compact, burst-fire pistol with homing bullets. As with most Smart weapons, once locked, the weapon can be fired away from the target to get bullets to curve around walls and barriers.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								G-58 Dian
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/15.jpg?v=2020-12-04T11:29:50.843Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							A small SMG-style weapon with a multiple fire modes, a flash suppressor and a quickly reloadable magazine.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								L-69 Zhuo
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/16.jpg?v=2020-12-04T11:30:33.152Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Another smart shotgun, the Zhuo has eight barrels, allowing it to track eight targets independently. Don't mess with this one.
						</Text>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
							>
								Nokot?
							</Strong>
							<br />
							<br />
							Unfortunately we don’t know the full name of this weapon, as it was cut off on the side of the trailer.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								Unnamed Smart Rifle?
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/17.jpg?v=2020-12-04T11:32:38.509Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Only a short clip of this weapon pops up, but it appears to be a rifle of some kind.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								Unnamed Smart Sniper
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/18.jpg?v=2020-12-04T11:33:17.642Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Locks on to your targets head, to save you all that trouble of lining up a long shot.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Melee weapons
							</Strong>
							<br />
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/19.jpg?v=2020-12-04T11:34:17.320Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							<Strong color="--secondary">
								Electric Alpha Baton
							</Strong>
							<br />
							<br />
							Details unknown. Given the name, we're gonna hazard a guess that it stuns people.
						</Text>
						я
						<Text font="--paragraph" color="--textGray" margin="0 0 1.5em 0">
							<Strong color="--secondary">
								Spiked Bat
							</Strong>
							<br />
							<br />
							It’s a bat with spikes on it. What more do you want?
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								Thermal Katana
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/20.jpg?v=2020-12-04T11:35:38.922Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Okay maybe this is the more you want. A katana with a nano-filament-heated blade edge. Hot and sharp enough to cut limbs clean off
						</Text>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							<Strong color="--secondary">
								Sledgehammer
							</Strong>
							<br />
							<br />
							Prefer to hit hard? Grab a sledgehammer to pummel your foes
						</Text>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							<Strong color="--secondary">
								Tanto
							</Strong>
							<br />
							<br />
							Likely the tool of an assassin, the Tanto is a shorter (though still pretty sizable) blade used for killing armored enemies up close.
						</Text>
						<Text font="--paragraph" color="--secondary" margin="0 0 1.5em 0">
							<Strong>
								Cyberware
							</Strong>
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/21.jpg?v=2020-12-04T11:37:18.737Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 1.5em 0">
							In addition to traditional weapons, you’ll be able to modify your body to include various augmented weapons. Here’s the list of the ones we know so far:
						</Text>
						<List font="--paragraph" color="--textGray">
							<Text color="--secondary">
								<Strong>
									Monowire
								</Strong>
							</Text>
							<Text color="--secondary">
								<Strong>
									Projectile Launch System
								</Strong>
							</Text>
							<Text color="--secondary">
								Gorilla Arms
							</Text>
							<Text color="--secondary">
								Mantis Blades
							</Text>
						</List>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0" sm-margin="0 0 1.5em 0">
							Mantis Blades will let you chop foes up, while Gorilla Arms will give you the strength to pick up heavy tech and weapons. The Projectile Launch system describes itself as “a missile launcher in the palm of your hand,” so that’s pretty neat too. We don’t know what the Monowire is used for, but it could be for more stealthy approaches like garroting enemies. We weren’t able to grab the name, but we could see what looked like an armor-based Cyberware as well.
						</Text>
						{" "}
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
						more 
ARTICLES
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
							<Override slot="Content" href="/cyberwiki/main_story" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/pistols.png?v=2020-12-04T21:11:43.025Z) 0% 0% /cover no-repeat scroll padding-box" />
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