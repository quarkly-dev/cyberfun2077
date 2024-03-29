import React from "react";
import theme from "theme";
import { Theme, Icon, Text, Link, Box, Image, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/preorder_steam"} />
		<Helmet>
			<title>
				Pre-order Steam
			</title>
			<meta name={"description"} content={"Pre-order Steam bonuses"} />
			<meta property={"og:title"} content={"Pre-order Steam"} />
			<meta property={"og:description"} content={"Pre-order Steam bonuses"} />
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
							top=".15em"
							size="1.5em"
							margin="0px .33em 0px 0px"
							category="md"
							icon={MdKeyboardArrowLeft}
							color="--secondary"
							position="relative"
						/>
						<Text
							flex="0 0 auto"
							font="--title"
							color="--secondary"
							letter-spacing="-4%"
							margin="0em 1em 0em 0em"
							quarkly-title="Title"
							text-transform="uppercase"
							position="relative"
							top=".15em"
						>
							back
						</Text>
					</Link>
					<Box
						quarkly-title="Line"
						sm-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) 90% center no-repeat scroll padding-box"
						flex="1 1 auto"
						height="50px"
						overflow-x="hidden"
						overflow-y="hidden"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) center right no-repeat scroll padding-box"
						position="relative"
					/>
				</Box>
				<Box
					sm-margin="0em .58em 2.5em 0em"
					display="flex"
					justify-content="center"
					md-margin="2.5em 2.5em 3.75em 0em"
					quarkly-title="Content"
					margin="2.5em 2.5em 5em 0em"
				>
					<Box max-width="52em" position="relative" quarkly-title="Article">
						<Text color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif" font="--header1">
							Cyberpunk 2077 short story is an exclusive reward for buying on Steam
						</Text>
						<Box display="flex" justify-content="space-between" align-items="center" margin="0px 0px 1em 0px">
							<Text font="--header6" color="--textGray" margin="0 0 0 0">
								By{" "}
								<Link
									href="https://www.gamesradar.com/author/connor-sheridan/"
									overflow-wrap="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									color="--secondary"
									text-decoration-line="initial"
									word-break="normal"
									hover-text-decoration-line="underline"
								>
									Connor Sheridan
								</Link>
								<Link
									href="https://www.gamesradar.com/author/connor-sheridan/"
									overflow-wrap="normal"
									white-space="normal"
									text-overflow="clip"
									hyphens="manual"
									color="--secondary"
									text-decoration-line="initial"
									word-break="normal"
									text-indent="0"
									hover-text-decoration-line="underline"
								>
									Connor Sheridan
								</Link>
								{" "}9 days ago
							</Text>
							<Link
								color="--secondary"
								margin="0 0 0 0"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
								href="https://www.gamesradar.com/cyberpunk-2077-short-story-is-an-exclusive-reward-for-buying-on-steam/"
								font="--paragraph"
							>
								Source
							</Link>
						</Box>
						<Image
							margin="0 0 1.5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/KqoFtyxsCAZR9iEcLNpRYU-1024-80.png?v=2020-12-09T09:02:05.376Z"
							object-fit="contain"
							display="flex"
							width="100%"
							font="--paragraph"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Buying{" "}
							<Link
								target="_blank"
								href="https://www.gamesradar.com/cyberpunk-2077-release-date-trailer-gameplay/"
								color="--secondary"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								Cyberpunk 2077
							</Link>
							{" "}on Steam will get you a bonus copy of an in-fiction short story written by the game's story lead.
							<br />
							<br />
							Developer CD Projekt Red revealed the store-exclusive bonus on its Twitter account today: the name of the story is "2AM - She Calls", and it takes place from the perspective of a cop-turned-cab-driver named Frank who works the night shift in Night City. To be more specific, Frank is a{" "}
							<Em>
								combat cab
							</Em>
							{" "}driver, a rough-and-tumble group that has the motto "We get you there, dead or alive" in the tabletop RPG upon which Cyberpunk 2077 is based.
						</Text>
						<Components.Twitter
							font="--paragraph"
							margin="0 0 1.5em 0"
							display="flex"
							width="100%"
							justify-content="center"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0" sm-margin="0 0 1.5em 0">
							The title and cover art are carrying some strong '50s film noir vibes. Cyberpunk itself started out as a literary subgenre in the '70s and '80s, so it should be interesting to see how author Tomasz Marchewka fuses them. On top of the bonus short story, CD Projekt Red is teasing "exclusive goodies" for Steam purchasers including avatars, posters, and a wallpaper.
							<br />
							<br />
							So now you have a choice to make if you're planning to play on PC. You can either buy on Steam for those goodies, or you can buy on GOG.com and unlock an{" "}
							<Link
								text-indent="0"
								hyphens="manual"
								hover-text-decoration-line="underline"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-overflow="clip"
								target="_blank"
								href="https://www.gog.com/news/gogcoms_exclusive_digital_goodie_for_cyberpunk_2077_revealed?pp=d965a463ac183af4828302b14522bb3371cec49f"
								color="--secondary"
								text-decoration-line="initial"
							>
								exclusive 50-page digital comic
							</Link>
							. It's titled Cyberpunk 2077: Big City Dreams, and it was written by CDPR narrative manager Bartosz Sztybor. This isn't to be confused with{" "}
							<Link
								href="https://www.gamesradar.com/cyberpunk-2077-trauma-team-comic-is-coming-in-september/"
								color="--secondary"
								text-decoration-line="initial"
								word-break="normal"
								text-overflow="clip"
								hyphens="manual"
								hover-text-decoration-line="underline"
								overflow-wrap="normal"
								white-space="normal"
								text-indent="0"
								target="_blank"
							>
								Dark Horse's Cyberpunk 2077 Trauma Team comic
							</Link>
							, which you'll have to buy separately.
							<br />
							<br />
							Either option sounds like a good way to immerse yourself in the world of Cyberpunk 2077 when you aren't playing the game itself.
							<br />
							<br />
							<Em
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
							>
								If you're planning to buy on console, find out how the{" "}
							</Em>
							<Link
								text-indent="0"
								text-overflow="clip"
								hover-text-decoration-line="underline"
								target="_blank"
								href="https://www.gamesradar.com/cyberpunk-ps5-xbox-series-x-upgrade/"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								color="--secondary"
								text-decoration-line="initial"
								hyphens="manual"
							>
								<Em
									hyphens="manual"
									color="--secondary"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
								>
									Cyberpunk 2077 PS5 / Xbox Series X upgrade
								</Em>
							</Link>
							<Em
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
							>
								{" "}works.
							</Em>
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
						text-transform="uppercase"
						letter-spacing="-4%"
						flex="0 0 auto"
						position="relative"
						top=".15em"
						quarkly-title="Title"
						font="--title"
						color="--secondary"
						margin="0em 1em 0em 0em"
					>
						more news
					</Text>
					<Box
						sm-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) 90% center no-repeat scroll padding-box"
						flex="1 1 auto"
						height="50px"
						overflow-x="hidden"
						overflow-y="hidden"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) center right no-repeat scroll padding-box"
						position="relative"
						quarkly-title="Line"
					/>
				</Box>
				<Box quarkly-title="Content" margin="2.5em 2.5em 2.5em 0em" sm-margin="0em .58em 0em 0em">
					<Components.Grid>
						<Components.Card>
							<Override slot="Content" href="/index/final_preview" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-finalprev.png?v=2020-12-05T08:19:05.521Z) 0% 0% /cover no-repeat scroll padding-box" />
							<Override slot="Name Text">
								Final Preview
							</Override>
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								Weapons and Life
							</Override>
							<Override slot="Content" href="/index/weapons_and_life" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-weapons.png?v=2020-12-05T08:19:16.733Z) 0% 0% /cover no-repeat scroll padding-box" />
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								Cyberpunk 2077's main story
							</Override>
							<Override slot="Content" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-mainstory.png?v=2020-12-05T08:19:16.763Z) 0% 0% /cover no-repeat scroll padding-box" href="/index/main_story" />
						</Components.Card>
					</Components.Grid>
				</Box>
			</Components.Main>
		</Box>
	</Theme>;
});