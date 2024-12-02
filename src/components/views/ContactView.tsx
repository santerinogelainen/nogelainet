import React from "react";
import SocialMediaList from "../SocialMediaList";
import BlockButton from "../BlockButton";
import { useTranslation } from "react-i18next";
import HighlightAnimation from "../animations/HighlightAnimation";
import { SocialMedia } from "../../types";

type ContactViewProps = {
  email: string;
  socials: Array<SocialMedia>;
  onComplete?: () => void;
};

const ContactView: React.FC<ContactViewProps> = ({
  email,
  socials,
  onComplete,
}) => {
  const { t } = useTranslation();
  const speed = 300;
  const parts = email.split("@");
  let emailJsx: Array<JSX.Element | string> = [email];

  if (parts.length === 2) {
    emailJsx = [
      parts[0],
      <span className="email-at" key={"email-at"}>
        @
      </span>,
      parts[1],
    ];
  }

  const sendEmail = () => {
    window.location.href = "mailto:" + email;
  };

  return (
    <div className="contacts">
      <div className="contact-email">
        <div className="large-text">{t("feelFreeToContactMe")}</div>
        <HighlightAnimation start={true} speed={speed} onComplete={onComplete}>
          <BlockButton onClick={sendEmail}>{emailJsx}</BlockButton>
        </HighlightAnimation>
      </div>
      <SocialMediaList socials={socials} />
    </div>
  );
};

export default ContactView;
