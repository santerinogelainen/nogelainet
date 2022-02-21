import React from "react";
import * as KeyCode from "keycode-js";
import ConsoleInputPlaceholder from "./ConsoleInputPlaceholder";
import ConsoleInputCaret from "./ConsoleInputCaret";
import { ShakeAnimation } from "../animations/ShakeAnimation";
import { useTranslation } from "react-i18next";
import _ from "lodash";

const ConsoleInput = ({
    visible = true,
    commands = {},
    onCommand = null,
    onHelpTextComplete = null
}) => {

    const wrapper = React.useRef(null);
    const { t } = useTranslation();

    const helpTexts = [
        t("projectsHelpText"),
        t("aboutHelpText"),
        t("contactHelpText")
    ]

    const [state, setState] = React.useState({
        value: "",
        autocompleteCommand: ""
    });

    React.useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    });

    function getAutoCompletePlaceholder() {

        if (state.autocompleteCommand === "" || state.value === "")
            return "";

        return state.autocompleteCommand.substring(state.value.length);
    }

    function onKeyDown(event) {

        if (event.key === KeyCode.CODE_ENTER) {
            onEnter(event);
            return;
        }

        if (event.key === KeyCode.CODE_BACK_SPACE) {
            onBackspace(event);
            return;
        }

        if (event.key === KeyCode.CODE_TAB) {
            onTab(event);
            return;
        }

        if (event.key.length === 1) {

            const newValue = state.value + String.fromCharCode(event.keyCode).toLowerCase();

            setState({
                value: newValue,
                autocompleteCommand: determineAutocompleteCommand(newValue)
            });
        }
    }

    function onEnter(event) {

        const command = commands[state.value];

        if (command) {
            runCommand(command, event);
        }
        else {
            shake();
        }
    }

    function onBackspace(event) {

        event.preventDefault();
        event.stopPropagation();

        if (!state.value)
            return;

        const newValue = state.value.substring(0, state.value.length - 1);

        setState({
            value: newValue,
            autocompleteCommand: determineAutocompleteCommand(newValue)
        });
    }

    function onTab(event) {

        event.preventDefault();
        event.stopPropagation();

        if (state.autocompleteCommand === "") {
            shake();
            return;
        }

        setState({
            value: state.autocompleteCommand,
            autocompleteCommand: "",
        });
    }

    function runCommand(command, event) {
        if (onCommand) {
            onCommand(command.Type, event);
        }

        setState({
            value: "",
            autocompleteCommand: ""
        });
    }

    function determineAutocompleteCommand(value) {

        if (!value || value.length <= 1)
            return "";

        const cmds = _.pickBy(commands, function(val, key) {
            return _.startsWith(key.toUpperCase(), value.toUpperCase());
        });

        if (Object.keys(cmds).length) {
            const ordered = _.orderBy(cmds, x => x.Priority || 0, "desc");
            return ordered[0]?.Name;
        }

        return "";
    }

    const shake = () => {
        // shake animation for invalid command / autocompletion
        const animation = new ShakeAnimation(wrapper.current);
        animation.start();
    }

    const placeholder = state.value ? null : <ConsoleInputPlaceholder enabled={visible} onComplete={onHelpTextComplete} helpTexts={helpTexts} />;
    const style = visible ? undefined : { visibility: "hidden" };

    return (
        <div ref={wrapper} className="console-input-wrapper large-text" style={style}>
            {placeholder}
            <div className="console-input">
                <div className="console-input-text">{state.value}</div>
                <div className="console-input-suffix">
                    <div className="console-input-autocomplete">{getAutoCompletePlaceholder()}</div>
                    <ConsoleInputCaret enabled={visible} />
                </div>
            </div>
        </div>
    );
}

export default ConsoleInput;