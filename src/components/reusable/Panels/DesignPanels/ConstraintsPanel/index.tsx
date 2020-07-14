// Core
import React, { ReactElement } from "react";
// Styles
import "./index.scss";
// Components
import Icon, { IconName } from "../../../Icon";
import Panel from "../../Panel/Panel";
import Select from "../../../Select";
import Checkbox from "../../../Checkbox";

const arrNameIcons: Array<IconName> = ["iconConstraints", "iconReverseArrowHorizontal", "iconReverseArrowVertical"];

const ConstraintsPanel = (): ReactElement => {
  return (
    <Panel className="constraints-panel" title="Constraints" isWrapperBody>
      {arrNameIcons.map((name, i) => (
        i === 0 ? <Icon key={name} name={name} /> : null
      ))}
      <div className="constraints-panel__selects">
        {arrNameIcons.map((name, i) => (
          i !== 0 ? (
            <Select
              key={name}
              options={[{ value: "left", label: "left" }, { value: "right", label: "right" }]}
              onChange={() => {}}
              isMarkerLeft
              iconNameLeft={name}
              value="left"
            />
          ) : null
        ))}
      </div>
      <Checkbox
        id="constraints-checkbox"
        onClick={() => {}}
        className="constraints-panel__checkbox"
      >
        Fix position when scrolling
      </Checkbox>
    </Panel>
  );
};

export default ConstraintsPanel;
