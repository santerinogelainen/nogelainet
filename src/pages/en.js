import React from "react";
import { Languages } from "../models/languages";
import LanguageView from "../components/views/LanguageView";

const EnPage = () => {
    return <LanguageView lang={Languages.En} />;
}

export default EnPage;