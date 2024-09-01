import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import AboutView from "../components/views/AboutView";
import { viewActions } from "../state/slices/viewSlice";
import { HeadLayout } from "../layout";

const AboutPage = () => {
  const dispatch = useDispatch();

  return (
    <AboutView
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    />
  );
};

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("about")} />;
};

export default AboutPage;
