import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Box } from '@quarkly/widgets';

const Twitter = ({
	tweet,
	...props
}) => {
	return <Box {...props}>
		      
		<TwitterTweetEmbed tweetId={tweet} />
		    
	</Box>;
};

const propInfo = {
	tweet: {
		title: 'Tweet ID',
		control: 'text',
		weight: 1
	}
};
const defaultProps = {
	tweet: '1331629310633979905'
};
export default Object.assign(Twitter, {
	title: 'Twitter',
	propInfo,
	defaultProps
});