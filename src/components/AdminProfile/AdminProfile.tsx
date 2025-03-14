// import { FC, useEffect, useState } from "react";

// import { LogRegInput } from "../LogRegInput/LogRegInput";
// import { useForm } from "../../hooks/useForm";
// import { z } from "zod";
// import { LogRegForm } from "../LogRegForm/LogRegForm";
// import "./AdminProfile.module.scss";
// import { useFormik } from "formik";

// const AdminProfile: FC = () => {
//   const formik = useFormik({
//     initialValues,
//     onSubmit: () => {},
//   });

//   const AdminSchema = z.object({
//     login: z
//       .string()
//       .min(2)
//       .max(12)
//       .regex(/[a-z0-9\sё-]/gi)
//       .optional(),
//     email: z
//       .string()
//       .min(8)
//       .max(28)
//       .email()
//       .regex(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
//       )
//       .optional(),
//     contactEmail: z
//       .string()
//       .min(8)
//       .max(28)
//       .email()
//       .regex(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
//       )
//       .optional(),
//     contactPhone: z.string().min(12).max(12).regex(/[0-9]/gi).optional(),
//     telegram: z
//       .string()
//       .regex(/https?:\/\/t.me\//)
//       .min(12)
//       .optional(),
//     whatsApp: z
//       .string()
//       .regex(/https?:\/\/wa.me\//)
//       .min(12)
//       .optional(),
//     vk: z.string(),
//   });

//   useEffect(() => {
//     setIsValid(initialProfileValidation);

//     if (AdminSchema.safeParse(values).error) {
//       AdminSchema.safeParse(values).error?.errors.forEach((element, i) => {
//         setIsValid({
//           ...isValid,
//           [element.path[0]]: { value: false, message: element.message },
//         });
//       });
//     }
//     console.log(AdminSchema.safeParse(values));
//   }, [values]);

//   return (
//     <section className="profile">
//       <h1 className="profile__title">Добрый день, Босс!</h1>
//       <LogRegForm isFormActive={true} isValid={isValid}>
//         <LogRegInput
//           title={"Логин"}
//           inputType={`text`}
//           onChange={onChange}
//           value={values["login"]}
//           name={"login"}
//           placeholder={"Логин"}
//           isFormActive={true}
//           isInputValid={isValid.login}
//         />
//         <LogRegInput
//           title={"Email"}
//           inputType={`email`}
//           onChange={onChange}
//           value={values["email"]}
//           name={"email"}
//           placeholder={"example@mail.ru"}
//           isFormActive={true}
//           isInputValid={isValid.email}
//         />
//         <LogRegInput
//           title={"Контактный email"}
//           inputType={`email`}
//           onChange={onChange}
//           value={values["contactEmail"]}
//           name={"contactEmail"}
//           placeholder={"example@mail.ru"}
//           isFormActive={true}
//           isInputValid={isValid.contactEmail}
//         />
//         <LogRegInput
//           title={"Контактный телефон"}
//           inputType={`tel`}
//           onChange={onChange}
//           value={values["contactPhone"]}
//           name={"contactPhone"}
//           placeholder={"+79998887766"}
//           isFormActive={true}
//           isInputValid={isValid.contactPhone}
//         />
//         <LogRegInput
//           title={"Telegram"}
//           inputType={`text`}
//           onChange={onChange}
//           value={values["telegram"]}
//           name={"telegram"}
//           placeholder={"https://t.me/tester"}
//           isFormActive={true}
//           isInputValid={isValid.telegram}
//         />
//         <LogRegInput
//           title={"WhatsApp"}
//           inputType={`text`}
//           onChange={onChange}
//           value={values["whatsApp"]}
//           name={"whatsApp"}
//           placeholder={"https://wa.me/tester"}
//           isFormActive={true}
//           isInputValid={isValid.whatsApp}
//         />
//         <LogRegInput
//           title={"VK"}
//           inputType={`text`}
//           onChange={onChange}
//           value={values["vk"]}
//           name={"vk"}
//           placeholder={"https://vk.com/tester"}
//           isFormActive={true}
//           isInputValid={isValid.vk}
//         />
//       </LogRegForm>
//     </section>
//   );
// };

// export default AdminProfile;
export {};
