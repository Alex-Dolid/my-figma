// Core
import React, {
  ChangeEvent,
  CSSProperties,
  FC,
  ReactElement,
  ReactNode,
} from "react";
// Libs
import classNames from "classnames";
// Styles
import "./index.scss";
// Components
import Label from "../Label";

type PropsTypes = {
  id: string;
  className?: string;
  onClick: (event: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  checked?: boolean;
  style?: CSSProperties;
  dependency?: string;
  isDisabled?: boolean;
};

const Checkbox: FC<PropsTypes> = ({
  id,
  className = "",
  checked = false,
  onClick,
  children,
  style,
  isDisabled = false,
}: PropsTypes): ReactElement => (
  <>
    <input
      type="checkbox"
      className={classNames("checkbox", className)}
      id={id}
      checked={checked}
      onChange={onClick}
    />
    <Label
      htmlFor={id}
      className={classNames("checkbox-label", className, {
        "checkbox-label_disabled": isDisabled,
      })}
      style={style}
    >
      {children}
    </Label>
  </>
);

export default Checkbox;
