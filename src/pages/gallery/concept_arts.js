import React from "react";
import theme from "theme";
import { Theme, Box, Icon, Text, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"gallery/concept_arts"} />
		<Helmet>
			<title>
				Сoncept arts
			</title>
			<meta name={"description"} content={"game concept art"} />
			<meta property={"og:title"} content={"Сoncept arts"} />
			<meta property={"og:description"} content={"game concept art"} />
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
			sm-flex-direction="column"
			sm-max-height="100vh"
			background="--dark"
		>
			<Components.Side>
				<Override slot="link2" cursor="default" color="--primary" pointer-events="none" />
			</Components.Side>
			<Components.Main>
				<Override
					slot="Wrapper"
					min-height="100vh"
					md-font="2vw/1 BlenderPro, sans-serif"
					font="1vw/1 BlenderPro, sans-serif"
					overflow-y="auto"
					sm-padding=".92em 0em 1.58em 1.32em"
					width="100%"
					padding="2em 0px 2em 1.67em"
					box-sizing="border-box"
					max-height="100vh"
					overflow-x="hidden"
					sm-position="relative"
					sm-font="4.5vw/1 BlenderPro, sans-serif"
					sm-width="100%"
					background="linear-gradient(90deg,#000000 0%,rgba(0,0,0,0) 50%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/bg-092e74bc_3.png?v=2020-11-25T13:12:51.485Z) top left/76.46em repeat-y scroll padding-box"
					flex="1 1 auto"
					lg-font="1.5vw/1 BlenderPro, sans-serif"
				/>
				<Box
					sm-left={0}
					sm-right={0}
					sm-height="6em"
					display="none"
					sm-background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,--color-textDark 100%) 0% 0% /auto repeat scroll padding-box"
					sm-display="block"
					sm-position="fixed"
					sm-top="6em"
					quarkly-title="Shadow"
				/>
				<Box
					quarkly-title="Header"
					display="flex"
					align-items="center"
					margin="0em 0em 1.67em 0em"
					height="2.5em"
				>
					<Link href="/gallery" display="flex" align-items="center" text-decoration-line="initial">
						<Icon
							margin="0px .33em 0px 0px"
							category="md"
							icon={MdKeyboardArrowLeft}
							color="--secondary"
							position="relative"
							top=".15em"
							size="1.5em"
						/>
						<Text
							color="--secondary"
							text-transform="uppercase"
							margin="0em 1em 0em 0em"
							flex="0 0 auto"
							top=".15em"
							quarkly-title="Title"
							font="--title"
							letter-spacing="-4%"
							position="relative"
						>
							back
						</Text>
					</Link>
					<Box
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) center right no-repeat scroll padding-box"
						position="relative"
						quarkly-title="Line"
						sm-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/line_2.svg?v=2020-11-24T13:11:49.285Z) 90% center no-repeat scroll padding-box"
						flex="1 1 auto"
						height="50px"
						overflow-x="hidden"
						overflow-y="hidden"
					/>
				</Box>
				<Box quarkly-title="Content" margin="0em 2.5em 0em 0em" sm-margin="0em .58em 0em 0em" md-margin="0em 1.67vw 0em 0em">
					<Text color="--secondary" margin="0 0px .5em 0" font="--header1">
						Сoncept_arts
					</Text>
					<Box
						md-grid-template-columns="repeat(auto-fill,minmax(25em,1fr))"
						sm-grid-template-columns="1fr"
						quarkly-title="Grid"
						display="grid"
						grid-template-columns="repeat(auto-fill,minmax(22.5em,1fr))"
						grid-gap="1.66em"
						lg-grid-template-columns="repeat(auto-fill,minmax(20em,1fr))"
					>
						<Components.ImageZoom>
							<Override slot="Preview Image" />
							<Override slot="LightBox Image" />
							<Override slot="Preview" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept7-preview-1x.png?v=2020-12-03T21:26:46.333Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept7-preview-2x.png?v=2020-12-03T21:27:09.684Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept7-preview-1x.png?v=2020-12-03T21:26:46.333Z 1x" />
							<Override slot="LightBox Image" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept7-lightbox-2x.png?v=2020-12-03T21:27:56.104Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept7-lightbox-1x.png?v=2020-12-03T21:27:33.727Z 1x" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept7-lightbox-1x.png?v=2020-12-03T21:27:33.727Z" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept6-preview-1x.png?v=2020-12-03T21:29:04.360Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept6-preview-2x.png?v=2020-12-03T21:29:24.929Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept6-preview-1x.png?v=2020-12-03T21:29:04.360Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept6-lightbox-1x.png?v=2020-12-03T21:29:41.254Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept6-lightbox-2x.png?v=2020-12-03T21:30:01.633Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept6-lightbox-1x.png?v=2020-12-03T21:29:41.254Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept5-preview-1x.png?v=2020-12-03T21:30:42.960Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept5-preview-2x.png?v=2020-12-03T21:31:07.665Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept5-preview-1x.png?v=2020-12-03T21:30:42.960Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept5-lightbox-1x.png?v=2020-12-03T21:31:28.995Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept5-lightbox-2x.png?v=2020-12-03T21:31:46.173Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept5-lightbox-1x.png?v=2020-12-03T21:31:28.995Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/10-lightbox-1x.png?v=2020-12-04T10:04:14.310Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/10-lightbox-2x.png?v=2020-12-04T10:04:28.811Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/10-lightbox-1x.png?v=2020-12-04T10:04:14.310Z 1x" />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/10-preview-1x.png?v=2020-12-04T10:03:28.208Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/10-preview-2x.png?v=2020-12-04T10:03:55.030Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/10-preview-1x.png?v=2020-12-04T10:03:28.208Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Preview Image" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept3-preview-2x.png?v=2020-12-03T21:33:43.404Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept3-preview-1x.png?v=2020-12-03T21:33:22.922Z 1x" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept3-preview-1x.png?v=2020-12-03T21:33:22.922Z" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept3-lightbox-1x.png?v=2020-12-03T21:34:00.387Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept3-lightbox-2x.png?v=2020-12-03T21:34:23.294Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept3-lightbox-1x.png?v=2020-12-03T21:34:00.387Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept2-preview-1x.png?v=2020-12-03T21:35:48.465Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept2-preview-2x.png?v=2020-12-03T21:37:35.361Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept2-preview-1x.png?v=2020-12-03T21:35:48.465Z 1x" />
							<Override slot="LightBox Image" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept2-lightbox-2x.png?v=2020-12-03T21:38:20.745Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept2-lightbox-1x.png?v=2020-12-03T21:38:01.817Z 1x" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept2-lightbox-1x.png?v=2020-12-03T21:38:01.817Z" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept1-lightbox-1x.png?v=2020-12-03T21:39:17.395Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept1-lightbox-2x.png?v=2020-12-03T21:39:34.334Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept1-lightbox-1x.png?v=2020-12-03T21:39:17.395Z 1x" />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept1-preview-1x.png?v=2020-12-03T21:38:38.894Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept1-preview-2x.png?v=2020-12-03T21:39:05.368Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept1-preview-1x.png?v=2020-12-03T21:38:38.894Z 1x" />
						</Components.ImageZoom>
					</Box>
				</Box>
			</Components.Main>
		</Box>
	</Theme>;
});