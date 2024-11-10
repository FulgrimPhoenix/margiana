import { useState } from "react";
import { IAdminProfileData } from "../../types";
import { LogRegInput } from "../LogRegInput/LogRegInput";
import { useForm } from "../../hooks/useForm";

export const AdminProfile = (adminData: IAdminProfileData) => {
  const [isValid, setIsValid] = useState({
    login: false,
    email: false,
    password: false,
    passwordRepeat: false,
  });
  function validateForm(name: string, value: boolean) {
    setIsValid({ ...isValid, [name]: value });
  }
  const { values, onChange, setValues } = useForm({});

  return (
    <section className="profile">
      <h1 className="profile__title">Добрый день, Босс!</h1>
      <form>
        <LogRegInput
          title={"Логин"}
          inputType={`text`}
          minLength={2}
          maxLength={12}
          onChange={onChange}
          value={values["login"]}
          name={"login"}
          placeholder={"Логин"}
          validateForm={validateForm}
          regax={/[^a-z0-9\sё-]/gi}
          advancedValidation={false}
          isFormActive={false}
        />
        <LogRegInput
          name="email"
          value={values["email"]}
          onChange={onChange}
          title="email"
          inputType="email"
          minLength={8}
          maxLength={30}
          validateForm={validateForm}
          placeholder={"test@mail.ru"}
          regax={
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
          }
          advancedValidation={false}
          isFormActive={false}
        />
      </form>
    </section>
  );
};
