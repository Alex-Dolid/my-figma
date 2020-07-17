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
import LayersPanel from "../../reusable/Panels/DesignPanels/LayersPanel";
import FillPanel from "../../reusable/Panels/DesignPanels/FillPanel";
import StrokePanel from "../../reusable/Panels/DesignPanels/StrokePanel";
import EffectsPanel from "../../reusable/Panels/DesignPanels/EffectsPanel";
import ExportPanel from "../../reusable/Panels/DesignPanels/ExportPanel";

const EditorRightSideBar: FC = () => (
  <div className="editor-right-side-bar">
    <Tabs headTitles={["Design", "Prototype"]}>
      <Tab>
        <AlignPositionPanel />
        <PositionGroupPanel />
        <ConstraintsPanel />
        <LayersPanel />
        <FillPanel />
        <StrokePanel />
        <EffectsPanel/>
        <ExportPanel />
      </Tab>
      <Tab>Tab2</Tab>
    </Tabs>
  </div>
);

export default EditorRightSideBar;
