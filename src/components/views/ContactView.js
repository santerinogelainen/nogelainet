
import React from "react";
import SocialMediaList from "../SocialMediaList";
import BlockButton from "../BlockButton";
import { useTranslation } from "react-i18next";

const ContactView = ({
    email = "",
    socials = []
}) => {

    const { t } = useTranslation();

    const sendEmail = () => {
        window.location.href = "mailto:" + email;
    }

    return <div className="contacts">
        <div className="contact-email">
            <div className="large-text">
                {t("feelFreeToContactMe")}
            </div>
            <BlockButton text={email} onClick={ sendEmail } />
        </div>
        <SocialMediaList socials={socials} />
    </div>;

}

export default ContactView;