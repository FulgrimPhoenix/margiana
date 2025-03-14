import clsx from "clsx";
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import styles from "./Button.module.scss";

interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  variant?: "filled";
  size?: "sm" | "md" | "lg";
  color: "white" | "black";
}

const Button: FC<IButton> = React.memo(
  ({ title, variant, color, size = "md", ...props }) => {
    return (
      <button
        type={props.type}
        className={clsx(styles.button, {
          [styles["button-filled"]]: variant === "filled",
          [styles["white"]]: color === "white",
          [styles["black"]]: color === "black",
          [styles["sm"]]: size === "sm",
          [styles["md"]]: size === "md",
          [styles["lg"]]: size === "lg",
        })}
        {...props}
      >
        <span className={clsx(styles.title)}>{title}</span>
      </button>
    );
  },
  (prev, next) =>
    prev.disabled === next.disabled &&
    prev.title === next.title &&
    prev.onClick === next.onClick &&
    prev.variant === next.variant &&
    prev.style === next.style
);

export default Button;
