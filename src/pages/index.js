import React from "react";
import theme from "theme";
import { Theme, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				News
			</title>
			<meta name={"description"} content={"Cyberpunk world top news"} />
			<meta property={"og:title"} content={"News"} />
			<meta property={"og:description"} content={"Cyberpunk world top news"} />
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
			background="--dark"
			quarkly-title="Page"
			display="flex"
			sm-flex-direction="column"
			sm-max-height="100vh"
		>
			<Components.Side>
				<Override
					slot="link"
					cursor="default"
					font="600 4em/.99 BlenderPro, sans-serif"
					color="--primary"
					pointer-events="none"
				/>
				<Override slot="link6">
					Feedback
				</Override>
				<Override slot="Button Open Line" />
				<Override slot="Content" />
			</Components.Side>
			<Components.Main>
				<Override slot="Wrapper" sm-padding=".92em 0em 3em 1.32em" />
				<Box
					sm-position="fixed"
					sm-left={0}
					sm-right={0}
					display="none"
					sm-background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,--color-textDark 100%) 0% 0% /auto repeat scroll padding-box"
					quarkly-title="Shadow"
					sm-top="6em"
					sm-height="6em"
					sm-display="block"
				/>
				<Box
					quarkly-title="Header"
					display="flex"
					align-items="center"
					margin="0em 0em 1.67em 0em"
					height="2.5em"
				>
					<Text
						top=".15em"
						color="--secondary"
						text-transform="uppercase"
						letter-spacing="-4%"
						margin="0em 1em 0em 0em"
						flex="0 0 auto"
						position="relative"
						quarkly-title="Title"
						font="--title"
					>
						LATEST NEWS{"\n\n"}
					</Text>
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
				<Box quarkly-title="Content" margin="0em 2.5em 0em 0em" sm-margin="0em .58em 0em 0em" md-margin="0em 1.67vw 0em 0em">
					<Components.Grid>
						<Components.Card grid-column="auto / span 2" md-grid-column="auto / auto">
							<Override slot="Date Text" font="500 16px/18px BlenderPro, sans-serif">
								19.11.2020
							</Override>
							<Override slot="Name Text" font="600 27.84px/27.84px BlenderPro, sans-serif">
								Final Preview
							</Override>
							<Override
								slot="Content"
								background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-finalprev.png?v=2020-12-05T08:19:05.521Z) 0% 0% /cover no-repeat scroll padding-box"
								padding="calc(43.24% - 4px) 0 0 0"
								md-padding="calc(90% - 4px) 0 0 0"
								href="/index/final_preview"
							/>
						</Components.Card>
						<Components.Card>
							<Override slot="Date Text" font="600 18px/18px BlenderPro, sans-serif">
								12.11.2020
							</Override>
							<Override slot="Name Text" font="600 27.84px/27.84px BlenderPro, sans-serif" color="--textDark">
								Preorder Steam
							</Override>
							<Override slot="Content" href="/index/preorder_steam" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-preorderstem.png?v=2020-12-05T08:19:16.719Z) 0% 0% /cover no-repeat scroll padding-box" />
						</Components.Card>
						<Components.Card>
							<Override slot="Date Text">
								21.09.2020
							</Override>
							<Override slot="Name Text">
								Cyberpunk 2077's main story
							</Override>
							<Override slot="Content" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-mainstory.png?v=2020-12-05T08:19:16.763Z) 0% 0% /cover no-repeat scroll padding-box" href="/index/main_story" />
						</Components.Card>
						<Components.Card>
							<Override slot="Date Text">
								10.02.2020
							</Override>
							<Override slot="Name Text">
								Weapons and life
							</Override>
							<Override slot="Content" href="/index/weapons_and_life" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-weapons.png?v=2020-12-05T08:19:16.733Z) 0% 0% /cover no-repeat scroll padding-box" />
						</Components.Card>
						<Components.Card>
							<Override slot="Date Text">
								17.01.2020
							</Override>
							<Override slot="Name Text">
								Multiplayer
							</Override>
							<Override slot="Content" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/multi.png?v=2020-12-04T21:00:52.877Z) 0% 0% /cover no-repeat scroll padding-box" href="/index/multiplayer" />
						</Components.Card>
					</Components.Grid>
				</Box>
			</Components.Main>
		</Box>
	</Theme>;
});