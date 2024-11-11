import { useState } from "react";

export const useForm = (initialValue: Record<string, string>) => {
  const [values, setValues] = useState(initialValue);

  return {
    values,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
    setValues,
  };
};
