// Core
import React, { FC, ReactElement, ReactNode, MouseEvent } from "react";
// Libs
import classNames from "classnames";

type PropTypes= {
  type: "button" | "reset" | "submit" | undefined;
  className?: string;
  children: ReactNode;
  isActive?: boolean;
  onClick?: (e: MouseEvent) => void;
};

const Button: FC<PropTypes> = ({
  type,
  children,
  className = "",
  isActive = false,
  onClick,
  ...props
}: PropTypes): ReactElement => (
  <button
    onClick={onClick}
    type={type}
    className={classNames(`btn ${className}`, { "btn_active": isActive })}
    {...props}
  >
    {children}
  </button>
);

export default Button;
