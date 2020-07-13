// Core
import React, { FC, ReactElement, ReactNode } from "react";
// Styles
import "./index.scss";
// Types
import { ReactElementDefaultType } from "../../../types";

type PropTypes = {
  htmlFor: string;
  children: ReactNode;
  className?: string;
};

const Label: FC<ReactElementDefaultType & PropTypes> = ({
  htmlFor,
  children,
  className,
  ...props
}: ReactElementDefaultType & PropTypes): ReactElement => (
  <label {...props} htmlFor={htmlFor} className={`label ${className}`}>
    {children}
  </label>
);

export default Label;
