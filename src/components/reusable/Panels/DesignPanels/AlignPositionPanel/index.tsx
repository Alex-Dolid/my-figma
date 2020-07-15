// Core
import React, { ReactElement } from "react";
// Styles
import "./index.scss";
// Components
import Panel from "../../Panel/Panel";
import Icon, { IconName } from "../../../Icon";
import Button from "../../../Button";

const arrNameIcons: Array<IconName> = [
  "iconAlignPositionLeft",
  "iconAlignPositionHorizontalCenters",
  "iconAlignPositionRight",
  "iconAlignPositionTop",
  "iconAlignPositionVerticalCenters",
  "iconAlignPositionBottom",
  "iconAlignPositionMoreOptions",
];

const AlignPositionPanel = (): ReactElement => (
  <Panel className="align-position-panel">
    {arrNameIcons.map((name) => (
      <Button type="button" key={name}>
        <Icon name={name} />
      </Button>
    ))}
  </Panel>
);

export default AlignPositionPanel;
