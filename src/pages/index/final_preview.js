import React from "react";
import theme from "theme";
import { Theme, Icon, Text, Link, Box, Span, Em, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/final_preview"} />
		<Helmet>
			<title>
				Final Preview
			</title>
			<meta name={"description"} content={"Full overview and game review"} />
			<meta property={"og:title"} content={"Final Preview"} />
			<meta property={"og:description"} content={"Full overview and game review"} />
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
			display="flex"
			font="1vw/1 BlenderPro, sans-serif"
			sm-flex-direction="column"
			sm-max-height="100vh"
			background="--dark"
			quarkly-title="Page"
		>
			<Components.Side>
				<Override slot="link" cursor="default" color="--primary" pointer-events="none" />
			</Components.Side>
			<Components.Main>
				<Box
					margin="0em 0em 1.67em 0em"
					height="2.5em"
					quarkly-title="Header"
					display="flex"
					align-items="center"
				>
					<Link align-items="center" text-decoration-line="initial" href="/index" display="flex">
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
							color="--secondary"
							text-transform="uppercase"
							letter-spacing="-4%"
							margin="0em 1em 0em 0em"
							position="relative"
							flex="0 0 auto"
							top=".15em"
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
				<Box
					sm-margin="2.5em .58em 2.5em 0em"
					quarkly-title="Content"
					margin="2.5em 2.5em 5em 0em"
					display="flex"
					justify-content="center"
					md-margin="2.5em 2.5em 3.75em 0em"
				>
					<Box quarkly-title="Article" max-width="52em" position="relative">
						<Text sm-font="400 2.8em/1 BlenderPro, sans-serif" font="--header1" color="--secondary" margin="0 0 .5em 0">
							Cyberpunk 2077: The Final Preview
						</Text>
						<Box margin="0px 0px 1em 0px" align-items="center" display="flex" justify-content="space-between">
							<Text font="--header6" color="--textGray" margin="0 0 0 0">
								<Text display="inline-block" margin="0 0.5em 0 0">
									By{" "}
									<Span
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										color="--secondary"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
									>
										Tom Marks
									</Span>
								</Text>
								Posted: 19 Nov 2020 8:30 pm
							</Text>
							<Link
								href="https://www.ign.com/articles/cyberpunk-2077-the-final-preview"
								font="--paragraph"
								color="--secondary"
								margin="0 0 0 0"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								Source
							</Link>
						</Box>
						<Components.Video margin="0px 0px 1.5em 0px" />
						<Text color="--textGray" margin="0 0 2.5em 0" font="--paragraph">
							It took me roughly six hours of playing to reach{" "}
							<Link
								href="https://www.ign.com/games/cyberpunk-2077"
								overflow-wrap="normal"
								word-break="normal"
								text-indent="0"
								hyphens="manual"
								text-decoration-line="initial"
								white-space="normal"
								text-overflow="clip"
								color="--secondary"
								hover-text-decoration-line="underline"
								target="_blank"
							>
								Cyberpunk 2077’s
							</Link>
							{" "}opening title card. That was six hours of the 16 I got to play earlier this week, and even after countless adrenaline-filled shootouts, compelling conversations, and weirdly abundant dildos, I feel like I only just started to scratch below the surface of what’s here. Night City is dense and stunning, and this mammoth RPG is packed with a multitude of mechanics to explore and a copious amount of choice in doing so. As with any game this ambitious and broad, some parts do shine brighter than others (and the frequent bugs in this still-in-development build made me glad it didn’t launch today as{" "}
							<Link
								color="--secondary"
								text-decoration-line="initial"
								href="https://www.ign.com/articles/cyberpunk-2077-delayed-until-december"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-overflow="clip"
								hyphens="manual"
								target="_blank"
								text-indent="0"
								hover-text-decoration-line="underline"
							>
								previously planned
							</Link>
							) – but once Cyberpunk 2077 kicked off in earnest, it{" "}
							<Em
								hyphens="manual"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
							>
								clicked
							</Em>
							, and now I just want more.
							<br />
							<br />
							Ahead of its launch on December 10, developer CD Projekt Red let me go hands-on for a full 16 hours spread across two days – I started from the very beginning, picking from{" "}
							<Link
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hover-text-decoration-line="underline"
								href="https://www.ign.com/wikis/cyberpunk-2077/Life_Path_Guide_and_Differences"
								overflow-wrap="normal"
								text-decoration-line="initial"
								target="_blank"
								hyphens="manual"
								color="--secondary"
							>
								its three lifepaths
							</Link>
							{" "}(I went Corpo, which IGN’s Ryan McCaffrey talked about in a bit more detail in{" "}
							<Link
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
								text-decoration-line="initial"
								target="_blank"
								href="https://www.ign.com/articles/cyberpunk-2077-hands-on-preview-what-we-think-after-4-hours-in-night-city"
								word-break="normal"
								white-space="normal"
								hover-text-decoration-line="underline"
								overflow-wrap="normal"
							>
								his preview
							</Link>
							{" "}back in June) and making my own character, with no restrictions on what I could do beyond the time it would take to do it. At first I thought 16 hours was an almost excessive amount of time for a preview (not that I was complaining), but Cyberpunk 2077 is a surprisingly slow burn with an immense amount of options and depth. I only truly got a grasp of its pace and structure by the end of that first day, and spent the second settling into what 2020’s most anticipated game actually felt like to play.
						</Text>
						<Image
							src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/pank.jpg?v=2020-12-04T15:06:47.736Z"
							object-fit="contain"
							display="flex"
							width="100%"
							font="--paragraph"
							margin="0 0 .5em 0"
						/>
						<Box
							display="grid"
							grid-template-columns="repeat(4, 1fr)"
							grid-gap=".5em"
							margin="0px 0px 1.5em 0px"
							font="--paragraph"
						>
							<Components.ImageZoom>
								<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2-girlt.png?v=2020-12-07T15:36:34.256Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2@2x-girlt.png?v=2020-12-07T15:36:41.806Z 2x" />
								<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2-girlmax.png?v=2020-12-07T15:42:22.510Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/2@2x-girlmax.png?v=2020-12-07T15:42:34.558Z 2x" />
								<Override slot="Preview Icon" font="500 .75em/29.952px BlenderPro, sans-serif" />
							</Components.ImageZoom>
							<Components.ImageZoom>
								<Override slot="Preview Icon" font="500 .75em/29.952px BlenderPro, sans-serif" />
								<Override slot="Preview Image" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3@2x-band.png?v=2020-12-07T15:37:03.835Z 2x" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3-band.png?v=2020-12-07T15:36:53.906Z" />
								<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3-bandmax.png?v=2020-12-07T15:42:47.988Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/3@2x-bandmax.png?v=2020-12-07T15:42:58.606Z 2x" />
							</Components.ImageZoom>
							<Components.ImageZoom>
								<Override slot="Preview Icon" font="500 .75em/29.952px BlenderPro, sans-serif" />
								<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/4-blue.png?v=2020-12-07T15:37:11.667Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/4@2x-blue.png?v=2020-12-07T15:37:20.597Z 2x" />
								<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/4-bluemax.png?v=2020-12-07T15:43:12.685Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/4@2x-bluemax.png?v=2020-12-07T15:43:24.534Z 2x" />
							</Components.ImageZoom>
							<Components.ImageZoom>
								<Override slot="Preview Icon" font="500 .75em/29.952px BlenderPro, sans-serif" />
								<Override slot="Preview Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/5-pinkmax.png?v=2020-12-07T15:43:34.544Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/5@2x-pinkmax.png?v=2020-12-07T15:43:42.751Z 2x" />
								<Override slot="LightBox Image" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/pinklightbox.png?v=2020-12-08T15:58:38.359Z" srcSet="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/5@2x-min%20pinklightbox.png?v=2020-12-08T15:58:56.089Z 1x" />
							</Components.ImageZoom>
						</Box>
						<Text color="--textGray" margin="0 0 2.5em 0" font="--paragraph">
							To assuage any spoiler concerns, I am going to avoid specific story reveals or points here, but I will be referencing the path of the overall plot. The prologue that makes up those first hours is essentially a microcosm of the game itself, introducing you to both your character, named V, and the futuristic yet familiar world around them. It teaches you how to explore, how to fight, how to sneak, and how there are plenty of different ways to approach a given situation – but while it’s all enjoyable enough, it wasn’t until the end of that prologue (and a phenomenal spoilery sequence right after) that Cyberpunk 2077 really sank its hooks into me. It’s a slow walk to get there, but all that setup makes the scenario you are eventually thrust into that much more riveting, and after that it didn’t take long at all to get me fully invested in its larger story.
							<br />
							<br />
							From there, Night City opens up wide. You’re kicked into the world with a very specific motivation, a couple of leads toward it, and a list of side quests already so long you could spend days before you even glance at the main questlines (though you would be doing yourself a disservice if you did so, as the story missions were some of my favorite). While quests will send you into specific buildings you might otherwise not be able to enter and certain districts are more dangerous than others, Night City itself is seemingly unrestricted – and when you enter a new neighborhood for the first time you’ll immediately get a call from a Fixer (basically a middleman for mercs) and additional things to do there will automatically start filling up your map.
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							Cyberpunk 2077 is a surprisingly slow burn with an immense amount of options and depth.
						</Text>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							These can range from locations where the NCPD simply needs someone to deal with a few gang members, to items or data that needs retrieving, to more elaborate missions that could span multiple areas – and that’s in addition to your story-driven main questlines, the more personal side missions that break off of them, and niche activities like bare-knuckle boxing fights or finding special murals hidden around. Cyberpunk 2077 hands you a shopping list of stuff and just says “go,” and it’s empowering in a way only open-world RPGs can really enable.
							<br />
							<br />
							The stories being told were largely pretty great too. The smaller stuff can be quick and forgettable, but I am incredibly excited to see how the main plot plays out, both in a grand sense and with specific, impressively acted characters I’ve already grown attached to. Side missions were also often a lot of fun – whether they be conflict-filled ones about raiding enemy buildings, silly ones like tracking down rogue AI taxis, or even a genuinely touching one about going to the funeral of a friend. This is a game that's willing to have intimate, human moments in a world filled with excess and flash, which I appreciated greatly. It’s impossible to say how that quality will hold up over what appears to be a downright massive campaign, but I really enjoyed what I’ve seen so far, from the city-wide threats to the small scale favors.
						</Text>
						<Components.Video margin="0px 0px 1.5em 0px" video="yhj4qlItES0" />
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Unfortunately, like I said before, with a game this broad, there are bound to be some rough edges – and while the quests themselves are entertaining, the way they are managed is probably one of the roughest things I saw. Cyberpunk 2077’s quest log is a big messy list, and figuring out which of your many quests to pursue next is a hassle for a few reasons: there’s no indication of the XP, money, items, or Street Cred a quest will reward; no sense of how difficult a quest will be beyond a vague “Danger” descriptor like “Moderate,” “High,” or “Very High,” when an actual level number would have let me decide if I should try to punch slightly above my weight or not; and there's little convenient way to tell what’s near you beyond tracking a quest and then tabbing over to the incredibly busy map to see if the waypoint is close by. Generally whatever I picked was enjoyable, but if it’s going to give me this many things to do then I wish there were better tools to inform my decisions about the order to do them.
							<br />
							<br />
							Thankfully, one of my favorite things to do in Cyberpunk 2077 didn’t involve the menu at all: just{" "}
							<Em>
								drive
							</Em>
							. Simply put, Night City is stunning, and I don’t think I’ve ever seen another video game city even close to it in scope or style. It’s gorgeous, rich in detail, and with a verticality and scale that’s genuinely amazing, all while still feeling like it could be a real place. No, you can’t just enter any building or go through every single floor of the ones you can – that’s not the unrealistically high bar it’s trying to hit. But there is still so much to see here, and so many different places for missions to send you. Districts can also be impressively varied visually, and even though a fast travel system is available I honestly felt like I was missing out by using it. We’ll see how long that lasts in the grand scheme of things, but this compact (but still very large) map layout works to Cyberpunk 2077’s advantage when a fast travel load screen might be only somewhat shorter than a drive anyway, and with a far worse view.
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							I don't think I've ever seen another game city quite as stunning as Night City.
						</Text>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							If there’s perhaps one thing I want you to take away from this preview, it’s how different Cyberpunk 2077 feels to play than many of the games it can be compared to. This is, without a shadow of a doubt, an RPG – and despite the FPS combat full of{" "}
							<Link
								href="https://www.ign.com/wikis/cyberpunk-2077/Weapons"
								overflow-wrap="normal"
								text-overflow="clip"
								color="--secondary"
								target="_blank"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								hyphens="manual"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								fancy weapons
							</Link>
							, its pace is otherwise slow and deliberate. But even then, it’s not like other open world RPGs like Fallout 4 or The Witcher 3 thanks to one extremely important difference: combat is not an inherent part of travel. By that I mean getting from point A to point B in many open worlds is often full of enemies to fight on the way. Sure, you can stick to the roads or try to run right by them, but you still risk getting waylaid by bandits on the way to your real goal.
							<br />
							<br />
							Cyberpunk 2077 takes place in a city. A violent, dystopian nightmare of a city, sure, but still a city, meaning travel itself feels closer to something like GTA despite the structure around it feeling more like Fallout. As a result, I could sometimes go{" "}
							<Em>
								hours
							</Em>
							{" "}at a time without ever drawing a weapon, completing missions just by having conversations and sneaking around a bit. Fights can be found around almost any corner, with bounties to collect or{" "}
							<Link
								hover-text-decoration-line="underline"
								target="_blank"
								href="https://www.ign.com/wikis/cyberpunk-2077/Gangs"
								color="--secondary"
								text-decoration-line="initial"
							>
								gangs
							</Link>
							{" "}to attack at the drop of a hat, but you sort of have to go{" "}
							<Em>
								looking
							</Em>
							{" "}for trouble between big quest encounters if you want it instead of it coming to you naturally. It’s a crucial difference in the feel of this world, and one that feeds into how much its focus is truly on both story and player choice.
						</Text>
						<Components.Video margin="0px 0px 1.5em 0px" video="Nx_eQaHprEk" />
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							And frankly, I didn’t mind those larger chunks of quiet. They were slower, but not at all in a way where it felt like things were dragging. Besides, combat itself is probably one of Cyberpunk 2077’s weaker points. It’s certainly not bad, but if you’re playing this like a straight FPS then you’ll probably be disappointed. The most jarring thing about it is that enemies have a surprising amount of health, often acting as bullet sponges that can take multiple point blank shots to the head before going down for good. This led me to prefer sneaky takedowns where I could manage them, but stealth on its own doesn’t have a ton of depth beyond finding the right moment to crouch walk up behind someone – though using Quickhacks to scout out enemies and set up those opportunities was a lot of fun.
							<br />
							<br />
							Combat didn’t{" "}
							<Em>
								really
							</Em>
							{" "}start impressing me until midway through my second day, once I had unlocked a few more abilities and found a strategy I enjoyed. By the end of my playtime, I had a powerful rifle that could charge up shots and shoot through walls, as well as a legendary katana – I would sneak into a room, use a hack to reveal enemy positions, then get behind a wall and pick them off based on their hologram outlines alone, and if any ran at me I would swap to my sword and cut off their head. The spongy health bars were still there, but this strategy felt fantastic to me (and goodness gracious does the mid-fight music push the pace to even more exciting levels).
						</Text>
						<Text font="--header1" color="--secondary" margin="0 0 .5em 0" sm-font="400 2.8em/1 BlenderPro, sans-serif">
							If you try to play this like a straightforward shooter, you may be disappointed by its combat.
						</Text>
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0">
							Therein lies the strength of Cyberpunk 2077’s combat, I think. It didn’t necessarily amaze me in the heat of any given fight, but the vibe, style, and sheer volume of choices available let me eventually find something that had me grinning ear to ear. Pistols vs rifles vs shotguns, melee vs ranged, stealth vs brute force: all of these decisions are personal, and there are a dozen systems to let you customize and support whichever tactic is most appealing to you – be that through stat-based improvements or cybernetic augmentations. At one point I cleared out an entire four-floor base without ever firing a shot, while other times my character’s high{" "}
							<Link
								text-indent="0"
								hover-text-decoration-line="underline"
								color="--secondary"
								text-decoration-line="initial"
								word-break="normal"
								white-space="normal"
								target="_blank"
								href="https://www.ign.com/wikis/cyberpunk-2077/Attributes_and_Character_Perks_(Skill_Tree)"
								overflow-wrap="normal"
								text-overflow="clip"
								hyphens="manual"
							>
								Body stat
							</Link>
							{" "}would let me rip open certain doors and rush in head first. And if you're more interested in roleplaying like this is the tabletop RPG it’s based off of, the roads are literally clear for you to lean into that path as well.
						</Text>
						<Components.Video video="hkJFAkBgFHU" margin="0px 0px 1.5em 0px" />
						<Text font="--paragraph" color="--textGray" margin="0 0 2.5em 0" sm-margin="0 0 1.5em 0">
							One last thing that should be noted is that seeing this game in action for myself makes me glad CDPR opted for another delay (as much as it sucks that this peek only whet my appetite for more). I played through a streaming service with the host system running it on a PC with an RTX 3080 GPU, and while it ran buttery smooth performance-wise, there were a{" "}
							<Em>
								ton
							</Em>
							{" "}of bugs. Of course, the version I played is still in development, and the extra time from its latest delay was likely taken to make sure the issues I saw{" "}
							<Em>
								aren’t
							</Em>
							{" "}there at launch, but I had moments where my UI disappeared entirely, important mission dialogue didn’t play, map waypoints wouldn’t work properly, and plenty more. CDPR is obviously aware of these issues, so here’s hoping the extra time it’s taken will be enough to snuff them out.
							<br />
							<br />
							Even still, I came away from my 16 hours with Cyberpunk 2077 hungry for more, and with the sense that it had certainly had more to feed that hunger. It’s rad as hell, a gorgeous world that you could get absolutely lost inside of in precisely the manner you choose to do so. It’s certainly not without its rough edges, especially when it comes to its menus, but those blemishes didn’t do much to stop what it does well from shining brightly. Even after two full days I feel like I’ve only barely started to see what’s here, and it only got more exciting the deeper I went.
						</Text>
					</Box>
				</Box>
				<Box
					align-items="center"
					margin="0em 0em 1.67em 0em"
					height="2.5em"
					quarkly-title="Header"
					display="flex"
				>
					<Text
						margin="0em 1em 0em 0em"
						flex="0 0 auto"
						position="relative"
						quarkly-title="Title"
						font="--title"
						color="--secondary"
						text-transform="uppercase"
						letter-spacing="-4%"
						top=".15em"
					>
						more news
					</Text>
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
				<Box quarkly-title="Content" margin="2.5em 2.5em 2.5em 0em" sm-margin="0em .58em 0em 0em">
					<Components.Grid>
						<Components.Card>
							<Override slot="Content" href="/index/weapons_and_life" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-weapons.png?v=2020-12-05T08:19:16.733Z) 0% 0% /cover no-repeat scroll padding-box" />
							<Override slot="Name Text">
								Weapons and Life
							</Override>
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								PreOrder Steam
							</Override>
							<Override slot="Content" href="/index/preorder_steam" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-preorderstem.png?v=2020-12-05T08:19:16.719Z) 0% 0% /cover no-repeat scroll padding-box" />
						</Components.Card>
						<Components.Card>
							<Override slot="Name Text">
								Cyberpunk 2077's main story
							</Override>
							<Override slot="Content" href="/index/main_story" background="--color-textDark url(https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/news-mainstory.png?v=2020-12-05T08:19:16.763Z) 0% 0% /cover no-repeat scroll padding-box" />
						</Components.Card>
					</Components.Grid>
				</Box>
			</Components.Main>
		</Box>
	</Theme>;
});