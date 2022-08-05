import cn from "classnames";
import { ReactNode } from "react";
import s from "./button.module.css";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  isDisabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export const Button = (props: ButtonProps) => {
  const { isDisabled, children, onClick, variant = "primary", type = "button" } = props;

  return (
    <button
      className={cn(s.root, s[variant])}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
