import * as React from "react"
import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../state/slices/viewSlice";
import IndexView from "../components/views/IndexView";
import { useTranslation } from "react-i18next";
import { HeadLayout } from "../layout";


const IndexPage = () => {
    const data = useSelector(x => x.data);
    const dispatch = useDispatch();
    
    return (
        <IndexView
            name={data.settings.FirstName}
            images={data.images ?? []}
            onComplete={() => dispatch(viewActions.setControlsVisible(true))} />

    )

}

export const Head = () => {
    const { t } = useTranslation();

    return <HeadLayout title={t("home")} />
}

export default IndexPage;
