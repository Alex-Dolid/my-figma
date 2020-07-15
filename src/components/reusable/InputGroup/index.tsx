// Core
import React, { FC, ReactElement, ReactNode } from "react";
// Styles
import "./index.scss";
// Components
import Input from "../Input";
import Label from "../Label";
// Types
import { InputType } from "../../../types";

type PropTypes = {
  isLabel: boolean;
  label?: string | SVGElement | ReactNode;
};

const InputGroup: FC<InputType & PropTypes> = ({
  isLabel,
  label,
  ...inputProps
}: InputType & PropTypes): ReactElement => {
  return (
    <div className="input-group">
      {isLabel && (
        <Label htmlFor={inputProps.id} className="input-group__label">
          {label}
        </Label>
      )}
      <Input
        {...inputProps}
        id={inputProps.id}
        className={`input-group__input input-group__input_${inputProps.type}`}
      />
    </div>
  );
};

export default InputGroup;
