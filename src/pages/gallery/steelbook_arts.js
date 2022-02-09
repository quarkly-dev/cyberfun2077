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
		<GlobalQuarklyPageStyles pageUrl={"gallery/steelbook_arts"} />
		<Helmet>
			<title>
				Steelbook arts
			</title>
			<meta name={"description"} content={"game arts"} />
			<meta property={"og:title"} content={"Steelbook arts"} />
			<meta property={"og:description"} content={"game arts"} />
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
			sm-flex-direction="column"
		>
			<Components.Side>
				<Override slot="link2" color="--primary" pointer-events="none" cursor="default" />
			</Components.Side>
			<Components.Main>
				<Override
					slot="Wrapper"
					max-height="100vh"
					overflow-x="hidden"
					sm-width="100%"
					background="linear-gradient(90deg,#000000 0%,rgba(0,0,0,0) 50%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/bg-092e74bc_3.png?v=2020-11-25T13:12:51.485Z) top left/76.46em repeat-y scroll padding-box"
					box-sizing="border-box"
					min-height="100vh"
					font="1vw/1 BlenderPro, sans-serif"
					overflow-y="auto"
					flex="1 1 auto"
					md-font="2vw/1 BlenderPro, sans-serif"
					lg-font="1.5vw/1 BlenderPro, sans-serif"
					sm-padding=".92em 0em 1.58em 1.32em"
					padding="2em 0px 2em 1.67em"
					sm-position="relative"
					sm-font="4.5vw/1 BlenderPro, sans-serif"
					width="100%"
				/>
				<Box
					display="none"
					sm-display="block"
					quarkly-title="Shadow"
					sm-top="6em"
					sm-left={0}
					sm-right={0}
					sm-position="fixed"
					sm-height="6em"
					sm-background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0) 0%,--color-textDark 100%) 0% 0% /auto repeat scroll padding-box"
				/>
				<Box
					align-items="center"
					margin="0em 0em 1.67em 0em"
					height="2.5em"
					quarkly-title="Header"
					display="flex"
				>
					<Link align-items="center" text-decoration-line="initial" href="/gallery" display="flex">
						<Icon
							position="relative"
							top=".15em"
							size="1.5em"
							margin="0px .33em 0px 0px"
							category="md"
							icon={MdKeyboardArrowLeft}
							color="--secondary"
						/>
						<Text
							font="--title"
							color="--secondary"
							flex="0 0 auto"
							position="relative"
							quarkly-title="Title"
							text-transform="uppercase"
							letter-spacing="-4%"
							margin="0em 1em 0em 0em"
							top=".15em"
						>
							back
						</Text>
					</Link>
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
				<Box sm-margin="0em .58em 0em 0em" md-margin="0em 1.67vw 0em 0em" quarkly-title="Content" margin="0em 2.5em 0em 0em">
					<Text font="--header1" color="--secondary" margin="0 0 .5em 0">
						Steelbook_arts
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
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2-preview-1x.png?v=2020-12-04T09:51:54.737Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2-preview-2x.png?v=2020-12-04T09:53:29.323Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2-preview-1x.png?v=2020-12-04T09:51:54.737Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2-lightbox-1x.png?v=2020-12-04T10:01:55.183Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2-lightbox-2x.png?v=2020-12-04T10:02:15.121Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2-lightbox-1x.png?v=2020-12-04T10:01:55.183Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook3-lightbox-1x.png?v=2020-12-03T21:56:09.238Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook3-lightbox-2x.png?v=2020-12-03T21:56:25.953Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook3-lightbox-1x.png?v=2020-12-03T21:56:09.238Z 1x" />
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook3-preview-1x.png?v=2020-12-03T21:55:40.151Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook3-preview-2x.png?v=2020-12-03T21:55:55.432Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook3-preview-1x.png?v=2020-12-03T21:55:40.151Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook4-preview-2x.png?v=2020-12-03T21:57:33.585Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook4-preview-1x.png?v=2020-12-03T21:56:55.805Z 1x" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook4-preview-1x.png?v=2020-12-03T21:56:55.805Z" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook4-lightbox-1x.png?v=2020-12-03T21:57:50.375Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook4-lightbox-2x.png?v=2020-12-03T21:58:05.403Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook4-lightbox-1x.png?v=2020-12-03T21:57:50.375Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/6-preview-1x.png?v=2020-12-04T09:45:19.945Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/6-preview-2x.png?v=2020-12-04T09:45:40.512Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/6-preview-1x.png?v=2020-12-04T09:45:19.945Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/6-lightbox-1x.png?v=2020-12-04T09:45:55.488Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/6-lightbox-2x.png?v=2020-12-04T09:46:08.941Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/6-lightbox-1x.png?v=2020-12-04T09:45:55.488Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/11-preview-1x.png?v=2020-12-04T09:58:12.815Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/11-preview-2x.png?v=2020-12-04T09:58:29.991Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/11-preview-1x.png?v=2020-12-04T09:58:12.815Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/11-lightbox-1x.png?v=2020-12-04T09:58:42.129Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/11-lightbox-2x.png?v=2020-12-04T09:58:54.710Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/11-lightbox-1x.png?v=2020-12-04T09:58:42.129Z 1x" />
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/12-preview-2x.png?v=2020-12-04T09:59:23.768Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/12-preview-1x.png?v=2020-12-04T09:59:08.332Z 1x" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/12-preview-1x.png?v=2020-12-04T09:59:08.332Z" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/12-lightbox-1x.png?v=2020-12-04T09:59:38.428Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/12-lightbox-2x.png?v=2020-12-04T09:59:52.967Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/12-lightbox-1x.png?v=2020-12-04T09:59:38.428Z 1x" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook1-preview-1x.png?v=2020-12-03T21:54:28.348Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook1-preview-2x.png?v=2020-12-03T21:54:46.523Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook1-preview-1x.png?v=2020-12-03T21:54:28.348Z 1x" />
							<Override slot="LightBox Image" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook1-lightbox-2x.png?v=2020-12-03T21:55:14.438Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook1-lightbox-1x.png?v=2020-12-03T21:55:00.430Z 1x" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/steelbook1-lightbox-1x.png?v=2020-12-03T21:55:00.430Z" />
						</Components.ImageZoom>
						<Components.ImageZoom>
							<Override slot="Card Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/Rectangle%2080.png?v=2020-12-02T11:07:54.818Z" />
							<Override slot="Card Icon" category="ai" icon={AiOutlinePlus} />
							<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3-preview-1x.png?v=2020-12-04T09:56:32.452Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3-preview-2x.png?v=2020-12-04T09:57:16.098Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3-preview-1x.png?v=2020-12-04T09:56:32.452Z 1x" />
							<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3-lightbox-1x.png?v=2020-12-04T09:57:28.960Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3-lightbox-2x.png?v=2020-12-04T09:57:43.780Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3-lightbox-1x.png?v=2020-12-04T09:57:28.960Z 1x" />
						</Components.ImageZoom>
					</Box>
				</Box>
			</Components.Main>
		</Box>
	</Theme>;
});