import React from "react";
import { useTranslation } from "react-i18next";
import ContactView from "../components/views/ContactView";
import { viewActions } from "../state/slices/viewSlice";
import { HeadLayout } from "../layout";
import { useAppDispatch } from "../state/store";
import { settings } from "../constants";
import socials from "../data/socials";

const ContactPage = () => {
  const dispatch = useAppDispatch();

  return (
    <ContactView
      email={settings.email}
      socials={socials}
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    />
  );
};

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("contact")} />;
};

export default ContactPage;
