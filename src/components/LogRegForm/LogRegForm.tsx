import React from "react";
import "./LogRegForm.scss";

interface ILogRegForm {
  children: JSX.Element[];
  isFormActive: boolean;
  isValid: Record<string, { value: boolean; message: string }>;
}

export const LogRegForm = ({
  children,
  isFormActive,
  isValid,
}: ILogRegForm): React.ReactElement => {
  return (
    <form className="log-reg-form">
      {children}
      {isFormActive ? (
        <button
          className="log-reg-form__submit"
          disabled={
            Object.values(isValid).every((_) => _.value === true) ? false : true
          }
        >
          Сохранить
        </button>
      ) : (
        <button className="log-reg-form__submit">Редактировать</button>
      )}
    </form>
  );
};
