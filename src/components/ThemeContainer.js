import React from "react";
import { useSelector } from "react-redux";

const ThemeContainer = (props) => {

    const theme = useSelector(x => x.theme);

    return (
        <div className={"theme " + theme}>
            {props.children}
        </div>
    )

}

export default ThemeContainer;