
import React from "react";
import SocialMediaList from "../SocialMediaList";
import BlockButton from "../BlockButton";
import { useTranslation } from "react-i18next";
import HighlightedWordAnimation from "../animations/HighlightedWordAnimation";

const ContactView = ({
    email = "",
    socials = [],
    onComplete = null
}) => {

    const { t } = useTranslation();
    const speed = 300;

    const sendEmail = () => {
        window.location.href = "mailto:" + email;
    }

    return <div className="contacts">
        <div className="contact-email">
            <div className="large-text">
                {t("feelFreeToContactMe")}
            </div>
            <HighlightedWordAnimation 
                    start={true} 
                    speed={speed} 
                    onComplete={onComplete}>
                <BlockButton text={email} onClick={ sendEmail } />
            </HighlightedWordAnimation>
        </div>
        <SocialMediaList socials={socials} />
    </div>;

}

export default ContactView;