import React, { CSSProperties } from "react";
import * as KeyCode from "keycode-js";
import ConsoleInputPlaceholder from "./ConsoleInputPlaceholder";
import ConsoleInputCaret from "./ConsoleInputCaret";
import { ShakeAnimation } from "../animations/ShakeAnimation";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { CommandName, commands } from "../../commands/commands";

type ConsoleInputProps = {
  visible: boolean;
  onCommand?: (command: CommandName | null, event: any) => void;
  onHelpTextComplete?: () => void;
};

const ConsoleInput: React.FC<ConsoleInputProps> = ({
  visible = true,
  onCommand,
  onHelpTextComplete,
}) => {
  const wrapper = React.useRef(null);
  const { t } = useTranslation();

  const helpTexts = [t("aboutHelpText"), t("contactHelpText")];

  const [isShortcut, setIsShortcut] = React.useState(false);
  const [state, setState] = React.useState({
    value: "",
    autocompleteCommand: "",
  });

  React.useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  });

  function getAutoCompletePlaceholder() {
    if (state.autocompleteCommand === "" || state.value === "") return "";

    return state.autocompleteCommand.substring(state.value.length);
  }

  function onKeyUp(event) {
    if (
      event.key === KeyCode.CODE_CONTROL_LEFT ||
      event.key === KeyCode.CODE_CONTROL_RIGHT ||
      event.key === KeyCode.CODE_META_LEFT ||
      event.key === KeyCode.CODE_META_RIGHT ||
      event.key === "Control" ||
      event.key === "Meta"
    ) {
      setIsShortcut(false);
      return;
    }
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

    if (
      event.key === KeyCode.CODE_CONTROL_LEFT ||
      event.key === KeyCode.CODE_CONTROL_RIGHT ||
      event.key === KeyCode.CODE_META_LEFT ||
      event.key === KeyCode.CODE_META_RIGHT ||
      event.key === "Control" ||
      event.key === "Meta"
    ) {
      setIsShortcut(true);
      return;
    }

    if (
      isShortcut &&
      (event.key === KeyCode.CODE_C || event.key.toLowerCase() === "c")
    ) {
      onCopy(event);
      return;
    }

    if (
      isShortcut &&
      (event.key === KeyCode.CODE_V || event.key.toLowerCase() === "v")
    ) {
      onPaste(event);
      return;
    }

    if (event.key.length === 1) {
      const newValue =
        state.value + String.fromCharCode(event.keyCode).toLowerCase();

      setState({
        value: newValue,
        autocompleteCommand: determineAutocompleteCommand(newValue),
      });
    }
  }

  function onEnter(event) {
    const command = state.value as CommandName;

    if (commands.all.has(command)) {
      runCommand(command, event);
    } else {
      shake();
    }
  }

  function onBackspace(event) {
    event.preventDefault();
    event.stopPropagation();

    if (!state.value) return;

    const newValue = state.value.substring(0, state.value.length - 1);

    setState({
      value: newValue,
      autocompleteCommand: determineAutocompleteCommand(newValue),
    });
  }

  async function onCopy(event) {
    event.preventDefault();
    event.stopPropagation();
    await navigator.clipboard.writeText(state.value);
  }

  async function onPaste(event) {
    event.preventDefault();
    event.stopPropagation();
    const text = await navigator.clipboard.readText();
    setState({
      value: state.value + text,
      autocompleteCommand: determineAutocompleteCommand(text),
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
      onCommand(command, event);
    }

    setState({
      value: "",
      autocompleteCommand: "",
    });
  }

  function determineAutocompleteCommand(value) {
    if (!value || value.length <= 1) return "";

    const cmd = [...commands.all.values()].find((x) =>
      x.toLowerCase().startsWith(value.toLowerCase()),
    );

    return cmd || "";
  }

  const shake = () => {
    // shake animation for invalid command / autocompletion
    const animation = new ShakeAnimation(wrapper.current, false);
    animation.start();
  };

  const placeholder = state.value ? null : (
    <ConsoleInputPlaceholder
      enabled={visible}
      onComplete={onHelpTextComplete}
      helpTexts={helpTexts}
    />
  );

  const style: CSSProperties | undefined = visible
    ? undefined
    : { visibility: "hidden" };

  return (
    <div
      ref={wrapper}
      className="console-input-wrapper large-text"
      style={style}
    >
      {placeholder}
      <div className="console-input">
        <div className="console-input-text">{state.value}</div>
        <div className="console-input-suffix">
          <div className="console-input-autocomplete">
            {getAutoCompletePlaceholder()}
          </div>
          <ConsoleInputCaret enabled={visible} />
        </div>
      </div>
    </div>
  );
};

export default ConsoleInput;
