import React from "react"
import { useTranslation } from "react-i18next";
import { useInterval } from "../utils/reactUtils";
import _ from "lodash";

const Loader = ({
    speed = 180
}) => {

    const { t } = useTranslation();
    const [dots, setDots] = React.useState(0);

    useInterval(() => {
        setDots(dots === 3 ? 0 : dots + 1);
    }, speed);

    return (
        <div className="loader">
            {t("loading") + _.repeat(".", dots)}
        </div>
    )
}

export default Loader;