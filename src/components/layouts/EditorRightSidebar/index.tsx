// Core
import React, { FC } from "react";
// Styles
import "./index.scss";
// Components
import Tabs from "../../reusable/Tabs";
import Tab from "../../reusable/Tabs/Tab";
import AlignPositionPanel from "../../reusable/Panels/DesignPanels/AlignPositionPanel";

const EditorRightSideBar: FC = () => (
  <div className="editor-right-side-bar">
    <Tabs headTitles={["Design", "Prototype"]}>
      <Tab>
        <AlignPositionPanel />
      </Tab>
      <Tab>Tab2</Tab>
    </Tabs>
  </div>
);

export default EditorRightSideBar;
