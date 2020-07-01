// Core
import React, { ReactElement } from "react";
// Styles
import "./index.scss";
// Components
import Panel from "../../Panel/Panel";
import Icon, { IconName } from "../../../Icon";
import Button from "../../../../layouts/Button";

const arrNameIcons: Array<IconName> = [
  "iconAlignPositionBottom",
  "iconAlignPositionHorizontalCenters",
  "iconAlignPositionLeft",
  "iconAlignPositionMoreOptions",
  "iconAlignPositionRight",
  "iconAlignPositionTop",
  "iconAlignPositionVerticalCenters",
];

const AlignPositionPanel = (): ReactElement => (
  <Panel className="align-position-panel">
    {arrNameIcons.map((name) => (
      <Button type="button">
        <Icon name={name} />
      </Button>
    ))}
  </Panel>
);

export default AlignPositionPanel;
