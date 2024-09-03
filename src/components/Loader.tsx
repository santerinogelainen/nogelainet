import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useIntervalEffect } from "../utils/reactUtils";
import _ from "lodash";

type LoaderProps = {
  speed?: number;
};

const Loader: React.FC<LoaderProps> = ({ speed = 180 }) => {
  const { t } = useTranslation();
  const [dots, setDots] = useState(0);

  useIntervalEffect(() => {
    setDots(dots === 3 ? 0 : dots + 1);
  }, [speed]);

  return <div className="loader">{t("loading") + _.repeat(".", dots)}</div>;
};

export default Loader;
