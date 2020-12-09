import React from "react";
import theme from "theme";
import { Theme, Link, Box, Icon, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Wallpapers
			</title>
			<meta name={"description"} content={"Game wallpapers"} />
			<meta property={"og:title"} content={"Wallpapers"} />
			<meta property={"og:description"} content={"Game wallpapers"} />
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
					min-height="100vh"
					md-font="2vw/1 BlenderPro, sans-serif"
					lg-font="1.5vw/1 BlenderPro, sans-serif"
					font="1vw/1 BlenderPro, sans-serif"
					max-height="100vh"
					overflow-x="hidden"
					overflow-y="auto"
					sm-position="relative"
					sm-padding=".92em 0em 1.58em 1.32em"
					sm-font="4.5vw/1 BlenderPro, sans-serif"
					width="100%"
					sm-width="100%"
					background="linear-gradient(90deg,#000000 0%,rgba(0,0,0,0) 50%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/bg-092e74bc_3.png?v=2020-11-25T13:12:51.485Z) top left/76.46em repeat-y scroll padding-box"
					box-sizing="border-box"
					padding="2em 0px 2em 1.67em"
					flex="1 1 auto"
				/>
				<Box
					quarkly-title="Shadow"
					sm-position="fixed"
					sm-top="6em"
					sm-left={0}
					sm-right={0}
					sm-height="6em"
					display="none"
					sm-background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,--color-textDark 100%) 0% 0% /auto repeat scroll padding-box"
					sm-display="block"
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
				<Box quarkly-title="Content" margin="0em 2.5em 0em 0em" sm-margin="0em .58em 0em 0em" md-margin="0em 1.67vw 0em 0em">
					<Text font="--header1" color="--secondary" margin="0 0 .5em 0">
						Wallpapers
					</Text>
					<Box
						quarkly-title="Grid"
						display="grid"
						grid-template-columns="repeat(auto-fill,minmax(22.5em,1fr))"
						grid-gap="1.66em"
						lg-grid-template-columns="repeat(auto-fill,minmax(20em,1fr))"
						md-grid-template-columns="repeat(auto-fill,minmax(25em,1fr))"
						sm-display="block"
					>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper7-preview-1x.png?v=2020-12-03T21:41:29.773Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper7-preview-2x.png?v=2020-12-03T21:41:51.338Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper7-preview-1x.png?v=2020-12-03T21:41:29.773Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper7-lightbox-1x.png?v=2020-12-03T21:42:05.153Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper7-lightbox-2x.png?v=2020-12-03T21:42:22.695Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper7-lightbox-1x.png?v=2020-12-03T21:42:05.153Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper4-preview-1x.png?v=2020-12-03T21:42:36.890Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper4-preview-2x.png?v=2020-12-03T21:42:57.489Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper4-preview-1x.png?v=2020-12-03T21:42:36.890Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper4-lightbox-1x.png?v=2020-12-03T21:43:21.266Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper4-lightbox-2x.png?v=2020-12-03T21:43:41.558Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper4-lightbox-1x.png?v=2020-12-03T21:43:21.266Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper6-preview-1x.png?v=2020-12-03T21:43:57.685Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper6-preview-2x.png?v=2020-12-03T21:44:13.032Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper6-preview-1x.png?v=2020-12-03T21:43:57.685Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper6-lightbox-1x.png?v=2020-12-03T21:44:32.948Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper6-lightbox-2x.png?v=2020-12-03T21:44:54.505Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper6-lightbox-1x.png?v=2020-12-03T21:44:32.948Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper5-preview-1x.png?v=2020-12-03T21:45:29.959Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper5-preview-2x.png?v=2020-12-03T21:45:47.944Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper5-preview-1x.png?v=2020-12-03T21:45:29.959Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper5-lightbox-1x.png?v=2020-12-03T21:46:13.413Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper5-lightbox-2x.png?v=2020-12-03T21:46:31.635Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper5-lightbox-1x.png?v=2020-12-03T21:46:13.413Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper3-preview-1x.png?v=2020-12-03T21:48:05.447Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper3-preview-2x.png?v=2020-12-03T21:48:26.673Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper3-preview-1x.png?v=2020-12-03T21:48:05.447Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper3-lightbox-1x.png?v=2020-12-03T21:49:03.795Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper3-lightbox-2x.png?v=2020-12-03T21:49:22.374Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper3-lightbox-1x.png?v=2020-12-03T21:49:03.795Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper2-preview-1x.png?v=2020-12-03T21:50:10.384Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper2-preview-1x.png?v=2020-12-03T21:50:10.384Z 1x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper2-preview-2x.png?v=2020-12-03T21:50:10.386Z 2x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper2-lightbox-1x.png?v=2020-12-03T21:51:15.421Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper2-lightbox-2x.png?v=2020-12-03T21:51:31.687Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper2-lightbox-1x.png?v=2020-12-03T21:51:15.421Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper1-preview-1x.png?v=2020-12-03T21:51:52.029Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper1-preview-2x.png?v=2020-12-03T21:52:08.941Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper1-preview-1x.png?v=2020-12-03T21:51:52.029Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper1-lightbox-1x.png?v=2020-12-03T21:52:29.201Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper1-lightbox-2x.png?v=2020-12-03T21:52:48.214Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/wallpaper1-lightbox-1x.png?v=2020-12-03T21:52:29.201Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/1-preview-1x.png?v=2020-12-04T09:43:40.462Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/1-preview-2x.png?v=2020-12-04T09:44:07.185Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/1-preview-1x.png?v=2020-12-04T09:43:40.462Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/1-lightbox-1x.png?v=2020-12-04T09:44:24.219Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/1-lightbox-2x.png?v=2020-12-04T09:44:39.430Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/1-lightbox-1x.png?v=2020-12-04T09:44:24.219Z 1x" />
						</Components.ImageZoom>
					</Box>
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