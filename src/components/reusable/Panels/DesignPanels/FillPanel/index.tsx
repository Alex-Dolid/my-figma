// Core
import React, {ReactElement} from "react";
// Styles
import "./index.scss";
// Components
import Input from "../../../Input";
import Button from "../../../Button";
import Icon from "../../../Icon";
import Panel from "../../Panel/Panel";
import InputColorPicker from "../../../InputColorPicker";

const FillPanel = (): ReactElement => {
  return (
    <Panel className="fill-panel" title="Fill" isWrapperBody topButtons={["iconPlus"]}>
      <div className="fill-panel__color-input-group">
        <InputColorPicker/>
        <Input
          id="fill-panel-input"
          className="fill-panel__input"
          type="text"
          onChange={() => {}}
          value="100%"
        />
      </div>

      <Button type="button" className="fill-panel__button">
        <Icon name="iconEye" />
      </Button>
      <Button type="button" className="fill-panel__button">
        <Icon name="iconMinus" />
      </Button>
    </Panel>
  );
};

export default FillPanel;
