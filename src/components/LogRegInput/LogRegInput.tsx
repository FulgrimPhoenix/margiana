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
  isFormActive: boolean;
  isInputValid: { value: boolean; message: string };
}

export function LogRegInput({
  title,
  inputType,
  onChange,
  value,
  name,
  placeholder,
  isFormActive,
  isInputValid,
}: ILogRegInput): React.ReactElement {
  return (
    <>
      <h2 className="log-reg-form__title">{title}</h2>
      <input
        name={name}
        className="log-reg-form__input"
        onChange={onChange}
        value={value || ""}
        type={inputType}
        placeholder={placeholder}
        autoComplete="new-password"
        disabled={!isFormActive ? true : false} // disabled={isFormActive ? "" : "disabled"}
      />
      <span
        className={`log-reg-form__error-message ${
          isInputValid.value ? "" : "log-reg-form__error-message-active"
        }`}
      >
        {isInputValid.message}
      </span>
    </>
  );
}
