// Core
import React, { FC, ReactNode } from "react";

type PropTypes = {
  type: "button" | "reset" | "submit" | undefined;
  className?: string;
  children: ReactNode;
};

const Button: FC<PropTypes> = ({
  type,
  children,
  className = "",
  ...props
}) => (
  <button type={type} className={`btn ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
