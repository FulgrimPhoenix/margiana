import { FC } from "react";
import { IIcon } from "../../types/icons.types";

const TelegramIcon: FC<IIcon> = (props) => {
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
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"
        stroke={props.color ? props.color : "#000"}
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default TelegramIcon;
