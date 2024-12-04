import classNames from "classnames";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import Tooltip from "../Tooltip";

export type ConsoleScrollArrowDirection = "up" | "down";

export type ConsoleScrollArrowProps = {
  direction?: ConsoleScrollArrowDirection;
};

const ConsoleScrollArrow: React.FC<ConsoleScrollArrowProps> = ({
  direction = "down",
}) => {
  const { t } = useTranslation();

  const scroll = useCallback(() => {
    const amount = 150;
    const current = window.scrollY;
    const top = direction === "down" ? current + amount : current - amount;
    window.scrollTo({ top, left: 0, behavior: "smooth" });
  }, [direction]);

  return (
    <button
      onClick={scroll}
      className={classNames(
        "console-scroll-arrow",
        `console-scroll-arrow-${direction}`,
        "noselect",
      )}
    >
      <Tooltip text={t(`scroll${direction}`)}>&lt;</Tooltip>
    </button>
  );
};

export default ConsoleScrollArrow;
