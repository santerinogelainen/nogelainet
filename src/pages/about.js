import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"
import AboutView from "../components/views/AboutView"
import { useTitle } from "../utils/reactUtils";

const AboutPage = () => {

    const data = useSelector(x => x.data);
    const { t } = useTranslation();

    useTitle(t("about"));

    return (
        <AboutView text={data.settings.About} />
    )
}

export default AboutPage;