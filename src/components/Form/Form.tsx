import { TextField } from "@/ui/index";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface IForm
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  inputList: unknown[];
}

const Form: FC<IForm> = ({ inputList, ...props }) => {
  return (
    <form {...props}>
      {inputList.map((item: any) => (
        <TextField key={item.id} {...item} />
      ))}
    </form>
  );
};

export default Form;
