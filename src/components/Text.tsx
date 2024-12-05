import classNames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";

type TextProps = React.PropsWithChildren<{
  text?: string;
  key?: string;
  noselect?: boolean;
  className?: string;
}>;

const Text: React.FC<TextProps> = ({
  text,
  key,
  children,
  noselect,
  className,
}) => {
  const { t } = useTranslation();
  const value = text || (key ? t(key) : "") || children;
  return (
    <span className={classNames("text", className, { noselect })}>{value}</span>
  );
};

export default Text;
