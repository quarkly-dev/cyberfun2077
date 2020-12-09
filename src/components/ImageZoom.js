import React, { useState, useMemo, useRef } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Image } from '@quarkly/widgets';
const duration = 150;
const overrides = {
	'Preview': {
		'kind': 'Box',
		'props': {
			'cursor': 'pointer',
			'position': 'relative',
			'overflow': 'hidden',
			'height': '0',
			'min-height': '0',
			'padding-top': '56.25%',
			"md-padding": "0 0 0 0",
			"md-height": "auto"
		}
	},
	'Preview Image': {
		'kind': 'Image',
		"props": {
			'width': '100%',
			'height': '100%',
			"object-fit": "cover",
			'position': 'absolute',
			'top': '0',
			'left': '0',
			"src": "https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept8-preview-1x.png?v=2020-12-03T21:24:56.261Z",
			"srcSet": "https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept8-preview-2x.png?v=2020-12-03T21:25:20.035Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept8-preview-1x.png?v=2020-12-03T21:24:56.261Z 1x",
			"md-position": "relative",
			"md-bottom": 0,
			"md-right": 0
		}
	},
	'Preview Overlay': {
		'kind': 'Box',
		'props': {
			'top': '0',
			'left': '0',
			'width': '100%',
			'height': '100%',
			'background-color': 'rgba(2, 216, 243, 0.15)',
			'pointer-events': 'none',
			'align-items': 'center',
			'justify-content': 'center',
			'display': 'flex',
			'position': 'absolute'
		}
	},
	'Preview Overlay :hover': {
		'kind': 'Box',
		'props': {
			'transition': `
				visibility 0s linear 0s,
				opacity ${duration}ms linear 0s
			`,
			'visibility': 'visible',
			'opacity': '1'
		}
	},
	'Preview Overlay :normal': {
		'kind': 'Box',
		'props': {
			'transition': `
				visibility 0s linear ${duration}ms,
				opacity ${duration}ms linear 0s
			`,
			'visibility': 'hidden',
			'opacity': '0'
		}
	},
	'Preview Icon': {
		'kind': 'Box',
		'props': {
			'padding': '1em',
			'background-color': '--secondary',
			'display': 'flex'
		}
	},
	'Preview Icon Image': {
		'kind': 'Image',
		'props': {
			'width': '1.5em',
			"src": "https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/plus.svg?v=2020-12-02T15:19:45.766Z"
		}
	},
	'LightBox': {
		'kind': 'Box',
		'props': {
			'top': '0',
			'left': '0',
			'width': '100%',
			'height': '100%',
			'sm-font-size': '2.5vw',
			'align-items': 'center',
			'justify-content': 'center',
			'display': 'flex',
			'position': 'fixed',
			'z-index': '105'
		}
	},
	'LightBox :open': {
		'kind': 'Box',
		'props': {
			'transition': `
				visibility 0s linear 0s,
				opacity ${duration}ms linear 0s
			`,
			'pointer-events': 'all',
			'visibility': 'visible',
			'opacity': '1'
		}
	},
	'LightBox :close': {
		'kind': 'Box',
		'props': {
			'transition': `
				visibility 0s linear ${duration}ms,
				opacity ${duration}ms linear 0s
			`,
			'pointer-events': 'none',
			'visibility': 'hidden',
			'opacity': '0'
		}
	},
	'LightBox Wrapper': {
		'kind': 'Box',
		'props': {
			'margin': '3.5em',
			'max-width': '75%',
			'max-height': '75%',
			'position': 'relative',
			'z-index': '107'
		}
	},
	'LightBox Wrapper :open': {
		'kind': 'Box',
		'props': {
			'transition': `
				transform ${duration}ms linear 0s
			`,
			'transform': 'scale(1)'
		}
	},
	'LightBox Wrapper :close': {
		'kind': 'Box',
		'props': {
			'transition': `
				transform ${duration}ms linear 0s
			`,
			'transform': 'scale(.7)'
		}
	},
	'LightBox Overlay': {
		'kind': 'Box',
		'props': {
			'top': '0',
			'left': '0',
			'width': '100%',
			'height': '100%',
			'background': 'rgba(0,0,0,.9)',
			'position': 'fixed',
			'z-index': '106'
		}
	},
	'LightBox Overlay :open': {
		'kind': 'Box',
		'props': {}
	},
	'LightBox Overlay :close': {
		'kind': 'Box',
		'props': {}
	},
	'LightBox Content': {
		'kind': 'Box',
		'props': {
			'sm-padding': '0em',
			'position': 'relative',
			'z-index': '108'
		}
	},
	'LightBox Icon': {
		'kind': 'Box',
		'props': {
			'bottom': '100%',
			'left': '100%',
			'padding': '1em',
			'background-color': '--secondary',
			'user-select': 'none',
			'cursor': 'pointer',
			'position': 'absolute',
			'display': 'flex',
			'z-index': '109'
		}
	},
	'LightBox Icon Image': {
		'kind': 'Image',
		'props': {
			'width': '1.5em',
			"src": "https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/cross.svg?v=2020-12-02T15:19:45.766Z"
		}
	},
	'LightBox Image': {
		'kind': 'Image',
		"props": {
			'max-width': '75vw',
			'max-height': '75vh',
			'width': 'auto',
			"src": "https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept8-lightbox-1x.png?v=2020-12-03T21:25:39.346Z",
			"srcSet": "https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept8-lightbox-2x.png?v=2020-12-03T21:26:05.001Z 2x,https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/concept8-lightbox-1x.png?v=2020-12-03T21:25:39.346Z 1x"
		}
	}
};

const LightBox = ({
	onLightBoxClose,
	stateOpen,
	override
}) => {
	return <Box {...override('LightBox', `LightBox ${stateOpen}`)}>
		<Box {...override('LightBox Overlay', `LightBox Overlay ${stateOpen}`)} onClick={onLightBoxClose} />
		<Box {...override('LightBox Wrapper', `LightBox Wrapper-${stateOpen}`)}>
			<Box {...override('LightBox Icon')} onClick={onLightBoxClose}>
				<Image {...override('LightBox Icon Image')} />
			</Box>
			<Box {...override('LightBox Content')}>
				<Image {...override('LightBox Image')} />
			</Box>
		</Box>
	</Box>;
};

const ImageZoom = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides, {}),
	      timerExists = useRef(null),
	      [isExists, setExists] = useState(false),
	      [isOpen, setOpen] = useState(false),
	      [isHover, setHover] = useState(false),
	      onLightBoxOpen = () => {
		clearTimeout(timerExists.current);
		setExists(true);
		setTimeout(() => {
			setOpen(true);
		}, 0);
	},
	      onLightBoxClose = () => {
		timerExists.current = setTimeout(() => {
			setExists(false);
		}, duration);
		setOpen(false);
	},
	      onMouseEnter = () => setHover(true),
	      onMouseLeave = () => setHover(false),
	      stateHover = useMemo(() => isHover ? ':hover' : ':normal', [isHover]),
	      stateOpen = useMemo(() => isOpen ? ':open' : ':close', [isOpen]);

	return <Box {...rest}>
		<Box onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onLightBoxOpen} {...override('Preview')}>
			<Image {...override('Preview Image')} />
			<Box {...override('Preview Overlay', `Preview Overlay ${stateHover}`)}>
				<Box {...override('Preview Icon')}>
					<Image {...override('Preview Icon Image')} />
				</Box>
			</Box>
		</Box>
		<LightBox onLightBoxClose={onLightBoxClose} stateOpen={stateOpen} override={override} />
	</Box>;
};

export default Object.assign(ImageZoom, {
	overrides
});