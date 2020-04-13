import React from "react";
import GetLink from "../SharedComponents/DynamicRouter";
import "../style.css";

function MyComponent() {
    return (
        <div>
            <GetLink title='Page 1' Disp='page-1' Class='img p1'></GetLink>
            <GetLink title='Page 2' Disp='page-2' Class='img p2'></GetLink>
            <GetLink title='Page 3' Disp='page-3' Class='img p3'></GetLink>            
        </div>
    );
}

export default MyComponent;