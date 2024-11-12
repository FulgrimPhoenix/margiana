import React, { useEffect } from "react";
import "./LogRegInput.scss";
import { UseValidation } from "../../hooks/useValidation";

interface ILogRegInput {
  title: string;
  inputType: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  placeholder: string;
  isInputActive: boolean;
  isInputValid: { value: boolean; message: string };
}

export function LogRegInput({
  title,
  inputType,
  onChange,
  value,
  name,
  placeholder,
  isInputActive,
  isInputValid,
}: ILogRegInput): React.ReactElement {
  return (
    <div className="log-reg-input">
      <h2 className="log-reg-input__title">{title}</h2>
      <input
        name={name}
        className="log-reg-input__input"
        onChange={onChange}
        value={value || ""}
        type={inputType}
        placeholder={placeholder}
        autoComplete="new-password"
        disabled={!isInputActive ? true : false} // disabled={isInputActive ? "" : "disabled"}
      />
      <span
        className={`log-reg-input__error-message ${
          isInputValid.value ? "" : "log-reg-input__error-message-active"
        }`}
      >
        {isInputValid.message}
      </span>
    </div>
  );
}
