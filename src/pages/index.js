import * as React from "react"
import { useDispatch, useSelector } from "react-redux";
import { viewActions } from "../state/slices/viewSlice";
import IndexView from "../components/views/IndexView";


const IndexPage = () => {

    const data = useSelector(x => x.data);
    const dispatch = useDispatch();

    return (
        <IndexView
            name={data.settings.FirstName}
            title={data.settings.Title}
            location={data.settings.Location}
            images={data.images ?? []}
            onComplete={() => dispatch(viewActions.setControlsVisible(true))} />

    )

}

export default IndexPage;
