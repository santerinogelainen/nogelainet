import React from "react";
import { setLanguage } from "../../i18n"
import { navigate } from "gatsby"

const LanguageView = ({
    lang = ""
}) => {

    React.useEffect(() => {
        setLanguage(lang);
        navigate("/");
    });

    return null;
}

export default LanguageView;