// Core
import React, { FC, ReactElement, ReactNode, useCallback } from "react";
// Libs
import classNames from "classnames";
// Styles
import "./Option.scss";

type PropsTypes = {
  onClick: (value: string) => void;
  selected: boolean;
  children: ReactNode;
  value: string;
};

const Option: FC<PropsTypes> = ({
  onClick,
  selected,
  children,
  value,
}: PropsTypes): ReactElement => {
  const callback = useCallback(() => onClick(value), [onClick, value]);
  return (
    <div
      className={classNames("select__option", {
        select__option_selected: selected,
      })}
      onClick={callback}
    >
      {children}
    </div>
  );
};

export default Option;
