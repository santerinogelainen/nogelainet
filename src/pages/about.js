import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux"
import AboutView from "../components/views/AboutView";
import { viewActions } from "../state/slices/viewSlice";
import { Languages } from "../models/languages";
import { HeadLayout } from "../layout";

const AboutPage = () => {

    const data = useSelector(x => x.data);
    const dispatch = useDispatch();
    const { i18n } = useTranslation();

    const text = i18n.language === Languages.Fi ?
        data.settings.AboutFI || data.settings.About : 
        data.settings.About;

    return (
        <AboutView 
            text={text} 
            onComplete={() => dispatch(viewActions.setControlsVisible(true))} />
    )
}

export const Head = () => {
    const { t } = useTranslation();

    return <HeadLayout title={t("about")} />
}

export default AboutPage;