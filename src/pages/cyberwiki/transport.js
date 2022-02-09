import React from "react";
import theme from "theme";
import { Theme, Icon, Text, Link, Box, Span, Strong, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"cyberwiki/transport"} />
		<Helmet>
			<title>
				Transport
			</title>
			<meta name={"description"} content={"Transport information available in the game "} />
			<meta property={"og:title"} content={"Transport"} />
			<meta property={"og:description"} content={"Transport information available in the game "} />
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
			sm-max-height="100vh"
			background="--dark"
			quarkly-title="Page"
			display="flex"
			font="1vw/1 BlenderPro, sans-serif"
			sm-flex-direction="column"
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
							size="1.5em"
							margin="0px .33em 0px 0px"
							category="md"
							icon={MdKeyboardArrowLeft}
							color="--secondary"
							position="relative"
							top=".15em"
						/>
						<Text
							font="--title"
							text-transform="uppercase"
							letter-spacing="-4%"
							top=".15em"
							quarkly-title="Title"
							color="--secondary"
							margin="0em 1em 0em 0em"
							flex="0 0 auto"
							position="relative"
						>
							back
						</Text>
					</Link>
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
					justify-content="center"
					md-margin="2.5em 2.5em 3.75em 0em"
					quarkly-title="Content"
					margin="2.5em 2.5em 5em 0em"
					sm-margin="0em .58em 2.5em 0em"
					display="flex"
				>
					<Box quarkly-title="Article" max-width="52em" position="relative">
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							Take a look at Cyberpunk 2077's cars, bikes, and trucks
						</Text>
						<Box display="flex" align-items="center" justify-content="space-between" margin="0px 0px 1em 0px">
							<Text margin="0 0 0 0" font="--header6" color="--textGray">
								<Span
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									overflow-wrap="normal"
								>
									By{" "}
									<Link
										white-space="normal"
										text-overflow="clip"
										text-decoration-line="initial"
										href="https://www.techspot.com/community/staff/polycount.403116/"
										overflow-wrap="normal"
										word-break="normal"
										text-indent="0"
										hyphens="manual"
										color="--secondary"
									>
										Cohen Coberly
									</Link>
									{" "}on October 15, 2020, 2:25 PM
								</Span>
							</Text>
							<Link
								color="--secondary"
								margin="0 0 0 0"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
								href="https://www.techspot.com/news/87133-take-look-cyberpunk-2077-cars-bikes-trucks.html"
								font="--paragraph"
							>
								Source
							</Link>
						</Box>
						<Components.Video margin="0 0 1.5em 0" video="6IMO0PaX7Yc" />
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
								Highly anticipated:
							</Strong>
							{" "}CD Projekt Red published its fourth (and second-to-last) episode of Cyberpunk 2077's regular "Night City Wire" content showcases this morning, and it packed quite a bit of information into 25 minutes. Night City Wire: Episode 4 shows off the vehicles you'll be able to buy, steal, race, and destroy, as well as the visual styles you'll be seeing throughout the game.
							<br />
							<br />
							Though you can see the game's Style trailer below, we'll mostly focus on the vehicles in this piece. First, here are the different classes of cars you can expect to find in Cyberpunk 2077's fictional world of Night City: Economy, Executive, Heavy Duty, Sport, and Hypercar.
							<br />
							<br />
							Each of these categories features a unique set of vehicles from different manufacturers. They're designed for various types of people, from the poor and working-class to the richest of the rich. We'll summarize each category below for your convenience.
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2020-10-15-image-30-j.png?v=2020-12-09T09:26:16.359Z"
							object-fit="contain"
							display="flex"
						/>
						<Text margin="0 0 2.5em 0" font="--paragraph" color="--textGray">
							Economy vehicles, as you might expect, are a fairly basic affair. They're simple, functional, and not exceptionally fast or well-armored. In CDPR's own words, this class of cars contains "mostly utility vehicles and low-end clunkers." They might get you from point A to point B, but not in style -- with Economy cars, efficiency is everything.
						</Text>
						<Components.Video margin="0 0 1.5em 0" video="YlyDJVYqfpA" />
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Next up, we have Executive-class cars. These are the high-end, stylish rides of Night City's elite. They're kitted out with the latest technology while promising the most luxurious driving experience money can buy.
							<br />
							<br />
							And experience it you will, thanks to Cyberpunk 2077's fully-modeled vehicle interiors and optional first-person driving camera.
						</Text>
						<Image
							display="flex"
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2020-10-15-image-31-j.png?v=2020-12-09T09:26:16.363Z"
							object-fit="contain"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Heavy Duty vehicles are next on the list, blending "masterful engineering" with practical design. These cars, which range from trucks and tanks to bulky SUVs, are ideal for situations that demand toughness and brute force over speed and finesse.
							<br />
							<br />
							Sport cars, on the other hand, are all about power and speed. They're bulkier than, say, an Executive or Hypercar-class vehicle, but they still look pretty flashy -- think futuristic muscle cars, and you won't be too far off the mark.
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2020-10-15-image-29-j.png?v=2020-12-09T09:26:16.345Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Finally, we have Hypercars, the ultimate futuristic vehicles. They're easily the most expensive cars in 2077, with one model in particular -- the Aerondight -- estimated to be owned by fewer than 1,000 people worldwide. They're well-armored, fast, sleek, and packed to the brim with modern technology. In other words, they're the ideal ride, but good luck acquiring one through legal means.
						</Text>
						<Components.Video margin="0 0 1.5em 0" video="TcWf0pnbfLA" />
						<Text margin="0 0 2.5em 0" sm-margin="0 0 1.5em 0" font="--paragraph" color="--textGray">
							There is one additional vehicle of note: Johnny Silverhand's (a legendary in-game "rockerboy" played by Keanu Reeves) custom Porsche 1911, which you can see in the image above.
							<br />
							<br />
							If any of these classes of vehicles sound like your cup of tea, you won't have to wait long to take them for a spin. Cyberpunk 2077 launches on November 18 for all platforms, including PlayStation 4, Xbox One, PC, Stadia, and GeForce Now.
						</Text>
					</Box>
				</Box>
				<Box
					height="2.5em"
					quarkly-title="Header"
					display="flex"
					align-items="center"
					margin="0em 0em 1.67em 0em"
				>
					<Text
						font="--title"
						text-transform="uppercase"
						letter-spacing="-4%"
						position="relative"
						top=".15em"
						quarkly-title="Title"
						color="--secondary"
						margin="0em 1em 0em 0em"
						flex="0 0 auto"
					>
						more 
ARTICLES
					</Text>
					<Box
						overflow-x="hidden"
						overflow-y="hidden"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) center right no-repeat scroll padding-box"
						position="relative"
						quarkly-title="Line"
						sm-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) 90% center no-repeat scroll padding-box"
						flex="1 1 auto"
						height="50px"
					/>
				</Box>
				<Box quarkly-title="Content" margin="2.5em 2.5em 2.5em 0em" sm-margin="0em .58em 0em 0em">
					<Components.Grid>
						<Components.Card>
							<Override slot="Name Text">
								Guide for beginners
							</Override>
							<Override slot="Content" href="/cyberwiki/guide_beginners" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/citiy.png?v=2020-12-04T21:11:43.037Z) 0% 0% /cover no-repeat scroll padding-box" />
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								Gangs of Night city
							</Override>
							<Override slot="Content" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/team.png?v=2020-12-04T21:11:43.025Z) 0% 0% /cover no-repeat scroll padding-box" href="/cyberwiki/gans_of_night_city" />
						</Components.Card>
						<Components.Card>
							<Override slot="Content" href="/cyberwiki/weapons" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/pistols.png?v=2020-12-04T21:11:43.025Z) 0% 0% /cover no-repeat scroll padding-box" />
							<Override slot="Name Text">
								Weapons
							</Override>
						</Components.Card>
					</Components.Grid>
				</Box>
			</Components.Main>
		</Box>
	</Theme>;
});