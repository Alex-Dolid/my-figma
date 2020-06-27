// Core
import React, {
  CSSProperties,
  FC,
  ReactElement,
  ReactNode,
  MouseEvent,
} from "react";
// Styles
import "./index.scss";

type PropTypes = {
  Tag: string;
  className?: string;
  style?: CSSProperties;
  onClick?: (event: MouseEvent) => void;
  children: ReactNode;
};

const Typography: FC<PropTypes> = ({
  Tag,
  className,
  style,
  onClick,
  children,
}: PropTypes): ReactElement => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  <Tag className={className} style={style} onClick={onClick}>
    {children}
  </Tag>
);

export default Typography;
