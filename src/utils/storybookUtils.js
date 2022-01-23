import React from "react";

export const SBContentPlaceholder = ({size = 100}) => {
    return <div style={{width: size, height: size, border: "1px solid red", color: "red"}}>
        Content
    </div>
}