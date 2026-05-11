import { Button as HeadlessButton, ButtonProps } from "@headlessui/react";
import clsx from "clsx";
import { useContext } from "react";

interface Button extends ButtonProps {
  children: React.ReactNode;
  color?: "blue" | "orange" | "purple";
  className?: string;
  disabled?: boolean;
}

const Button = ({ children, className, disabled, ...props }: Button) => {
  return (
    <HeadlessButton
      className={clsx(
        className,
        "btn-dark text-white",
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </HeadlessButton>
  );
};

export default Button;
