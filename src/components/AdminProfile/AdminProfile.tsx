import { useEffect, useState } from "react";
import { IAdminProfileData } from "../../types";
import { LogRegInput } from "../LogRegInput/LogRegInput";
import { useForm } from "../../hooks/useForm";
import { z } from "zod";

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

  const AdminSchema = z.object({
    login: z
      .string()
      .min(2)
      .max(12)
      .regex(/[a-z0-9\sё-]/gi)
      .optional(),
    email: z.string().min(8).max(20).email().optional(),
    contactEmail: z.string().min(8).max(20).email().optional(),
    tel: z.string().min(12).max(12).optional(),
    telegram: z
      .string()
      .regex(/https?:\/\/t.me\//)
      .min(13)
      .optional(),
    whatsApp: z
      .string()
      .regex(/https?:\/\/wa.me\//)
      .min(14)
      .optional(),
    vk: z.string().min(2).max(12).optional(),
  });

  useEffect(() => {
    try {
      AdminSchema.parse(values);
    } catch (error) {}
  }, [values]);

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
      </form>
    </section>
  );
};
// <LogRegInput
//   name="email"
//   value={values["email"]}
//   onChange={onChange}
//   title="email"
//   inputType="email"
//   minLength={8}
//   maxLength={30}
//   validateForm={validateForm}
//   placeholder={"test@mail.ru"}
//   regax={
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
//   }
//   advancedValidation={true}
//   isFormActive={false}
// />
// <LogRegInput
//   title={"Контактный телефон"}
//   inputType={`tel`}
//   minLength={12}
//   maxLength={12}
//   onChange={onChange}
//   value={values["tel"]}
//   name={"tel"}
//   placeholder={"+79998887766"}
//   validateForm={validateForm}
//   regax={/[^0-9\s+]/gi}
//   advancedValidation={true}
//   isFormActive={false}
// />
// <LogRegInput
//   name="contactEmail"
//   value={values["contactEmail"]}
//   onChange={onChange}
//   title="Email для контакта с покупателями"
//   inputType="email"
//   minLength={8}
//   maxLength={30}
//   validateForm={validateForm}
//   placeholder={"test@mail.ru"}
//   regax={
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
//   }
//   advancedValidation={true}
//   isFormActive={false}
// />
// <LogRegInput
//   title={"Telegram"}
//   inputType={`text`}
//   minLength={2}
//   maxLength={12}
//   onChange={onChange}
//   value={values["telegram"]}
//   name={"telegram"}
//   placeholder={"https://t.me/tester"}
//   validateForm={validateForm}
//   regax={/^http/}
//   advancedValidation={true}
//   isFormActive={false}
// />
