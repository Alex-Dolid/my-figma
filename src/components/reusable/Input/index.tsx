// Core
import React, { ReactElement, FC } from "react";
// Styles
import "./index.scss";
// Types
import { InputType, ReactElementDefaultType } from "../../../types";

const Input: FC<InputType & ReactElementDefaultType> = ({
  id,
  name,
  type,
  isDisabled,
  isReadOnly,
  onChange,
  placeholder,
  value,
  className = ""
}: InputType & ReactElementDefaultType): ReactElement => (
  <input
    className={`input ${className}`}
    id={id}
    type={type}
    name={name}
    disabled={isDisabled}
    readOnly={isReadOnly}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);

export default Input;
