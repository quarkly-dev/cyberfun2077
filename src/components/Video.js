import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import { Box, Image } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
const overrides = {
	'Wrapper': {
		kind: 'Box'
	},
	'Button': {
		kind: 'Box'
	}
};

const Video = ({
	video,
	...props
}) => {
	const [isPlay, setPlay] = useState(false);
	const [isReady, setReady] = useState(false);
	const playerRef = useRef(null);
	const {
		override,
		rest
	} = useOverrides(props, overrides, {});

	const onPlayVideo = () => {
		setPlay(true);
		playerRef.current.internalPlayer.playVideo();
	};

	const onFrameReady = e => {
		setReady(true);
		e.target.f.style = `
      top: 0;
      left: 0;
      height: 100%;
      position: absolute;
    `;
	};

	return <Box
		padding-top="56.25%"
		width="100%"
		height="0%"
		min-height="0%"
		font="--paragraph"
		position="relative"
		overflow="hidden"
		{...rest}
	>
		      
		<YouTube
			videoId={video}
			onReady={onFrameReady}
			opts={{
				width: '100%',
				playerVars: {
					autoplay: 0
				}
			}}
			style="border: 10px solid red;"
			ref={playerRef}
		/>
		      
		<Box
			top="0"
			right="0"
			bottom="0"
			left="0"
			position="absolute"
			align-items="center"
			justify-content="center"
			transition={`
          visibility .3s ${isPlay ? 'step-end' : 'step-start'} ${isPlay ? '.5s' : '0s'},
          opacity .3s ease ${isPlay ? '.5s' : '0s'}
        `}
			display="flex"
			opacity={isReady && !isPlay ? '1' : '0'}
			visibility={isReady && !isPlay ? 'visible' : 'hidden'}
			cursor="default"
			z-index="1"
			onClick={onPlayVideo}
		>
			        
			<Box
				width="4em"
				height="4em"
				background-color="--secondary"
				align-items="center"
				justify-content="center"
				display="flex"
				cursor="pointer"
				{...override('Button')}
			>
				          
				<Image
					left=".0625em"
					width="2em"
					src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/play.svg?v=2020-12-07T09:06:03.649Z"
					pointer-events="none"
					position="relative"
				/>
				        
			</Box>
			      
		</Box>
		      
		<Box
			top="0"
			right="0"
			bottom="0"
			left="0"
			background="#0A0C16"
			position="absolute"
			align-items="center"
			justify-content="center"
			transition="visibility .3s step-end .5s, opacity .3s ease .5s"
			display="flex"
			opacity={isReady ? '0' : '1'}
			visibility={isReady ? 'hidden' : 'visible'}
		>
			        
			<Image width="45%" src="https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/LogoVideo.svg?v=2020-12-05T08:57:34.620Z" position="relative" />
			      
		</Box>
		    
	</Box>;
};

const propInfo = {
	video: {
		title: 'Video ID',
		control: 'text',
		weight: 1
	}
};
const defaultProps = {
	video: 'j4BXmdGRg2Q'
};
export default Object.assign(Video, {
	title: 'YouTube Video Player',
	propInfo,
	defaultProps,
	overrides
});