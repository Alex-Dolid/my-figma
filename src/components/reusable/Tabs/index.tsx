// Core
import React, {FC, ReactElement, useEffect, useState, useCallback} from "react";
// Libs
import classNames from "classnames";
// Styles
import "./index.scss";
// Components
import Typography from "../Typography";
// Helpers
import { getUniqueKey } from "../../../helpers";

type PropTypes = {
  headTitles: string[];
  activeTab?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

const Tabs: FC<PropTypes> = ({
  headTitles,
  activeTab = 0,
  children,
}: PropTypes): ReactElement => {
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

  const callbackByActiveTab = useCallback((index: number): void => {
    setActiveTabIndex(index);
  }, []);

  useEffect(() => {
    setActiveTabIndex(activeTab);
  }, [activeTab]);

  return (
    <div className="tabs">
      <div className="tabs__head">
        <div className="tabs__titles">
          {headTitles.map((title, index) => (
            <Typography
              Tag="span"
              className={classNames("tabs__title", { "tabs__title_active": index === activeTabIndex})}
              key={getUniqueKey()}
              argsForOnClick={[index]}
              onClick={callbackByActiveTab}
            >
              {title}
            </Typography>
          ))}
        </div>
      </div>
      <div className="tabs__body">
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            isActive: index === activeTabIndex,
          });
        })}
      </div>
    </div>
  );
};

export default Tabs;
