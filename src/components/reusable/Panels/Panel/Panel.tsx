// Core
import React, { CSSProperties, FC, ReactElement, ReactNode } from "react";
// Styles
import "./Panel.scss";
// Components
import Typography from "../../Typography";
import Icon, { IconName } from "../../Icon";
import Button from "../../Button";

type PropTypes = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  title?: string;
  isWrapperBody?: boolean;
  topButtons?: Array<IconName>;
};

const Panel: FC<PropTypes> = ({
  className = "",
  style,
  children,
  title = "",
  isWrapperBody = false,
  topButtons,
}: PropTypes): ReactElement => (
  <div className={`panel ${className}`} style={style}>
    <div className="panel__top" style={{ display: !title ? "none" : "flex" }}>
      <Typography Tag="h6" className="panel__title">
        {title}
      </Typography>
      <div className="panel__top-buttons">
        {topButtons &&
          topButtons.map((iconName) => (
            <Button type="button" key={iconName}>
              <Icon name={iconName} />
            </Button>
          ))}
      </div>
    </div>
    {isWrapperBody ? <div className="panel__body">{children}</div> : children}
  </div>
);

export default Panel;
