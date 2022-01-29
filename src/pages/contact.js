
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ContactView from "../components/views/ContactView"
import { useTitle } from "../utils/reactUtils";

const ContactPage = () => {

    const data = useSelector(x => x.data);
    const { t } = useTranslation();

    useTitle(t("contact"));

    return (
        <ContactView email={data.settings.Email} socials={data.socials} />
    )

}

export default ContactPage;