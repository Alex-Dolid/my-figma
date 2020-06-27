// Core
import React, { FC, ReactElement, useEffect, useState } from "react";
// Styles
import "./index.scss";
import Typography from "../Typography";
import { getUniqueKey } from "../../../helpers";

type PropTypes = {
  headTitles: string[];
  activeTab: number;
  children: ReactElement;
};

const Tabs: FC<PropTypes> = ({
  headTitles,
  activeTab = 0,
  children,
}: PropTypes): ReactElement => {
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

  useEffect(() => {
    setActiveTabIndex(activeTab);
  }, [activeTab]);

  return (
    <div className="tabs">
      <div className="tabs__head">
        <div className="tabs__titles">
          {headTitles.map((title) => (
            <Typography Tag="span" key={getUniqueKey()}>
              {title}
            </Typography>
          ))}
        </div>
      </div>
      <div className="tabs__body">
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            isActive: index === activeTabIndex,
          })
        )}
      </div>
    </div>
  );
};

export default Tabs;
