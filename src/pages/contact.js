
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import ContactView from "../components/views/ContactView";
import { viewActions } from "../state/slices/viewSlice";
import { HeadLayout } from "../layout";

const ContactPage = () => {
    const data = useSelector(x => x.data);
    const dispatch = useDispatch();

    return (
        <ContactView 
            email={data.settings.Email} 
            socials={data.socials}
            onComplete={() => dispatch(viewActions.setControlsVisible(true))} />
    )
}

export const Head = () => {
    const { t } = useTranslation();

    return <HeadLayout title={t("contact")} />
}

export default ContactPage;