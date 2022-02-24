import React from "react";
import { Languages } from "../models/languages";
import LanguageView from "../components/views/LanguageView";

const FiPage = () => {
    return <LanguageView lang={Languages.Fi} />;
}

export default FiPage;