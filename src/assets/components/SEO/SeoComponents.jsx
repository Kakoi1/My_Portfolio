import * as React from "react"

import myImage from '../../Images/385438962_790771539643042_7852980290333862625_n.jpg'
const baseUrl = window.location.origin;

 const mySeo = (props) =>(
    
    <>
    {props.customImage?(
        <>
        <meta property="og:image"
        content={props.customImage}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        </>
    ):(
        <meta name="og:image" content={baseUrl+myImage}
        />
    )}
    </>
);
export default mySeo;