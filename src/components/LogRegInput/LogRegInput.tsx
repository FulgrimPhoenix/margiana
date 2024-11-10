import React, { useEffect } from "react";
import "./LogRegInput.scss";
import { UseValidation } from "../../hooks/useValidation";

interface ILogRegInput {
  title: string;
  inputType: string;
  minLength: number;
  maxLength: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  placeholder: string;
  validateForm: (name: string, value: boolean) => void;
  regax: RegExp;
  advancedValidation: boolean;
  isFormActive: boolean;
}

export function LogRegInput({
  title,
  inputType,
  minLength,
  maxLength,
  onChange,
  value,
  name,
  placeholder,
  validateForm,
  regax,
  advancedValidation,
  isFormActive,
}: ILogRegInput): React.ReactElement {
  const { validationResult, onChangee, isValid } = UseValidation({
    initialValue: { isValid: false, errorMessage: "" },
    regax: regax,
    advancedValidation: advancedValidation,
  });

  useEffect(() => {
    validateForm(name, isValid);
  }, [isValid]);

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e);
    onChangee(e);
  }

  return (
    <div className="log-reg-input">
      <h2 className="log-reg-input__title">{title}</h2>
      <input
        name={name}
        className="log-reg-input__input"
        onChange={(e) => onInputChange(e)}
        value={value || ""}
        type={inputType}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        autoComplete="new-password"
        disabled={isFormActive ? true : false} // disabled={isFormActive ? "" : "disabled"}
      />
      <span
        className={`log-reg-input__error-message ${
          validationResult.isValid ? "" : "log-reg-input__error-message-active"
        }`}
      >
        {validationResult.errorMessage}
      </span>
    </div>
  );
}
