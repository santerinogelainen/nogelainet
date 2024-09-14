import React, { CSSProperties, useRef } from "react";
import ConsoleInputPlaceholder from "./ConsoleInputPlaceholder";
import ConsoleInputCaret from "./ConsoleInputCaret";
import { ShakeAnimation } from "../animations/ShakeAnimation";
import { useTranslation } from "react-i18next";
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
  const textContainer = useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState({
    value: "",
    autocompleteCommand: "",
  });

  React.useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  function getAutoCompletePlaceholder() {
    if (state.autocompleteCommand === "" || state.value === "") return "";

    return state.autocompleteCommand.substring(state.value.length);
  }

  function onKeyDown(event: KeyboardEvent) {
    const key = event.key.toLowerCase();

    if (key === "enter") {
      onEnter(event);
      return;
    }

    if (key === "backspace") {
      onBackspace(event);
      return;
    }

    if (key === "tab") {
      onTab(event);
      return;
    }

    if ((event.metaKey || event.ctrlKey) && key === "c") {
      onCopy(event);
      return;
    }

    if ((event.metaKey || event.ctrlKey) && key === "v") {
      onPaste(event);
      return;
    }

    if ((event.metaKey || event.ctrlKey) && key === "a") {
      onSelectAll(event);
      return;
    }

    if (key.length === 1) {
      const newValue = state.value + key;

      setState({
        value: newValue,
        autocompleteCommand: determineAutocompleteCommand(newValue),
      });
    }
  }

  function onEnter(event: KeyboardEvent) {
    const command = state.value as CommandName;

    if (commands.all.has(command)) {
      runCommand(command, event);
    } else {
      shake();
    }
  }

  const getUnselectedText = () => {
    const selection = window.getSelection?.();
    const container = textContainer.current;

    if (!selection || !container) {
      return undefined;
    }

    for (let i = 0; i < selection.rangeCount; i++) {
      const range = selection.getRangeAt(i);
      if (range.commonAncestorContainer.parentElement !== container) {
        continue;
      }
      // Is text-node
      if (range.commonAncestorContainer.nodeType !== 3) {
        continue;
      }
      if (!state.value.includes(range.toString())) {
        continue;
      }
      range.deleteContents();
    }

    if (container.textContent !== state.value) {
      return container.textContent;
    }

    return undefined;
  };

  function onBackspace(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (!state.value) return;

    const newValue =
      getUnselectedText() ?? state.value.substring(0, state.value.length - 1);

    setState({
      value: newValue,
      autocompleteCommand: determineAutocompleteCommand(newValue),
    });
  }

  async function onCopy(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
    await navigator.clipboard.writeText(state.value);
  }

  async function onPaste(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
    const text = await navigator.clipboard.readText();
    setState({
      value: state.value + text,
      autocompleteCommand: determineAutocompleteCommand(text),
    });
  }

  async function onSelectAll(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (
      textContainer.current?.firstChild &&
      window.getSelection &&
      document.createRange
    ) {
      const sel = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(textContainer.current.firstChild);
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
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
        <div className="console-input-text" ref={textContainer}>
          {state.value}
        </div>
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
