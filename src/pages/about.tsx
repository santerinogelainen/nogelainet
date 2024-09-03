import React from "react";
import { useTranslation } from "react-i18next";
import AboutView from "../components/views/AboutView";
import { viewActions } from "../state/slices/viewSlice";
import { HeadLayout } from "../layout";
import { useAppDispatch } from "../state/store";

const AboutPage = () => {
  const dispatch = useAppDispatch();

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
