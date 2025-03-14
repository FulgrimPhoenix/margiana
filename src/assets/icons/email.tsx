import { FC } from "react";
import { IIcon } from "../../types/icons.types";

const EmailIcon: FC<IIcon> = (props) => {
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
        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
        stroke={props.color ? props.color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke={props.color ? props.color : "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default EmailIcon;
