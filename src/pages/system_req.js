import React from "react";
import theme from "theme";
import { Theme, Text, Box, Image, Link, Em, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"system_req"} />
		<Helmet>
			<title>
				System requirments
			</title>
			<meta name={"description"} content={"System requirements for computers"} />
			<meta property={"og:title"} content={"System requirments"} />
			<meta property={"og:description"} content={"System requirements for computers"} />
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
			font="1vw/1 BlenderPro, sans-serif"
			sm-flex-direction="column"
			sm-max-height="100vh"
			background="--dark"
			quarkly-title="Page"
			display="flex"
		>
			<Components.Side>
				<Override slot="link5" color="--primary" pointer-events="none" cursor="default" />
			</Components.Side>
			<Components.Main>
				<Box
					align-items="center"
					margin="0em 0em 1.67em 0em"
					height="2.5em"
					quarkly-title="Header"
					display="flex"
				>
					<Text
						flex="0 0 auto"
						top=".15em"
						quarkly-title="Title"
						text-transform="uppercase"
						margin="0em 1em 0em 0em"
						position="relative"
						font="--title"
						color="--secondary"
						letter-spacing="-4%"
					>
						System Requirements
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
				<Box
					quarkly-title="Content"
					margin="2.5em 2.5em 5em 0em"
					sm-margin="0em .58em 0em 0em"
					display="flex"
					justify-content="center"
				>
					<Box max-width="52em" position="relative" quarkly-title="Article">
						<Text sm-font="400 2.8em/1 BlenderPro, sans-serif" font="--header1" color="--secondary" margin="0 0 0.27em 0">
							Cyberpunk 2077 gets new, more detailed system requirements
						</Text>
						<Text font="--header6" color="--textGray" margin="0 0 2em 0">
							<Text margin="0 0.5em 0 0" color="--secondary" display="inline-block">
								By Tom Marks
							</Text>
							Posted: 19 Nov 2020 8:30 pm
						</Text>
						<Image
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/shotweaponman.png?v=2020-12-09T08:46:41.927Z"
							object-fit="contain"
							display="flex"
							width="100%"
							font="--paragraph"
							margin="0 0 .5em 0"
						/>
						<Text margin="0 0 2.6em 0" font="--paragraph" color="--textGray">
							<br />
							<br />
							In September, CD Projekt announced the basic system requirements for{" "}
							<Link
								text-indent="0"
								hyphens="manual"
								text-decoration-line="initial"
								href="https://www.pcgamer.com/cyberpunk-2077-release-date-gameplay-video-character-creation-story/"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-overflow="clip"
								color="--secondary"
							>
								Cyberpunk 2077
							</Link>
							{" "}in the form of minimum and recommended specs that broke down, in simple terms, what sort of rig you'll need to play. But today, courtesy of global community lead{" "}
							<Link
								overflow-wrap="normal"
								hyphens="manual"
								color="--secondary"
								text-decoration-line="initial"
								href="https://twitter.com/Marcin360/status/1329815926871633922"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
							>
								Marcin Momot
							</Link>
							, we've got the{" "}
							<Em
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								overflow-wrap="normal"
							>
								details
							</Em>
							.
							<br />
							<br />
							And I do mean details: CD Projekt has delivered no fewer than seven configurations ranging from your basic 1080p low-ender to the ray tracing-enabled ultra-beast of the Cybergods. Behold!
							<br />
							<br />
							<br />
							<Strong
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
								overflow-wrap="normal"
								word-break="normal"
							>
								Minimum (1080p, low settings)
							</Strong>
							<br />
							<br />
							OS: Windows 7 64-bit
							<br />
							CPU: Intel Core i5-3570K or AMD FX-8310
							<br />
							RAM: 8GB
							<br />
							GPU: Nvidia GTX 780 or AMD Radeon RX 470
							<br />
							VRAM: 3GB
							<br />
							Storage: 70GB HDD
							<br />
							<br />
							<Strong
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
								overflow-wrap="normal"
							>
								<br />
								<br />
								Recommended (1080p, high settings)
							</Strong>
							<br />
							<br />
							OS: Windows 10 64-bit
							<br />
							CPU: Intel Core i7-4790 or AMD Ryzen 3 3200G
							<br />
							RAM: 12GB
							<br />
							GPU: Nvidia GTX 1060 6GB/GTX 1660 Super or AMD Radeon RX 470
							<br />
							VRAM: 6GB
							<br />
							Storage: 70GB SSD
							<br />
							<br />
							<Strong
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
							>
								<br />
								High (1440p, ultra settings)
							</Strong>
							<br />
							<br />
							OS: Windows 10 64-bit
							<br />
							CPU: Intel Core i7-4790 or AMD Ryzen 3 3200G
							<br />
							RAM: 12GB
							<br />
							GPU: Nvidia RTX 2060 or AMD Radeon RX 5700XT
							<br />
							VRAM: 6GB
							<br />
							Storage: 70GB SSD
							<br />
							<br />
							<Strong
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
								overflow-wrap="normal"
							>
								<br />
								Ultra (2160p, ultra settings)
							</Strong>
							<br />
							<br />
							OS: Windows 10 64-bit
							<br />
							CPU: Intel Core i7-4790 or AMD Ryzen 5 3600
							<br />
							RAM: 16GB
							<br />
							GPU: Nvidia RTX 2080S/RTX 3070 or AMD Radeon RX 6800 XT
							<br />
							VRAM: 8GB
							<br />
							Storage: 70GB SSD
						</Text>
						<Components.Twitter tweet="1329815926871633922" />
						<Text font="--paragraph" color="--textGray" margin="0 0 2.6em 0">
							<br />
							<br />
							<Strong
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
							>
								Ray Tracing Minimum (1080p, RT medium settings)
							</Strong>
							<br />
							<br />
							OS: Windows 10 64-bit
							<br />
							CPU: Intel Core i7-4790 or AMD Ryzen 3 3200G
							<br />
							RAM: 16GB
							<br />
							GPU: Nvidia RTX 2060
							<br />
							VRAM: 6GB
							<br />
							Storage: 70GB SSD
							<br />
							<Strong
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
							>
								<br />
								<br />
								Ray Tracing High (1440p, RT ultra settings)
								<br />
							</Strong>
							<br />
							OS: Windows 10 64-bit
							<br />
							CPU: Intel Core i7-6700 or AMD Ryzen 5 3600
							<br />
							RAM: 16GB
							<br />
							GPU: Nvidia RTX 3070
							<br />
							VRAM: 8GB
							<br />
							Storage: 70GB SSD
							<br />
							<br />
							<br />
							<Strong
								hyphens="manual"
								color="--secondary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
							>
								Ray Tracing Ultra (2160p, RT ultra settings)
								<br />
							</Strong>
							<br />
							OS: Windows 10 64-bit
							<br />
							CPU: Intel Core i7-6700 or AMD Ryzen 5 3600
							<br />
							RAM: 16GB
							<br />
							GPU: Nvidia RTX 3080
							<br />
							VRAM: 10GB
							<br />
							Storage: 70GB SSD
							<br />
							<br />
							CD Projekt has been working with Nvidia on Cyberpunk 2077, but the game uses Microsoft's DirectX Raytracing API as the basis for the game's RT implementation and so it should work fine on AMD's RX 6000-series graphics cards, too.{" "}
						</Text>
					</Box>
				</Box>
			</Components.Main>
		</Box>
	</Theme>;
});