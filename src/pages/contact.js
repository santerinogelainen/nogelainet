
import React from "react";
import { useSelector } from "react-redux";
import ContactView from "../components/views/ContactView"

const ContactPage = () => {

    const data = useSelector(x => x.data);

    return (
        <ContactView email={data.settings.Email} socials={data.socials} />
    )

}

export default ContactPage;