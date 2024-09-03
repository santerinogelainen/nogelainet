import * as React from "react";
import { viewActions } from "../state/slices/viewSlice";
import IndexView from "../components/views/IndexView";
import { useTranslation } from "react-i18next";
import { HeadLayout } from "../layout";
import { useAppDispatch } from "../state/store";
import { settings } from "../constants";

const IndexPage = () => {
  const dispatch = useAppDispatch();

  const images = ["/images/me2.jpg", "/images/me3.jpg"];

  return (
    <IndexView
      name={settings.first_name}
      images={images}
      onComplete={() => dispatch(viewActions.setControlsVisible(true))}
    />
  );
};

export const Head = () => {
  const { t } = useTranslation();

  return <HeadLayout title={t("home")} />;
};

export default IndexPage;
