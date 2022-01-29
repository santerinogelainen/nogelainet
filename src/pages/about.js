import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux"
import AboutView from "../components/views/AboutView";
import { viewActions } from "../state/slices/viewSlice";
import { useTitle } from "../utils/reactUtils";

const AboutPage = () => {

    const data = useSelector(x => x.data);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useTitle(t("about"));

    return (
        <AboutView 
            text={data.settings.About} 
            image={data.settings.AboutImage}
            onComplete={() => dispatch(viewActions.setControlsVisible(true))} />
    )
}

export default AboutPage;