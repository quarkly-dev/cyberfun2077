
const React = require("react");
const QAPI = require("./qapi").default;

export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    }
) => {

  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bai%20Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Coda:ital,wght@0,400;0,800&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Coda%20Caption:ital,wght@0,800&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Aldrich:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains%20Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chakra%20Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" />,
  ]);

  setPostBodyComponents([
    
    <script
        key="QAPI"
        dangerouslySetInnerHTML={{
            __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
        }}
    />,
  ]);
}