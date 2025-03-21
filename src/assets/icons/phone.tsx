import { FC } from "react";
import { IIcon } from "../../types/icons.types";

const PhoneIcon: FC<IIcon> = (props) => {
  const getSize = (size: IIcon["size"]) => {
    switch (size) {
      case "sm":
        return { width: "16px", height: "16px" };
      case "md":
        return { width: "24px", height: "24px" };
      case "lg":
        return { width: "32px", height: "32px" };
      default:
        return { width: "24px", height: "24px" };
    }
  };

  const currentSize = getSize(props.size);

  return (
    <svg
      width={currentSize.width}
      height={currentSize.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        strokeWidth="0.5"
        d="M14.795 2h-5.59c-1.115 0-1.519.116-1.926.334a2.272 2.272 0 0 0-.945.945C6.116 3.686 6 4.09 6 5.205v13.59c0 1.114.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h5.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.218-.407.334-.811.334-1.926V5.205c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945C16.314 2.116 15.91 2 14.795 2zM8 17.995V6.005h8v11.99H8z"
        fill={props.color ? props.color : "#000"}
        stroke={props.color ? props.color : "#000"}
      />
    </svg>
  );
};

export default PhoneIcon;
