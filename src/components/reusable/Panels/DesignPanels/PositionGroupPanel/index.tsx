// Core
import React, { ChangeEvent, ReactElement } from "react";
// Styles
import "./index.scss";
// Components
import Icon, { IconName } from "../../../Icon";
import Panel from "../../Panel/Panel";
import InputGroup from "../../../InputGroup";

const arrNameIcons: Array<IconName> = [
  "iconRotate",
  "iconBorderRadius"
];

const arrLetters = ["X", "Y", "W", "H"];

const onChange = (e: ChangeEvent): void => {

};

const PositionGroupPanel = (): ReactElement => {
  return (
    <Panel className="position-group-panel" title="Group" isWrapperBody>
      {
        arrLetters.map((letter) => (
          <InputGroup
            key={letter}
            name={`${letter}-group`}
            type="string"
            value="100"
            onChange={onChange}
            isLabel
            label={letter}
          />
        ))
      }
      {arrNameIcons.map((name) => (
        <InputGroup
          key={name}
          name={`${name}-group`}
          type="string"
          value="100"
          onChange={onChange}
          isLabel
          label={<Icon name={name} />}
        />
      ))}
    </Panel>
  );
};

export default PositionGroupPanel;
