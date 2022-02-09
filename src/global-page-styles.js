import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {},
    "index": {
        "flex-wrap": "",
        "font": "",
        "letter-spacing": "",
        "display": "",
        "width": "",
        "height": "",
        "justify-content": "",
        "align-items": ""
    },
    "index/final_preview": {},
    "index/weapons_and_life": {},
    "index/preorder_steam": {},
    "index/main_story": {},
    "index/multiplayer": {},
    "cyberwiki": {},
    "cyberwiki/guide_beginners": {},
    "cyberwiki/gans_of_night_city": {},
    "cyberwiki/transport": {},
    "cyberwiki/weapons": {},
    "gallery": {},
    "gallery/concept_arts": {},
    "gallery/screenshots": {},
    "gallery/wallpapers": {},
    "gallery/steelbook_arts": {},
    "system_req": {},
    "feedback": {}
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
