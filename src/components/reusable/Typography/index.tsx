// Core
import React, {
  CSSProperties,
  FC,
  ReactElement,
  ReactNode,
  useCallback,
} from "react";
// Styles
import "./index.scss";

type PropTypes = {
  Tag: string;
  className?: string;
  style?: CSSProperties;
  onClick?: Function;
  children: ReactNode;
  argsForOnClick: unknown[];
};

const Typography: FC<PropTypes> = ({
  Tag,
  className,
  style,
  onClick,
  children,
  argsForOnClick,
}: PropTypes): ReactElement => {
  const onclick = useCallback(
    (): void => onClick && onClick(...argsForOnClick),
    [onClick, argsForOnClick]
  );
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    <Tag className={className} style={style} onClick={onclick}>
      {children}
    </Tag>
  );
};

export default Typography;
