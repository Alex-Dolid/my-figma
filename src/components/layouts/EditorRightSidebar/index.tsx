// Core
import React, { FC } from "react";
// Styles
import "./index.scss";
// Components
import Tabs from "../../reusable/Tabs";
import Tab from "../../reusable/Tabs/Tab";
import AlignPositionPanel from "../../reusable/Panels/DesignPanels/AlignPositionPanel";
import PositionGroupPanel from "../../reusable/Panels/DesignPanels/PositionGroupPanel";
import ConstraintsPanel from "../../reusable/Panels/DesignPanels/ConstraintsPanel";

const EditorRightSideBar: FC = () => (
  <div className="editor-right-side-bar">
    <Tabs headTitles={["Design", "Prototype"]}>
      <Tab>
        <AlignPositionPanel />
        <PositionGroupPanel />
        <ConstraintsPanel />
      </Tab>
      <Tab>Tab2</Tab>
    </Tabs>
  </div>
);

export default EditorRightSideBar;
