// Core
import React, { CSSProperties, FC, ReactElement, ReactNode } from "react";
// Styles
import "./Panel.scss";
// Components
import Typography from "../../Typography";

type PropTypes = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  title?: string;
};

const Panel: FC<PropTypes> = ({
  className = "",
  style,
  children,
  title = "",
}: PropTypes): ReactElement => (
  <div className={`panel ${className}`} style={style}>
    <Typography Tag="h6" className="panel__title">
      {title}
    </Typography>
    {children}
  </div>
);

export default Panel;
