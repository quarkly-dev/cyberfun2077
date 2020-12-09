import React, { useRef, useLayoutEffect } from 'react';
import atomize from '@quarkly/atomize';
const path = 'https://uploads.quarkly.io/5fbbb8e92c4ef2001e329c56/images/BlenderPro';
const list = {
	production: {
		normal400ttf: `/fonts/BlenderPro/BlenderPro-Book.ttf`,
		normal400woff: `/fonts/BlenderPro/BlenderPro-Book.woff`,
		normal400woff2: `/fonts/BlenderPro/BlenderPro-Book.woff2`,
		normal500ttf: `/fonts/BlenderPro/BlenderPro-Medium.ttf`,
		normal500woff: `/fonts/BlenderPro/BlenderPro-Medium.woff`,
		normal500woff2: `/fonts/BlenderPro/BlenderPro-Medium.woff2`
	},
	development: {
		normal400ttf: `${path}-Book.ttf.png?v=2020-12-02T08:44:20.388Z`,
		normal400woff: `${path}-Book.woff.png?v=2020-12-02T08:44:20.386Z`,
		normal400woff2: `${path}-Book.woff2.png?v=2020-12-02T08:44:20.383Z`,
		normal500ttf: `${path}-Medium.ttf.png?v=2020-12-02T08:44:20.388Z`,
		normal500woff: `${path}-Medium.woff.png?v=2020-12-02T08:44:20.381Z`,
		normal500woff2: `${path}-Medium.woff2.png?v=2020-12-02T08:44:20.385Z`
	}
};

const getFont = mode => `
	@font-face {
		font-family: "BlenderPro";
		src: url("${list[mode].normal400woff2}") format("woff2"),
				 url("${list[mode].normal400woff}") format("woff"),
				 url("${list[mode].normal400ttf}") format("truetype");
		font-style: normal;
		font-weight: 400;
	};
	@font-face {
		font-family: "BlenderPro";
		src: url("${list[mode].normal500woff2}") format("woff2"),
				 url("${list[mode].normal500woff}") format("woff"),
				 url("${list[mode].normal500ttf}") format("truetype");
		font-style: normal;
		font-weight: 500;
	};
`;

const getAPI = () => {
	if (typeof window !== "undefined") {
		return window.QAPI || {};
	}

	if (typeof global !== "undefined") {
		return global.QAPI || {};
	}

	return {};
};

const Style = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	const {
		mode
	} = getAPI() || {};
	useLayoutEffect(() => {
		ref.current.innerHTML = ''; // getFont(mode);
	}, []);
	return <style {...props} ref={ref} />;
};

export default atomize(Style)();