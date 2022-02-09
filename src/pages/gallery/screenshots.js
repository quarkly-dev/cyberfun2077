import React from "react";
import theme from "theme";
import { Theme, Box, Icon, Text, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"gallery/screenshots"} />
		<Helmet>
			<title>
				Screenshots
			</title>
			<meta name={"description"} content={"Game screenshots"} />
			<meta property={"og:title"} content={"Screenshots"} />
			<meta property={"og:description"} content={"Game screenshots"} />
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
				<Override slot="link2" color="--primary" pointer-events="none" cursor="default" />
			</Components.Side>
			<Components.Main>
				<Override
					slot="Wrapper"
					md-font="2vw/1 BlenderPro, sans-serif"
					padding="2em 0px 2em 1.67em"
					lg-font="1.5vw/1 BlenderPro, sans-serif"
					max-height="100vh"
					overflow-x="hidden"
					width="100%"
					sm-width="100%"
					overflow-y="auto"
					sm-padding=".92em 0em 1.58em 1.32em"
					flex="1 1 auto"
					min-height="100vh"
					font="1vw/1 BlenderPro, sans-serif"
					sm-position="relative"
					sm-font="4.5vw/1 BlenderPro, sans-serif"
					background="linear-gradient(90deg,#000000 0%,rgba(0,0,0,0) 50%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/bg-092e74bc_3.png?v=2020-11-25T13:12:51.485Z) top left/76.46em repeat-y scroll padding-box"
					box-sizing="border-box"
				/>
				<Box
					quarkly-title="Shadow"
					sm-top="6em"
					sm-right={0}
					sm-background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,--color-textDark 100%) 0% 0% /auto repeat scroll padding-box"
					sm-display="block"
					sm-position="fixed"
					sm-left={0}
					sm-height="6em"
					display="none"
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
							top=".15em"
							size="1.5em"
							margin="0px .33em 0px 0px"
							category="md"
							icon={MdKeyboardArrowLeft}
							color="--secondary"
							position="relative"
						/>
						<Text
							quarkly-title="Title"
							font="--title"
							letter-spacing="-4%"
							margin="0em 1em 0em 0em"
							position="relative"
							color="--secondary"
							text-transform="uppercase"
							flex="0 0 auto"
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
				<Box quarkly-title="Content" margin="0em 2.5em 0em 0em" sm-margin="0em .58em 0em 0em" md-margin="0em 1.67vw 0em 0em">
					<Text font="--header1" color="--secondary" margin="0 0 .5em 0">
						Sreenshots
					</Text>
					<Box
						display="grid"
						grid-template-columns="repeat(auto-fill,minmax(22.5em,1fr))"
						grid-gap="1.66em"
						lg-grid-template-columns="repeat(auto-fill,minmax(20em,1fr))"
						md-grid-template-columns="repeat(auto-fill,minmax(25em,1fr))"
						sm-display="block"
						quarkly-title="Grid"
					>
						<Components.ImageZoom>
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot1-preview-1x.png?v=2020-12-03T22:02:48.414Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot1-preview-2x.png?v=2020-12-03T22:03:13.696Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot1-preview-1x.png?v=2020-12-03T22:02:48.414Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot1-lightbox-1x.png?v=2020-12-03T22:03:38.994Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot1-lightbox-2x.png?v=2020-12-03T22:03:54.526Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot1-lightbox-1x.png?v=2020-12-03T22:03:38.994Z 1x" />
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" icon={AiOutlinePlus} category="ai" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot5-preview-1x.png?v=2020-12-03T21:06:39.822Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot5-preview-2x.png?v=2020-12-03T21:07:50.347Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot5-preview-1x.png?v=2020-12-03T21:06:39.822Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot5-lightbox-1x.png?v=2020-12-03T21:08:34.064Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot5-lightbox-2x.png?v=2020-12-03T21:08:58.386Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot5-lightbox-1x.png?v=2020-12-03T21:08:34.064Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot2-preview-1x.png?v=2020-12-03T21:09:21.015Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot2-preview-2x.png?v=2020-12-03T21:09:46.688Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot2-preview-1x.png?v=2020-12-03T21:09:21.015Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot2-lightbox-1x.png?v=2020-12-03T21:10:03.909Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot2-lightbox-2x.png?v=2020-12-03T21:10:24.769Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot2-lightbox-1x.png?v=2020-12-03T21:10:03.909Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot6-preview-1x.png?v=2020-12-03T21:10:48.555Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot6-preview-2x.png?v=2020-12-03T21:11:12.507Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot6-preview-1x.png?v=2020-12-03T21:10:48.555Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot6-lightbox-1x.png?v=2020-12-03T21:11:32.462Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot6-lightbox-2x.png?v=2020-12-03T21:11:49.388Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot6-lightbox-1x.png?v=2020-12-03T21:11:32.462Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot3-lightbox-1x.png?v=2020-12-03T21:15:25.879Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot3-lightbox-2x.png?v=2020-12-03T21:16:31.202Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot3-lightbox-1x.png?v=2020-12-03T21:15:25.879Z 1x" />
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot3-preview-1x.png?v=2020-12-03T21:12:39.416Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot3-preview-2x.png?v=2020-12-03T21:13:03.754Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot3-preview-1x.png?v=2020-12-03T21:12:39.416Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot7-preview-1x.png?v=2020-12-03T21:17:38.473Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot7-preview-2x.png?v=2020-12-03T21:18:04.269Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot7-preview-1x.png?v=2020-12-03T21:17:38.473Z 1x" />
							<Override slot="LightBox Image" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot7-lightbox-2x.png?v=2020-12-03T21:18:49.440Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot7-lightbox-1x.png?v=2020-12-03T21:18:24.252Z 1x" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot7-lightbox-1x.png?v=2020-12-03T21:18:24.252Z" />
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot8-lightbox-1x.png?v=2020-12-03T21:19:50.408Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot8-lightbox-2x.png?v=2020-12-03T21:20:10.515Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot8-lightbox-1x.png?v=2020-12-03T21:19:50.408Z 1x" />
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot8-preview-1x.png?v=2020-12-03T21:19:12.119Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot8-preview-2x.png?v=2020-12-03T21:19:31.275Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot8-preview-1x.png?v=2020-12-03T21:19:12.119Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot4-preview-1x.png?v=2020-12-03T21:20:24.788Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot4-preview-2x.png?v=2020-12-03T21:20:45.074Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot4-preview-1x.png?v=2020-12-03T21:20:24.788Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot4-lightbox-1x.png?v=2020-12-03T21:21:19.717Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot4-lightbox-2x.png?v=2020-12-03T21:21:39.986Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/screenshot4-lightbox-1x.png?v=2020-12-03T21:21:19.717Z 1x" />
						</Components.ImageZoom>
					</Box>
				</Box>
			</Components.Main>
		</Box>
	</Theme>;
});