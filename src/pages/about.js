import React from "react";
import { useSelector } from "react-redux"
import AboutView from "../components/views/AboutView"

const AboutPage = () => {

    const data = useSelector(x => x.data);

    return (
        <AboutView text={data.settings.About} />
    )
}

export default AboutPage;