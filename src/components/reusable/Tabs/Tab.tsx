// Core
import React, { FC, ReactElement, ReactNode } from "react";
// Libs
import classNames from "classnames";

type PropTypes = {
  isActive?: boolean;
  className?: string;
  children: ReactNode;
};

const Tab: FC<PropTypes> = ({
  isActive = false,
  className = "",
  children,
}: PropTypes): ReactElement => (
  <div className={classNames("tabs__tab", { [className]: isActive })}>
    {isActive && children}
  </div>
);

export default Tab;
