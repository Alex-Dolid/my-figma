// Core
import React, { ReactElement } from "react";
// Styles
import "./index.scss";
// Components
import Input from "../../../Input";
import Button from "../../../Button";
import Icon from "../../../Icon";
import Panel from "../../Panel/Panel";
import InputColorPicker from "../../../InputColorPicker";
import Select from "../../../Select";

const StrokePanel = (): ReactElement => {
  return (
    <Panel
      className="stroke-panel"
      title="Stroke"
      isWrapperBody
      topButtons={["iconPlus"]}
    >
      <div className="stroke-panel__color-input-group">
        <InputColorPicker />
        <Input
          id="stroke-panel-input-percent"
          className="stroke-panel__input"
          type="text"
          onChange={() => {}}
          value="100%"
        />
      </div>

      <Button type="button" className="stroke-panel__button">
        <Icon name="iconEye" />
      </Button>
      <Button type="button" className="stroke-panel__button">
        <Icon name="iconMinus" />
      </Button>

      <div className="stroke-panel__color-input-group mt">
        <Button type="button" className="stroke-panel__button">
          <Icon name="iconWidthStroke" />
        </Button>
        <Input
          id="stroke-panel-input-width"
          className="stroke-panel__input"
          type="text"
          onChange={() => {}}
          value="100%"
        />
      </div>
      <Select
        options={[
          { value: "Outside", label: "Outside" },
          { value: "Inside", label: "Inside" },
        ]}
        onChange={() => {}}
        value="Outside"
        className="stroke-panel__select mt"
      />
      <Button type="button" className="stroke-panel__button mt">
        <Icon name="iconThreeDots" />
      </Button>
    </Panel>
  );
};

export default StrokePanel;
