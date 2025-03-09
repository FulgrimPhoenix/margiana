import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

interface ITextField
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  placeholder: string;
  active: boolean;
  error: string;
}

const TextField: FC<ITextField> = ({ title, active, error, ...props }) => {
  return (
    <>
      <h2 className="log-reg-form__title">{title}</h2>
      <input
        name={props.name}
        className="log-reg-form__input"
        onChange={props.onChange}
        value={props.value || ""}
        type={props.type}
        placeholder={props.placeholder}
        autoComplete="new-password"
        disabled={!active ? true : false} // disabled={isFormActive ? "" : "disabled"}
      />
      <span
        className={`log-reg-form__error-message ${
          !!error ? "" : "log-reg-form__error-message-active"
        }`}
      >
        {error}
      </span>
    </>
  );
};

const MemoizedTextField = React.memo(TextField, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});

export default MemoizedTextField;
