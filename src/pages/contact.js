
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import ContactView from "../components/views/ContactView";
import { viewActions } from "../state/slices/viewSlice";
import { useTitle } from "../utils/reactUtils";

const ContactPage = () => {

    const data = useSelector(x => x.data);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useTitle(t("contact"));

    return (
        <ContactView 
            email={data.settings.Email} 
            socials={data.socials}
            onComplete={() => dispatch(viewActions.setControlsVisible(true))} />
    )

}

export default ContactPage;