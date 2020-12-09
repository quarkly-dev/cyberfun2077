import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Em, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				System requirments
			</title>
			<meta name={"description"} content={"System requirements for computers"} />
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
				<Override slot="link5" color="--primary" pointer-events="none" cursor="default" />
			</Components.Side>
			<Components.Main>
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
						System Requirements
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
				<Box
					quarkly-title="Content"
					margin="2.5em 2.5em 5em 0em"
					sm-margin="0em .58em 0em 0em"
					display="flex"
					justify-content="center"
				>
					<Box quarkly-title="Article" max-width="52em" position="relative">
						<Text font="--header1" color="--secondary" margin="0 0 0.27em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							Cyberpunk 2077 gets new, more detailed system requirements
						</Text>
						<Text font="--header6" color="--textGray" margin="0 0 2em 0">
							<Text color="--secondary" display="inline-block" margin="0 0.5em 0 0">
								By Tom Marks
							</Text>
							Posted: 19 Nov 2020 8:30 pm
						</Text>
						<Image
							width="100%"
							font="--paragraph"
							margin="0 0 .5em 0"
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/shotweaponman.png?v=2020-12-09T08:46:41.927Z"
							object-fit="contain"
							display="flex"
						/>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.6em 0">
							<br />
							<br />
							In September, CD Projekt announced the basic system requirements for{" "}
							<Link
								href="https://www.pcgamer.com/cyberpunk-2077-release-date-gameplay-video-character-creation-story/"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
								text-decoration-line="initial"
							>
								Cyberpunk 2077
							</Link>
							{" "}in the form of minimum and recommended specs that broke down, in simple terms, what sort of rig you'll need to play. But today, courtesy of global community lead{" "}
							<Link
								href="https://twitter.com/Marcin360/status/1329815926871633922"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
								text-decoration-line="initial"
							>
								Marcin Momot
							</Link>
							, we've got the{" "}
							<Em
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
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
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
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
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
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
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
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
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
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
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
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
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
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
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
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