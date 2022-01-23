
import React from "react";
import SocialMediaList from "../SocialMediaList";
import BlockButton from "../BlockButton";

const ContactView = ({
    email = "",
    socials = []
}) => {

    const sendEmail = () => {
        window.location.href = "mailto:" + email;
    }

    return <div className="contacts">
        <SocialMediaList socials={socials} />
        <BlockButton text={email} onClick={ sendEmail } />
    </div>;

}

export default ContactView;