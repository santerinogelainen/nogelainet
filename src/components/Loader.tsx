import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useIntervalEffect } from "../utils/reactUtils";

type LoaderProps = {
  speed?: number;
};

const Loader: React.FC<LoaderProps> = ({ speed = 180 }) => {
  const { t } = useTranslation();
  const [dots, setDots] = useState("");

  useIntervalEffect(
    () => {
      setDots(dots.length === 3 ? "" : ".".repeat(dots.length + 1));
    },
    speed,
    [speed, dots],
  );

  return <div className="loader">{t("loading") + dots}</div>;
};

export default Loader;
