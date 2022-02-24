import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux"
import AboutView from "../components/views/AboutView";
import { viewActions } from "../state/slices/viewSlice";
import { useTitle } from "../utils/reactUtils";
import { Languages } from "../models/languages";

const AboutPage = () => {

    const data = useSelector(x => x.data);
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    useTitle(t("about"));

    const text = i18n.language === Languages.Fi ?
        data.settings.AboutFI || data.settings.About : 
        data.settings.About;

    return (
        <AboutView 
            text={text} 
            onComplete={() => dispatch(viewActions.setControlsVisible(true))} />
    )
}

export default AboutPage;