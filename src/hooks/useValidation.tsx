import { useState } from "react";

interface IUseValidation {
  initialValue: { isValid: boolean; errorMessage: string };
  regax: RegExp;
  advancedValidation: boolean;
  password?: string;
}

export const UseValidation = ({
  initialValue,
  regax,
  advancedValidation,
  password,
}: IUseValidation) => {
  const [isValid, setIsValid] = useState(false);
  const [validationResult, setValidationResult] = useState(initialValue);

  function inputAdvancedValidation(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    if (e.target.name === "email") {
      return String(inputValue).match(regax) ? true : false;
    } else if (e.target.name === "passwordRepeat") {
      return inputValue === password;
    } else {
      console.log(
        1,
        regax.test(inputValue),
        !regax.test(inputValue),
        inputValue
      );

      return !regax.test(inputValue);
    }
  }

  return {
    validationResult,
    onChangee: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.validity.valid) {
        if (!advancedValidation && inputAdvancedValidation(e)) {
          setIsValid(true);
          setValidationResult({ isValid: true, errorMessage: "" });
          return;
        } else if (e.target.name === "passwordRepeat") {
          setIsValid(false);
          setValidationResult({
            isValid: false,
            errorMessage: "Пароли не совпадают",
          });
          return;
        } else if (e.target.name === "login") {
          setIsValid(false);
          setValidationResult({
            isValid: false,
            errorMessage:
              "Поле заполнено неверно. Используйте только латинские буквы и цифры",
          });
          return;
        } else if (e.target.name === "name" || e.target.name === "surname") {
          setIsValid(false);
          setValidationResult({
            isValid: false,
            errorMessage:
              "Поле заполнено неверно. Используйте только кириллицу",
          });
          return;
        } else if (e.target.name === "id") {
          setIsValid(false);
          setValidationResult({
            isValid: false,
            errorMessage: "Поле заполнено неверно. Используйте только цифры",
          });
          return;
        } else {
          setIsValid(false);
          setValidationResult({
            isValid: false,
            errorMessage: "Поле заполнено неверно",
          });
          return;
        }
      } else {
        setIsValid(e.target.validity.valid);
        setValidationResult({
          isValid: e.target.validity.valid,
          errorMessage: e.target.validationMessage,
        });
        return;
      }
    },
    isValid,
    setIsValid,
  };
};
